# GeCity-run

This is a **deployment-only** copy of the German City Decision-Making experiment from the private research repository `Cognition-Decision-Modeling-Lab/GeCity-exp`, directory `s3_exp_program/exp_run/v1/`. It is intended for GitHub Pages and for embedding in Qualtrics as an iframe.

## Publish on GitHub Pages

Go to [Settings → Pages](https://github.com/bs-zhao/GeCity-run/settings/pages). Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/(root)**, and click **Save**. This is a one-time manual repository setting. Verify the actual published site URL in Pages settings. The expected URL after enabling Pages is:

https://bs-zhao.github.io/GeCity-run/

Use `?download=1` to generate and attempt to download a JSON file on experiment completion. The completed experiment also provides a manual download link. Browser download behavior in a cross-origin iframe must be tested before real participants.

## Embed in Qualtrics

Add a **Text / Graphic** question in its own survey block/page, open the question's Rich Content Editor **HTML/source** view and insert:

```html
<iframe id="experiment-frame"
  src="https://bs-zhao.github.io/GeCity-run/?download=1"
  title="German City Decision-Making"
  style="width:100%;height:85vh;min-height:650px;border:0;display:block"
  allow="fullscreen"
></iframe>
```

Place a **File Upload** question on the following Qualtrics page and instruct participants to upload their downloaded `gecity_*.json` file. **Neither uploading to GitHub nor embedding this iframe automatically saves trial data in Qualtrics.** The JSON download and upload must be verified in Qualtrics Preview. Advance to the upload page only after the experiment is finished and the file is downloaded; plain iframe HTML does not automatically block the Qualtrics Next button.

The source program's two independent condition constants are in `index.html`:
```js
const SHOW_DV_BEFORE_TRIAL = true;
const SHOW_CORRECT_FEEDBACK = false;
```
The D/V table always has fixed increasing discrimination and decreasing validity order; the decision-screen attribute order randomizes once per session and stays fixed. Complete participant-level choice, reaction-time and mouse-inspection records are exported.

For short pilots, visit `https://bs-zhao.github.io/GeCity-run/?debug=1&trials=3&practice=2&download=1`.

## Files and updates

The website `index.html` and its relative `plugin/`, `layout_config.js`, `trialset_loader.js`, and `data/experiment_data.js` all live at the repository root. To change trialsets, regenerate `experiment_data.js` with the source repository's `s1_make_trials/make_trials.py`, then overwrite **only** `data/experiment_data.js` here.

This repository is **public**. Do not commit participant JSON results, personal identifiers, non-public research materials, secrets, or consent data. It contains stimuli and experimental logic that will be publicly accessible.

The runtime currently loads jsPsych assets from the Naodao CDN and therefore requires that third-party CDN to be reachable. If that CDN does not load from Qualtrics participants' networks, replace it with a reliable public jsPsych 7 host or bundle tested local copies before recruitment.
