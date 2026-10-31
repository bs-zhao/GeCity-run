# GeCity-run

This is a **deployment-only** copy of the German City Decision-Making experiment from the private research repository `Cognition-Decision-Modeling-Lab/GeCity-exp`, directory `s3_exp_program/exp_run/v1/`. It is intended for GitHub Pages and for embedding in Qualtrics as an iframe.

## Publish on GitHub Pages

Go to [Settings → Pages](https://github.com/bs-zhao/GeCity-run/settings/pages). Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/(root)**, and click **Save**. This is a one-time manual repository setting. Verify the actual published site URL in Pages settings. The expected URL after enabling Pages is:

https://bs-zhao.github.io/GeCity-run/

Use `?download=1` to generate and attempt to download a JSON file on experiment completion. The completed experiment also provides a manual download link. Browser download behavior in a cross-origin iframe must be tested before real participants.

## Embed in Qualtrics

The task title, practice/main trial counts, hover-and-key instructions, and condition-specific note now appear inside the experiment's Welcome screen. **Do not duplicate the “City Population Decision Task” instruction paragraphs on the Qualtrics page.** The Qualtrics Text / Graphic question should contain only the corresponding iframe, and the common File Upload question should remain below it on the same page.


Add a **Text / Graphic** question in its own survey block/page, open the question's Rich Content Editor **HTML/source** view and insert:

```html
<iframe id="experiment-frame"
  src="https://bs-zhao.github.io/GeCity-run/?download=1&amp;feedback=0&amp;table=1&amp;short=0"
  title="German City Decision-Making"
  style="width:100%;height:85vh;min-height:650px;border:0;display:block"
  allow="fullscreen"
  allowfullscreen
></iframe>
```

Place a **File Upload** question directly below the iframe on the **same Qualtrics page** and instruct participants to upload the automatically downloaded `gecity_*.json` file. **Neither uploading to GitHub nor embedding this iframe automatically saves trial data in Qualtrics.** The JSON download and upload must be verified in Qualtrics Preview. Advance to the upload page only after the experiment is finished and the file is downloaded; plain iframe HTML does not automatically block the Qualtrics Next button.

Set the three experiment conditions **directly in the iframe URL** (no JavaScript editing needed):

| URL parameter | `0` | `1` | Default |
| --- | --- | --- | --- |
| `feedback` | Show brief choice acknowledgment, no correctness | Show the correct city and revealed cue values | `0` |
| `table` | Hide the D/V table | Show the fixed D/V table before each trial | `1` |
| `short` | Full experiment: 3 practice and 150 main trials | Short test: **0 practice and 1 main trial** | `0` |
| `download` | No automatic JSON download | Attempt automatic JSON download on completion | Not set |

Example: one-trial pilot, with feedback and without the D/V table:

```html
<iframe
  src="https://bs-zhao.github.io/GeCity-run/?download=1&amp;feedback=1&amp;table=0&amp;short=1"
  title="German City Decision-Making"
  style="width:100%;height:800px;border:0;"
  allowfullscreen>
</iframe>
```

Use `&amp;` between URL query parameters in literal HTML, as shown. Short mode keeps the introductory and ending screens but skips the practice block and restricts the main decision set to one trial. The JSON metadata records the settings (`condition`, `feedback_mode`, `show_dv_before_trial`, `short_test`, `main_trial_count`, `practice_trial_count`). The D/V table retains fixed increasing discrimination and decreasing validity order; the decision-screen attribute order randomizes once per session and stays fixed. Choice, reaction-time and mouse-inspection records are exported.

The legacy `debug=1&trials=3&practice=2&download=1` pilot options remain available; `short=1` takes precedence over their trial/practice counts.

## Current deployed trial set (trialset8)

The website uses **trialset8**, a search-optimized set of **150 unique pairs of German cities**. Targets in feature order (Capital, Expo Site, Soccer Team, Rail Line, University): discrimination **5%, 29%, 41%, 52%, 62%** and validity **100%, 88%, 77%, 66%, 55%**. Realized rates are D **5.33%, 29.33%, 41.33%, 52.00%, 62.00%** and V **100.00%, 88.64%, 77.42%, 65.38%, 54.84%**.

The original hard requirements are unchanged: **48/150 (32.00%) opposing-cue trials** (>15%), **44/150 (29.33%) single-difference trials** (<30%), and all pairwise discrimination correlations in **[-0.10, 0.50]** (actual range **[-0.09895, 0.04258]**). Search-focused optimization also achieves **83 distinct cities**, **33 distinct unordered five-cue-profile pairs**, at most **10 occurrences per city** and **12 per cue-profile pair**; it fixes the previous extreme conditional validity of Rail Line and University on single-cue trials.

The exact 150 selected unordered pairs are frozen in the private source repository's `s1_make_trials/trialsets/trialset8/selected_pair_indices.json`. Run `python s1_make_trials/make_trials.py` there to regenerate; `optimize_trialset8.py` creates candidate selections without overwriting the deployed manifest.

The D/V table displayed *inside the experiment* is generated directly from these file statistics. **Any D/V percentages entered as static text in Qualtrics must be updated separately before data collection.**

## Files and updates

The website `index.html` and its relative `plugin/`, `layout_config.js`, `trialset_loader.js`, and `data/experiment_data.js` all live at the repository root. To change trialsets, regenerate `experiment_data.js` with the source repository's `s1_make_trials/make_trials.py`, then overwrite **only** `data/experiment_data.js` here.

This repository is **public**. Do not commit participant JSON results, personal identifiers, non-public research materials, secrets, or consent data. It contains stimuli and experimental logic that will be publicly accessible.

The runtime currently loads jsPsych assets from the Naodao CDN and therefore requires that third-party CDN to be reachable. If that CDN does not load from Qualtrics participants' networks, replace it with a reliable public jsPsych 7 host or bundle tested local copies before recruitment.

## Behavioral data schema (record_schema_version 2)

Every choice trial saves its response and mouse-hover search behavior in the exported JSON `records` array. The `metadata` object includes the random seed and `position_feature_map` for that session.

**Important IDs are intentionally distinct:**

| Field | Meaning |
| --- | --- |
| `feature_id` | Stable identity of the characteristic (e.g., capital or rail); **not** its display row |
| `position_id` | Vertical display position, **1 = top** through **5 = bottom**; randomized once per participant, fixed throughout their practice and main trials |
| `cell_id` | Specific city/row cell: City A positions 1–5 map to cell IDs 1–5; City B positions 1–5 map to 6–10 |
| `city` | City A or City B (left/right) |

Per choice trial:

- `position_feature_map`: exact top-to-bottom feature order, row-center `row_y_px`, and left/right `cell_id` values; `feature_ids` and `feature_labels` are also in top-to-bottom display order.
- `stimulus_cells`: all ten city-feature cells and their actual Yes/No values, including cells the participant never viewed.
- `mouse_reveals`: every hover in chronological order, with `order`, `city`, `position_id`, `cell_id`, `feature_id`, `value`, `start_ms`, `end_ms`, `duration_ms`, and `end_reason` (`mouse_leave`, `switch`, or `response`). Times are milliseconds from that choice screen's onset.
- `event_timeline`: chronological mouse-enter, mouse-exit, and key-response events with relative timestamps.
- `view_summary`: counts and cumulative dwell time separately for each of the ten cells. The legacy `view_counts`, `dwell_times`, `arr_fix`, and `arr_time` fields are retained for backwards compatibility.
- `response`, `choice_city`, `correct`, `rt`, `decision_rt_ms`: response key, chosen city, correctness, jsPsych reaction time, and choice-screen response timestamp.
- `task_trial_index` and `task_phase`: stable index within the practice/main phase; the jsPsych-wide `trial_index` can refer to the overall timeline instead.

The Table group's D/V statistics page is always ordered by increasing discrimination and **is not** the randomized visual order of the five decision-screen rows. Do not decode mouse data by the fixed table order.

## Fullscreen behavior

After the Welcome screen, a dedicated instruction page asks participants to press **Space** to enter fullscreen mode. The experiment only proceeds after the browser grants fullscreen access. When the final Space response completes the experiment, the JSON download is initiated and fullscreen exits automatically. Participants can still exit fullscreen using browser controls; the experiment asks them not to do so before completion.

**Qualtrics requirement:** The embedded experiment iframe must explicitly permit fullscreen, e.g., `allow="fullscreen" allowfullscreen`. Without this permission, browsers can block the fullscreen request. Qualtrics Preview should be used to verify fullscreen entry, final exit, and JSON download before collecting data.
