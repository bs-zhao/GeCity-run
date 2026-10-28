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
            let t0 = trialStart;
            let currentEnterAt = null;
            let lastViewedCell = 0;

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

            function pushEvent(code) {
                arr_fix.push(code);
                const t1 = performance.now();
                arr_time.push(t1 - t0);
                eventTimeline.push({cell: code, time_ms: t1-trialStart});
                t0 = t1;
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
                if (currentCell !== 0 && currentCell !== code) {
                    pushEvent(0);
                }
                currentCell = code;
                currentEnterAt = performance.now();
                lastViewedCell = code;
                el.textContent = value === 1 ? "Yes" : "No";
                if (firstCell === null) firstCell = code;
                viewCounts[code]++;
                pushEvent(code);
            }

            function onLeave(el) {
                if (currentCell !== 0) {
                    dwellTimes[currentCell] += Math.max(0, performance.now() - currentEnterAt);
                }
                el.textContent = "?";
                pushEvent(0);
                currentCell = 0;
                currentEnterAt = null;
            }

            cells.forEach(({ idA, idB, fi }) => {
                const elA = document.getElementById(idA);
                const elB = document.getElementById(idB);
                const codeA = cellId("A", fi);
                const codeB = cellId("B", fi);
                const valA = trial.features_a[fi];
                const valB = trial.features_b[fi];

                elA.addEventListener("mouseenter", () => onEnter(elA, codeA, valA));
                elA.addEventListener("mouseleave", () => onLeave(elA));
                elB.addEventListener("mouseenter", () => onEnter(elB, codeB, valB));
                elB.addEventListener("mouseleave", () => onLeave(elB));
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
                response = info;

                if (currentCell !== 0) {
                    const lastDur = arr_time.length ? arr_time[arr_time.length - 1] : 0;
                    dwellTimes[currentCell] += lastDur;
                    lastCellBeforeResponse = currentCell;
                    pushEvent(0);
                    currentCell = 0;
                    currentEnterAt = null;
                } else {
                    lastCellBeforeResponse = lastViewedCell;
                }

                const t1 = performance.now();
                arr_time.push(t1 - t0);
                eventTimeline.push({cell: 0, time_ms: t1-trialStart, event: "response"});

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
                    response: response.key,
                    correct: correct,
                    correct_key: trial.correct_key,
                    choice_city: choiceCity,
                    larger_city: trial.correct_key === "a" ? "A" : "B",
                    arr_fix: arr_fix,
                    arr_time: arr_time,
                    event_timeline: eventTimeline,
                    view_counts: viewCounts,
                    dwell_times: dwellTimes,
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
