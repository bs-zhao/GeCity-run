// GeCity participant-controlled rest screen.
// Presented after 1/3 and 2/3 of the MAIN decision trials, never during practice.
// The elapsed rest duration is saved separately from response times.
var gecitybreak = (function (jspsych) {
 "use strict";
 const info = {
  name: "gecity-break",
  parameters: {
   break_number: {type: jspsych.ParameterType.INT, default: 1},
   completed_main_trials: {type: jspsych.ParameterType.INT, default: 50},
   total_main_trials: {type: jspsych.ParameterType.INT, default: 150}
  }
 };

 class GeCityBreakPlugin {
  constructor(jsPsych) { this.jsPsych = jsPsych; }
  trial(display_element, trial) {
   const completed = trial.completed_main_trials;
   const total = trial.total_main_trials;
   const breakNumber = trial.break_number;
   const fraction = breakNumber === 1 ? "1/3" : "2/3";
   const start = performance.now();
   const startUTC = new Date().toISOString();

   const formatTime = ms => {
    const seconds = Math.floor(Math.max(0, ms) / 1000);
    return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" +
           String(seconds % 60).padStart(2, "0");
   };
   display_element.innerHTML =
    '<div class="gc-break" style="max-width:720px;margin:0 auto;text-align:center;font-family:Arial,sans-serif;line-height:1.65;">' +
    '<h2 style="font-size:30px">Time for a Break</h2>' +
    '<p style="font-size:24px;font-weight:bold">Completed ' + completed +
    ' of ' + total + ' main trials (' + fraction + ')</p>' +
    '<p>You have completed ' + (breakNumber === 1 ? "one-third" : "two-thirds") +
    ' of the main experiment.</p>' +
    '<p style="margin:25px 0 0">Break time elapsed</p>' +
    '<p id="gc-break-elapsed" role="timer" style="font-size:48px;font-weight:bold;font-variant-numeric:tabular-nums;margin:4px 0 24px">00:00</p>' +
    '<p>Take as much time as you need to rest. When you are ready, return your attention to the task.</p>' +
    '<p style="margin-top:24px">Press <b>Space</b> to continue.</p></div>';

   const clock = display_element.querySelector("#gc-break-elapsed");
   const interval = setInterval(() => {
    clock.textContent = formatTime(performance.now() - start);
   }, 250);

   let ended = false;
   const keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
    callback_function: () => {
     if (ended) return;
     ended = true;
     const elapsed = Math.round(performance.now() - start);
     clearInterval(interval);
     this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
     display_element.innerHTML = "";
     this.jsPsych.finishTrial({
      break_number: breakNumber,
      completed_main_trials: completed,
      total_main_trials: total,
      progress_fraction: fraction,
      break_duration_ms: elapsed,
      break_started_at_utc: startUTC,
      break_ended_at_utc: new Date().toISOString(),
      resumed_by: "space"
     });
    },
    valid_responses: [" "],
    rt_method: "performance",
    persist: false,
    allow_held_key: false
   });
  }
 }
 GeCityBreakPlugin.info = info;
 return GeCityBreakPlugin;
})(jsPsychModule);
