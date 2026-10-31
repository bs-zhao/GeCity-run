var citysearch = (function (jspsych) {
    "use strict";

    const info = {
        name: "city-search",
        parameters: {
            features_a: {
                type: jspsych.ParameterType.INT,
                array: true,
                default: undefined,
            },
            features_b: {
                type: jspsych.ParameterType.INT,
                array: true,
                default: undefined,
            },
            feature_labels: {
                type: jspsych.ParameterType.STRING,
                array: true,
                default: undefined,
            },
            feature_ids: {
  // 1-5 for A side, 6-10 for B side encoding
                type: jspsych.ParameterType.STRING,
                array: true,
                default: undefined,
            },
            feature_positive: {
                type: jspsych.ParameterType.BOOL,
                array: true,
                default: undefined,
            },
            correct_key: {
                type: jspsych.ParameterType.KEY,
                default: "a",
            },
            choices: {
                type: jspsych.ParameterType.KEYS,
                default: ["a", "d", "ArrowLeft", "ArrowRight"],
            },
            is_practice: {
                type: jspsych.ParameterType.BOOL,
                default: false,
            },
            trial_index: {
                type: jspsych.ParameterType.INT,
                default: 0,
            },
            city_a_name: {
                type: jspsych.ParameterType.STRING,
                default: "",
            },
            city_b_name: {
                type: jspsych.ParameterType.STRING,
                default: "",
            },
            city_a_pop: {
                type: jspsych.ParameterType.INT,
                default: 0,
            },
            city_b_pop: {
                type: jspsych.ParameterType.INT,
                default: 0,
            },
            immediate_finish: {
                type: jspsych.ParameterType.BOOL,
                default: false,
            },
        },
    };

    class CitySearchPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }

        trial(display_element, trial) {
            const N = trial.feature_labels.length;
            const layout = computeArcLayout(N);
            const { cx, cityAX, cityBX, cityLabelY, rows } = layout;
            const CELL = layout.cell;
            const LABEL_W = layout.labelW;

            let response = { rt: null, key: null };
            const arr_fix = [0];
            const arr_time = [];
            const eventTimeline = [];
            const trialStart = performance.now();
            const trialStartedAtUtc = new Date().toISOString();
            let t0 = trialStart;
            let lastViewedCell = 0;
            let currentReveal = null;
            let currentElement = null;
            let responseAtMs = null;
            let responseAtUtc = null;
            const mouseReveals = [];

            const viewCounts = {};
            const dwellTimes = {};
            for (let i = 1; i <= 10; i++) {
                viewCounts[i] = 0;
                dwellTimes[i] = 0;
            }

            let currentCell = 0;
            let firstCell = null;
            let lastCellBeforeResponse = 0;

            function cellId(citySide, featIdx) {
                return citySide === "A" ? featIdx + 1 : featIdx + 6;
            }

            function cellDetails(code) {
                const featureIndex = (code - 1) % N;
                const city = code <= N ? "A" : "B";
                const value = city === "A" ? trial.features_a[featureIndex] : trial.features_b[featureIndex];
                return {
                    city: city,
                    feature_position: featureIndex + 1,
                    feature_id: trial.feature_ids[featureIndex],
                    feature_label: trial.feature_labels[featureIndex],
                    value: value,
                    value_label: value === 1 ? "Yes" : "No",
                };
            }

            function pushEvent(code, event, now, extras = {}) {
                arr_fix.push(code);
                arr_time.push(now - t0);
                eventTimeline.push({ cell: code, time_ms: now - trialStart, event: event, ...extras });
                t0 = now;
            }

            // Every reveal is saved with city, feature, value, onset, offset and duration.
            // Closing at the response key fixes the prior dwell-time undercount/overcount.
            function closeCurrentReveal(now, reason) {
                if (currentReveal === null) return;
                const cell = currentReveal.cell;
                const duration = Math.max(0, now - currentReveal.started_at_perf_ms);
                const completed = {
                    order: currentReveal.order,
                    cell: cell,
                    city: currentReveal.city,
                    feature_position: currentReveal.feature_position,
                    feature_id: currentReveal.feature_id,
                    feature_label: currentReveal.feature_label,
                    value: currentReveal.value,
                    value_label: currentReveal.value_label,
                    start_ms: currentReveal.start_ms,
                    end_ms: now - trialStart,
                    duration_ms: duration,
                    end_reason: reason,
                };
                mouseReveals.push(completed);
                dwellTimes[cell] += duration;
                if (currentElement !== null) currentElement.textContent = "?";
                pushEvent(0, "exit", now, { from_cell: cell, reason: reason });
                currentCell = 0;
                currentReveal = null;
                currentElement = null;
            }

            function keyToCity(key) {
                if (key === "a" || key === "ArrowLeft") return "A";
                if (key === "d" || key === "ArrowRight") return "B";
                return null;
            }

            function lastViewSupports(choiceKey) {
                if (lastCellBeforeResponse === 0) return null;
                const fi = (lastCellBeforeResponse - 1) % 5;
                const side = lastCellBeforeResponse <= 5 ? "A" : "B";
                const val = side === "A" ? trial.features_a[fi] : trial.features_b[fi];
                const positive = trial.feature_positive[fi];
                const otherSide = side === "A" ? "B" : "A";
                const otherVal = side === "A" ? trial.features_b[fi] : trial.features_a[fi];
                if (val === otherVal) return null;
                let pointsTo;
                if (positive) {
                    pointsTo = val === 1 ? side : otherSide;
                } else {
                    pointsTo = val === 1 ? otherSide : side;
                }
                const chosen = keyToCity(choiceKey);
                return pointsTo === chosen;
            }

            let html = `
<style>
  #cs-root { position: fixed; inset: 0; font-family: Arial, sans-serif; user-select: none; }
  #cs-city-a, #cs-city-b { position: fixed; font-size: 20px; font-weight: bold; transform: translate(-50%, -50%); }
  .cs-cell {
    position: fixed; width: ${CELL}px; height: ${CELL}px;
    border: 2px solid #333; border-radius: 10px;
    background: #f5f5f5; display: flex; align-items: center; justify-content: center;
    font-size: 18px; font-weight: bold; color: #222; cursor: default;
  }
  .cs-label {
    position: fixed; width: ${LABEL_W}px; text-align: center;
    font-size: 15px; font-weight: 600; color: #333;
    transform: translate(-50%, -50%);
  }
</style>
<div id="cs-root">
  <div id="cs-city-a" style="left:${cityAX}px; top:${cityLabelY}px;">City A</div>
  <div id="cs-city-b" style="left:${cityBX}px; top:${cityLabelY}px;">City B</div>
`;

            const cells = [];

            for (const row of rows) {
                const { fi, y, leftX, rightX } = row;
                const label = trial.feature_labels[fi];

                const idA = `cs-a-${fi}`;
                const idB = `cs-b-${fi}`;

                html += `<div class="cs-cell" id="${idA}" style="left:${leftX}px; top:${y - CELL / 2}px;">?</div>`;
                html += `<div class="cs-label" style="left:${cx}px; top:${y}px;">${label}</div>`;
                html += `<div class="cs-cell" id="${idB}" style="left:${rightX}px; top:${y - CELL / 2}px;">?</div>`;

                cells.push({ idA, idB, fi });
            }

            html += `</div>`;
            display_element.innerHTML = html;

            function onEnter(el, code, value) {
                if (response.key !== null || currentCell === code) return;
                const now = performance.now();
                if (currentReveal !== null) closeCurrentReveal(now, "switch");
                const detail = cellDetails(code);
                currentCell = code;
                currentElement = el;
                currentReveal = {
                    order: mouseReveals.length + 1,
                    cell: code,
                    ...detail,
                    started_at_perf_ms: now,
                    start_ms: now - trialStart,
                };
                lastViewedCell = code;
                el.textContent = value === 1 ? "Yes" : "No";
                if (firstCell === null) firstCell = code;
                viewCounts[code]++;
                pushEvent(code, "enter", now, detail);
            }

            function onLeave(el, code) {
                if (currentCell === code) closeCurrentReveal(performance.now(), "mouse_leave");
                el.textContent = "?";
            }

            cells.forEach(({ idA, idB, fi }) => {
                const elA = document.getElementById(idA);
                const elB = document.getElementById(idB);
                const codeA = cellId("A", fi);
                const codeB = cellId("B", fi);
                const valA = trial.features_a[fi];
                const valB = trial.features_b[fi];

                elA.addEventListener("mouseenter", () => onEnter(elA, codeA, valA));
                elA.addEventListener("mouseleave", () => onLeave(elA, codeA));
                elB.addEventListener("mouseenter", () => onEnter(elB, codeB, valB));
                elB.addEventListener("mouseleave", () => onLeave(elB, codeB));
            });

            const keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: after_response,
                valid_responses: trial.choices,
                rt_method: "performance",
                persist: false,
                allow_held_key: false,
            });

            const self = this;

            function after_response(info) {
                if (response.key !== null) return;
                const now = performance.now();
                response = info;
                responseAtMs = now - trialStart;
                responseAtUtc = new Date().toISOString();

                lastCellBeforeResponse = currentCell !== 0 ? currentCell : lastViewedCell;
                if (currentReveal !== null) closeCurrentReveal(now, "response");

                // Keep the original transition arrays; response is the final event.
                arr_time.push(now - t0);
                eventTimeline.push({
                    cell: 0,
                    time_ms: responseAtMs,
                    event: "response",
                    key: info.key,
                    choice_city: keyToCity(info.key),
                    rt_ms: info.rt,
                });

                const choiceCity = keyToCity(info.key);
                const correctCity = trial.correct_key === "a" ? "A" : "B";
                const correct = choiceCity === correctCity;
                if (trial.immediate_finish) {
                    end_trial(correct, choiceCity);
                } else {
                    display_element.innerHTML = `<div style="position:fixed; inset:0; display:flex; align-items:center; justify-content:center; text-align:center; font-size:22px; font-family:Arial,sans-serif;">You chose City ${choiceCity}</div>`;
                    setTimeout(() => end_trial(correct, choiceCity), 600);
                }
            }

            function end_trial(correct, choiceCity) {
                self.jsPsych.pluginAPI.clearAllTimeouts();
                if (typeof keyboardListener !== "undefined") {
                    self.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                }

                const uniqueViewed = Object.keys(viewCounts).filter(k => viewCounts[k] > 0).map(Number);
                const nUnique = uniqueViewed.length;
                const nTotalViews = uniqueViewed.reduce((s, k) => s + viewCounts[k], 0);
                const nRepeated = nTotalViews - nUnique;

                let firstSide = null;
                let firstFeatureIdx = null;
                if (firstCell !== null) {
                    firstSide = firstCell <= 5 ? "A" : "B";
                    firstFeatureIdx = (firstCell - 1) % 5;
                }

                const trial_data = {
                    rt: response.rt,
                    decision_rt_ms: responseAtMs,
                    response: response.key,
                    trial_started_at_utc: trialStartedAtUtc,
                    response_at_utc: responseAtUtc,
                    trial_finished_at_utc: new Date().toISOString(),
                    trial_duration_ms: performance.now() - trialStart,
                    task_trial_index: trial.trial_index,
                    task_phase: trial.is_practice ? "practice" : "main",
                    correct: correct,
                    correct_key: trial.correct_key,
                    choice_city: choiceCity,
                    larger_city: trial.correct_key === "a" ? "A" : "B",
                    arr_fix: arr_fix,
                    arr_time: arr_time,
                    event_timeline: eventTimeline,
                    mouse_reveals: mouseReveals,
                    view_counts: viewCounts,
                    dwell_times: dwellTimes,
                    view_summary: Array.from({ length: N * 2 }, (_, index) => {
                        const cell = index + 1;
                        return { cell: cell, ...cellDetails(cell),
                            view_count: viewCounts[cell], total_dwell_ms: dwellTimes[cell] };
                    }),
                    total_search_dwell_ms: mouseReveals.reduce((sum, item) => sum + item.duration_ms, 0),
                    time_to_first_reveal_ms: mouseReveals.length ? mouseReveals[0].start_ms : null,
                    first_cell: firstCell,
                    first_side: firstSide,
                    first_feature_idx: firstFeatureIdx,
                    first_feature_position: firstFeatureIdx !== null ? firstFeatureIdx + 1 : null,
                    first_feature_id: firstFeatureIdx !== null ? trial.feature_ids[firstFeatureIdx] : null,
                    last_cell_before_response: lastCellBeforeResponse,
                    n_unique_viewed: nUnique,
                    n_total_views: nTotalViews,
                    n_repeated_views: nRepeated,
                    unique_cells_viewed: uniqueViewed,
                    last_view_supports_choice: lastViewSupports(response.key),
                    is_practice: trial.is_practice,
                    trial_index: trial.trial_index,
                    city_a_name: trial.city_a_name,
                    city_b_name: trial.city_b_name,
                    city_a_pop: trial.city_a_pop,
                    city_b_pop: trial.city_b_pop,
                    features_a: trial.features_a,
                    features_b: trial.features_b,
                    feature_labels: trial.feature_labels,
                    feature_ids: trial.feature_ids,
                    position_feature_map: trial.feature_ids.map(function (id, i) {
                        return { position: i + 1, feature_id: id, feature_label: trial.feature_labels[i] };
                    }),
                };

                display_element.innerHTML = "";
                self.jsPsych.finishTrial(trial_data);
            }
        }
    }

    CitySearchPlugin.info = info;
    return CitySearchPlugin;
})(jsPsychModule);
