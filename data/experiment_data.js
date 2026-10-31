// Selected from original German city data with exact MILP constraints.
// This is the deployed trialset7 dataset.
window.GECITY_TRIALSET = {
  "schema_version": 1,
  "trialset_name": "trialset7",
  "source_file": "master_trials.csv",
  "trial_count": 150,
  "features": [
    {
      "id": "National_Capital",
      "label": "Capital",
      "positive": true,
      "target_discrimination": 0.05,
      "target_validity": 1,
      "actual_discrimination": 0.05333333333333334,
      "actual_validity": 1,
      "discriminating_trials": 8,
      "correct_when_discriminating": 8
    },
    {
      "id": "Exposition_Site",
      "label": "Expo Site",
      "positive": true,
      "target_discrimination": 0.29,
      "target_validity": 0.88,
      "actual_discrimination": 0.29333333333333333,
      "actual_validity": 0.8863636363636364,
      "discriminating_trials": 44,
      "correct_when_discriminating": 39
    },
    {
      "id": "Soccer_Team",
      "label": "Soccer Team",
      "positive": true,
      "target_discrimination": 0.41,
      "target_validity": 0.77,
      "actual_discrimination": 0.41333333333333333,
      "actual_validity": 0.7741935483870968,
      "discriminating_trials": 62,
      "correct_when_discriminating": 48
    },
    {
      "id": "Intercity_trainline",
      "label": "Rail Line",
      "positive": true,
      "target_discrimination": 0.52,
      "target_validity": 0.66,
      "actual_discrimination": 0.52,
      "actual_validity": 0.6538461538461539,
      "discriminating_trials": 78,
      "correct_when_discriminating": 51
    },
    {
      "id": "University",
      "label": "University",
      "positive": true,
      "target_discrimination": 0.62,
      "target_validity": 0.55,
      "actual_discrimination": 0.62,
      "actual_validity": 0.5483870967741935,
      "discriminating_trials": 93,
      "correct_when_discriminating": 51
    }
  ],
  "trials": [
    {
      "trial_id": 1,
      "pair_index": 2347,
      "left_city": "Leverkusen",
      "right_city": "Salzgitter",
      "left_population": 160919,
      "right_population": 114355,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 2,
      "pair_index": 1509,
      "left_city": "Freiburg",
      "right_city": "Karlsruhe",
      "left_population": 191029,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 3,
      "pair_index": 2742,
      "left_city": "Koblenz",
      "right_city": "Moers",
      "left_population": 108733,
      "right_population": 104595,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 4,
      "pair_index": 2140,
      "left_city": "Hamm",
      "right_city": "Leverkusen",
      "left_population": 179639,
      "right_population": 160919,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 5,
      "pair_index": 2694,
      "left_city": "Offenbach",
      "right_city": "Erlangen",
      "left_population": 114992,
      "right_population": 102440,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 3,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 6,
      "pair_index": 2739,
      "left_city": "Siegen",
      "right_city": "Erlangen",
      "left_population": 109174,
      "right_population": 102440,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 7,
      "pair_index": 2725,
      "left_city": "Witten",
      "right_city": "Ulm",
      "left_population": 105403,
      "right_population": 110529,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 8,
      "pair_index": 2300,
      "left_city": "Ludwigshafen",
      "right_city": "Leverkusen",
      "left_population": 162173,
      "right_population": 160919,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 9,
      "pair_index": 651,
      "left_city": "Paderborn",
      "right_city": "Duesseldorf",
      "left_population": 120680,
      "right_population": 575794,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 10,
      "pair_index": 2767,
      "left_city": "Fuerth",
      "right_city": "BergischGladbach",
      "left_population": 103362,
      "right_population": 104037,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 11,
      "pair_index": 2624,
      "left_city": "Goettingen",
      "right_city": "Witten",
      "left_population": 121831,
      "right_population": 105403,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 12,
      "pair_index": 1368,
      "left_city": "Saarbruecken",
      "right_city": "Gelsenkirchen",
      "left_population": 191694,
      "right_population": 293714,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 13,
      "pair_index": 936,
      "left_city": "Nuremberg",
      "right_city": "Gelsenkirchen",
      "left_population": 493692,
      "right_population": 293714,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 14,
      "pair_index": 2329,
      "left_city": "Potsdam",
      "right_city": "Leverkusen",
      "left_population": 139794,
      "right_population": 160919,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 15,
      "pair_index": 2620,
      "left_city": "Goettingen",
      "right_city": "Salzgitter",
      "left_population": 121831,
      "right_population": 114355,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 16,
      "pair_index": 1502,
      "left_city": "Aachen",
      "right_city": "Karlsruhe",
      "left_population": 241961,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 17,
      "pair_index": 2728,
      "left_city": "Ulm",
      "right_city": "Reutlingen",
      "left_population": 110529,
      "right_population": 103687,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 18,
      "pair_index": 2681,
      "left_city": "Salzgitter",
      "right_city": "Offenbach",
      "left_population": 114355,
      "right_population": 114992,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 19,
      "pair_index": 2673,
      "left_city": "Heilbronn",
      "right_city": "Siegen",
      "left_population": 115843,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 20,
      "pair_index": 2688,
      "left_city": "Offenbach",
      "right_city": "Witten",
      "left_population": 114992,
      "right_population": 105403,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 21,
      "pair_index": 2640,
      "left_city": "Regensburg",
      "right_city": "BergischGladbach",
      "left_population": 121691,
      "right_population": 104037,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 22,
      "pair_index": 4,
      "left_city": "Essen",
      "right_city": "Berlin",
      "left_population": 626973,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 23,
      "pair_index": 10,
      "left_city": "Berlin",
      "right_city": "Hannover",
      "left_population": 3433695,
      "right_population": 513010,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        1,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 24,
      "pair_index": 840,
      "left_city": "Paderborn",
      "right_city": "Hannover",
      "left_population": 120680,
      "right_population": 513010,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 25,
      "pair_index": 2625,
      "left_city": "Moers",
      "right_city": "Goettingen",
      "left_population": 104595,
      "right_population": 121831,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 26,
      "pair_index": 2691,
      "left_city": "Offenbach",
      "right_city": "BergischGladbach",
      "left_population": 114992,
      "right_population": 104037,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 27,
      "pair_index": 2747,
      "left_city": "Jena",
      "right_city": "Witten",
      "left_population": 105518,
      "right_population": 105403,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 28,
      "pair_index": 659,
      "left_city": "Siegen",
      "right_city": "Duesseldorf",
      "left_population": 109174,
      "right_population": 575794,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 29,
      "pair_index": 2769,
      "left_city": "Fuerth",
      "right_city": "Reutlingen",
      "left_population": 103362,
      "right_population": 103687,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 30,
      "pair_index": 47,
      "left_city": "Leverkusen",
      "right_city": "Berlin",
      "left_population": 160919,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 5,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 31,
      "pair_index": 2633,
      "left_city": "Zwickau",
      "right_city": "Regensburg",
      "left_population": 114636,
      "right_population": 121691,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 32,
      "pair_index": 2713,
      "left_city": "Ulm",
      "right_city": "Pforzhein",
      "left_population": 110529,
      "right_population": 112944,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 33,
      "pair_index": 1673,
      "left_city": "Siegen",
      "right_city": "Moenchengladbach",
      "left_population": 109174,
      "right_population": 259436,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 34,
      "pair_index": 1522,
      "left_city": "Karlsruhe",
      "right_city": "Heidelberg",
      "left_population": 275061,
      "right_population": 136796,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 35,
      "pair_index": 1508,
      "left_city": "Saarbruecken",
      "right_city": "Karlsruhe",
      "left_population": 191694,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 36,
      "pair_index": 1521,
      "left_city": "Karlsruhe",
      "right_city": "Darmstadt",
      "left_population": 275061,
      "right_population": 138920,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 37,
      "pair_index": 2342,
      "left_city": "Leverkusen",
      "right_city": "Paderborn",
      "left_population": 160919,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 38,
      "pair_index": 2711,
      "left_city": "Fuerth",
      "right_city": "Salzgitter",
      "left_population": 103362,
      "right_population": 114355,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 39,
      "pair_index": 2749,
      "left_city": "BergischGladbach",
      "right_city": "Jena",
      "left_population": 104037,
      "right_population": 105518,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 40,
      "pair_index": 2722,
      "left_city": "Erlangen",
      "right_city": "Pforzhein",
      "left_population": 102440,
      "right_population": 112944,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 41,
      "pair_index": 2753,
      "left_city": "Ingolstadt",
      "right_city": "Hildesheim",
      "left_population": 105489,
      "right_population": 105291,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 42,
      "pair_index": 1671,
      "left_city": "Pforzhein",
      "right_city": "Moenchengladbach",
      "left_population": 112944,
      "right_population": 259436,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 43,
      "pair_index": 2627,
      "left_city": "Goettingen",
      "right_city": "Reutlingen",
      "left_population": 121831,
      "right_population": 103687,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 44,
      "pair_index": 860,
      "left_city": "Leipzig",
      "right_city": "Dresden",
      "left_population": 511079,
      "right_population": 490571,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 45,
      "pair_index": 2697,
      "left_city": "Siegen",
      "right_city": "Zwickau",
      "left_population": 109174,
      "right_population": 114636,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 46,
      "pair_index": 2348,
      "left_city": "Leverkusen",
      "right_city": "Pforzhein",
      "left_population": 160919,
      "right_population": 112944,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 47,
      "pair_index": 2333,
      "left_city": "Leverkusen",
      "right_city": "Gera  ",
      "left_population": 160919,
      "right_population": 129037,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 48,
      "pair_index": 2726,
      "left_city": "Ulm",
      "right_city": "Moers",
      "left_population": 110529,
      "right_population": 104595,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 49,
      "pair_index": 2770,
      "left_city": "Reutlingen",
      "right_city": "Erlangen",
      "left_population": 103687,
      "right_population": 102440,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 50,
      "pair_index": 929,
      "left_city": "Dresden",
      "right_city": "Nuremberg",
      "left_population": 490571,
      "right_population": 493692,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 51,
      "pair_index": 1546,
      "left_city": "Hildesheim",
      "right_city": "Karlsruhe",
      "left_population": 105291,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 52,
      "pair_index": 2641,
      "left_city": "Regensburg",
      "right_city": "Reutlingen",
      "left_population": 121691,
      "right_population": 103687,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 53,
      "pair_index": 441,
      "left_city": "Essen",
      "right_city": "Siegen",
      "left_population": 626973,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 54,
      "pair_index": 2759,
      "left_city": "Witten",
      "right_city": "Fuerth",
      "left_population": 105403,
      "right_population": 103362,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 55,
      "pair_index": 2338,
      "left_city": "Leverkusen",
      "right_city": "Recklinghausen",
      "left_population": 160919,
      "right_population": 125060,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 56,
      "pair_index": 848,
      "left_city": "Siegen",
      "right_city": "Hannover",
      "left_population": 109174,
      "right_population": 513010,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 57,
      "pair_index": 1532,
      "left_city": "Karlsruhe",
      "right_city": "Regensburg",
      "left_population": 275061,
      "right_population": 121691,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 58,
      "pair_index": 1543,
      "left_city": "Jena",
      "right_city": "Karlsruhe",
      "left_population": 105518,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 59,
      "pair_index": 2358,
      "left_city": "Reutlingen",
      "right_city": "Leverkusen",
      "left_population": 103687,
      "right_population": 160919,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 60,
      "pair_index": 2750,
      "left_city": "Jena",
      "right_city": "Reutlingen",
      "left_population": 105518,
      "right_population": 103687,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 61,
      "pair_index": 1682,
      "left_city": "Moenchengladbach",
      "right_city": "Fuerth",
      "left_population": 259436,
      "right_population": 103362,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 62,
      "pair_index": 1542,
      "left_city": "Koblenz",
      "right_city": "Karlsruhe",
      "left_population": 108733,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 63,
      "pair_index": 2619,
      "left_city": "Zwickau",
      "right_city": "Goettingen",
      "left_population": 114636,
      "right_population": 121831,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 64,
      "pair_index": 2768,
      "left_city": "Erlangen",
      "right_city": "BergischGladbach",
      "left_population": 102440,
      "right_population": 104037,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 65,
      "pair_index": 2089,
      "left_city": "Saarbruecken",
      "right_city": "Bottrop",
      "left_population": 191694,
      "right_population": 118936,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 66,
      "pair_index": 2680,
      "left_city": "Zwickau",
      "right_city": "Offenbach",
      "left_population": 114636,
      "right_population": 114992,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 67,
      "pair_index": 2765,
      "left_city": "Fuerth",
      "right_city": "Moers",
      "left_population": 103362,
      "right_population": 104595,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 68,
      "pair_index": 2357,
      "left_city": "BergischGladbach",
      "right_city": "Leverkusen",
      "left_population": 104037,
      "right_population": 160919,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 69,
      "pair_index": 2692,
      "left_city": "Reutlingen",
      "right_city": "Offenbach",
      "left_population": 103687,
      "right_population": 114992,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 70,
      "pair_index": 11,
      "left_city": "Berlin",
      "right_city": "Leipzig",
      "left_population": 3433695,
      "right_population": 511079,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        1,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 71,
      "pair_index": 923,
      "left_city": "Hildesheim",
      "right_city": "Leipzig",
      "left_population": 105291,
      "right_population": 511079,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 72,
      "pair_index": 2706,
      "left_city": "Siegen",
      "right_city": "Salzgitter",
      "left_population": 109174,
      "right_population": 114355,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 73,
      "pair_index": 906,
      "left_city": "Recklinghausen",
      "right_city": "Leipzig",
      "left_population": 125060,
      "right_population": 511079,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 74,
      "pair_index": 2763,
      "left_city": "Hildesheim",
      "right_city": "Reutlingen",
      "left_population": 105291,
      "right_population": 103687,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 75,
      "pair_index": 1551,
      "left_city": "Karlsruhe",
      "right_city": "Erlangen",
      "left_population": 275061,
      "right_population": 102440,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 76,
      "pair_index": 2093,
      "left_city": "Salzgitter",
      "right_city": "Saarbruecken",
      "left_population": 114355,
      "right_population": 191694,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 77,
      "pair_index": 2663,
      "left_city": "Siegen",
      "right_city": "Bottrop",
      "left_population": 109174,
      "right_population": 118936,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 78,
      "pair_index": 2762,
      "left_city": "BergischGladbach",
      "right_city": "Hildesheim",
      "left_population": 104037,
      "right_population": 105291,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 79,
      "pair_index": 1219,
      "left_city": "Gelsenkirchen",
      "right_city": "Mannheim",
      "left_population": 293714,
      "right_population": 310411,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 80,
      "pair_index": 2332,
      "left_city": "Leverkusen",
      "right_city": "Bremerhaven",
      "left_population": 160919,
      "right_population": 130446,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 81,
      "pair_index": 2102,
      "left_city": "Moers",
      "right_city": "Saarbruecken",
      "left_population": 104595,
      "right_population": 191694,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 82,
      "pair_index": 66,
      "left_city": "Offenbach",
      "right_city": "Berlin",
      "left_population": 114992,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 3,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 83,
      "pair_index": 921,
      "left_city": "Ingolstadt",
      "right_city": "Leipzig",
      "left_population": 105489,
      "right_population": 511079,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 84,
      "pair_index": 927,
      "left_city": "Leipzig",
      "right_city": "Fuerth",
      "left_population": 511079,
      "right_population": 103362,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 85,
      "pair_index": 791,
      "left_city": "Hannover",
      "right_city": "Bochum",
      "left_population": 513010,
      "right_population": 396486,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 86,
      "pair_index": 1221,
      "left_city": "Mannheim",
      "right_city": "Karlsruhe",
      "left_population": 310411,
      "right_population": 275061,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 87,
      "pair_index": 2090,
      "left_city": "Heilbronn",
      "right_city": "Saarbruecken",
      "left_population": 115843,
      "right_population": 191694,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 88,
      "pair_index": 1665,
      "left_city": "Moenchengladbach",
      "right_city": "Paderborn",
      "left_population": 259436,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 89,
      "pair_index": 2354,
      "left_city": "Leverkusen",
      "right_city": "Witten",
      "left_population": 160919,
      "right_population": 105403,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 90,
      "pair_index": 2100,
      "left_city": "Saarbruecken",
      "right_city": "Witten",
      "left_population": 191694,
      "right_population": 105403,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 91,
      "pair_index": 2630,
      "left_city": "Bottrop",
      "right_city": "Regensburg",
      "left_population": 118936,
      "right_population": 121691,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 92,
      "pair_index": 2748,
      "left_city": "Jena",
      "right_city": "Moers",
      "left_population": 105518,
      "right_population": 104595,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 93,
      "pair_index": 939,
      "left_city": "Karlsruhe",
      "right_city": "Nuremberg",
      "left_population": 275061,
      "right_population": 493692,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 94,
      "pair_index": 2727,
      "left_city": "BergischGladbach",
      "right_city": "Ulm",
      "left_population": 104037,
      "right_population": 110529,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 95,
      "pair_index": 1540,
      "left_city": "Karlsruhe",
      "right_city": "Ulm",
      "left_population": 275061,
      "right_population": 110529,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 96,
      "pair_index": 2626,
      "left_city": "BergischGladbach",
      "right_city": "Goettingen",
      "left_population": 104037,
      "right_population": 121831,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 97,
      "pair_index": 2638,
      "left_city": "Witten",
      "right_city": "Regensburg",
      "left_population": 105403,
      "right_population": 121691,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 98,
      "pair_index": 916,
      "left_city": "Pforzhein",
      "right_city": "Leipzig",
      "left_population": 112944,
      "right_population": 511079,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 99,
      "pair_index": 2634,
      "left_city": "Salzgitter",
      "right_city": "Regensburg",
      "left_population": 114355,
      "right_population": 121691,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 100,
      "pair_index": 2248,
      "left_city": "Leverkusen",
      "right_city": "Solingen",
      "left_population": 160919,
      "right_population": 165401,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 101,
      "pair_index": 1526,
      "left_city": "Karlsruhe",
      "right_city": "Wuerzburg",
      "left_population": 275061,
      "right_population": 127777,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 102,
      "pair_index": 2336,
      "left_city": "Leverkusen",
      "right_city": "Schwerin",
      "left_population": 160919,
      "right_population": 127447,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 103,
      "pair_index": 910,
      "left_city": "Paderborn",
      "right_city": "Leipzig",
      "left_population": 120680,
      "right_population": 511079,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 104,
      "pair_index": 26,
      "left_city": "Berlin",
      "right_city": "Moenchengladbach",
      "left_population": 3433695,
      "right_population": 259436,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 5,
      "left_cues": [
        1,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 105,
      "pair_index": 2645,
      "left_city": "Paderborn",
      "right_city": "Offenbach",
      "left_population": 120680,
      "right_population": 114992,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 106,
      "pair_index": 928,
      "left_city": "Erlangen",
      "right_city": "Leipzig",
      "left_population": 102440,
      "right_population": 511079,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 107,
      "pair_index": 1413,
      "left_city": "Bonn",
      "right_city": "Karlsruhe",
      "left_population": 292234,
      "right_population": 275061,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 108,
      "pair_index": 2103,
      "left_city": "Saarbruecken",
      "right_city": "BergischGladbach",
      "left_population": 191694,
      "right_population": 104037,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 109,
      "pair_index": 2744,
      "left_city": "Koblenz",
      "right_city": "Reutlingen",
      "left_population": 108733,
      "right_population": 103687,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 110,
      "pair_index": 1507,
      "left_city": "Karlsruhe",
      "right_city": "Kassel",
      "left_population": 275061,
      "right_population": 194268,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 111,
      "pair_index": 2604,
      "left_city": "Remscheid",
      "right_city": "Paderborn",
      "left_population": 123155,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 112,
      "pair_index": 2007,
      "left_city": "Leverkusen",
      "right_city": "Erfurt",
      "left_population": 160919,
      "right_population": 208989,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 113,
      "pair_index": 1531,
      "left_city": "Karlsruhe",
      "right_city": "Goettingen",
      "left_population": 275061,
      "right_population": 121831,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 114,
      "pair_index": 1322,
      "left_city": "Saarbruecken",
      "right_city": "Chemnitz",
      "left_population": 191694,
      "right_population": 294244,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 115,
      "pair_index": 2639,
      "left_city": "Moers",
      "right_city": "Regensburg",
      "left_population": 104595,
      "right_population": 121691,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 116,
      "pair_index": 2356,
      "left_city": "Moers",
      "right_city": "Leverkusen",
      "left_population": 104595,
      "right_population": 160919,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 117,
      "pair_index": 930,
      "left_city": "Bochum",
      "right_city": "Nuremberg",
      "left_population": 396486,
      "right_population": 493692,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 118,
      "pair_index": 861,
      "left_city": "Leipzig",
      "right_city": "Bochum",
      "left_population": 511079,
      "right_population": 396486,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 119,
      "pair_index": 2608,
      "left_city": "Siegen",
      "right_city": "Remscheid",
      "left_population": 109174,
      "right_population": 123155,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 120,
      "pair_index": 918,
      "left_city": "Leipzig",
      "right_city": "Siegen",
      "left_population": 511079,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 121,
      "pair_index": 2359,
      "left_city": "Leverkusen",
      "right_city": "Fuerth",
      "left_population": 160919,
      "right_population": 103362,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 122,
      "pair_index": 2741,
      "left_city": "Witten",
      "right_city": "Koblenz",
      "left_population": 105403,
      "right_population": 108733,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 123,
      "pair_index": 2731,
      "left_city": "Siegen",
      "right_city": "Jena",
      "left_population": 109174,
      "right_population": 105518,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 124,
      "pair_index": 1676,
      "left_city": "Ingolstadt",
      "right_city": "Moenchengladbach",
      "left_population": 105489,
      "right_population": 259436,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 125,
      "pair_index": 80,
      "left_city": "Berlin",
      "right_city": "Fuerth",
      "left_population": 3433695,
      "right_population": 103362,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 3,
      "left_cues": [
        1,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 126,
      "pair_index": 2757,
      "left_city": "Ingolstadt",
      "right_city": "Erlangen",
      "left_population": 105489,
      "right_population": 102440,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 127,
      "pair_index": 2715,
      "left_city": "Pforzhein",
      "right_city": "Koblenz",
      "left_population": 112944,
      "right_population": 108733,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 128,
      "pair_index": 2346,
      "left_city": "Zwickau",
      "right_city": "Leverkusen",
      "left_population": 114636,
      "right_population": 160919,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 129,
      "pair_index": 2716,
      "left_city": "Pforzhein",
      "right_city": "Jena",
      "left_population": 112944,
      "right_population": 105518,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 130,
      "pair_index": 2344,
      "left_city": "Leverkusen",
      "right_city": "Heilbronn",
      "left_population": 160919,
      "right_population": 115843,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 131,
      "pair_index": 2690,
      "left_city": "Moers",
      "right_city": "Offenbach",
      "left_population": 104595,
      "right_population": 114992,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 132,
      "pair_index": 2684,
      "left_city": "Offenbach",
      "right_city": "Siegen",
      "left_population": 114992,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 133,
      "pair_index": 1661,
      "left_city": "Moenchengladbach",
      "right_city": "Recklinghausen",
      "left_population": 259436,
      "right_population": 125060,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 134,
      "pair_index": 2353,
      "left_city": "Ingolstadt",
      "right_city": "Leverkusen",
      "left_population": 105489,
      "right_population": 160919,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 135,
      "pair_index": 1659,
      "left_city": "Moenchengladbach",
      "right_city": "Schwerin",
      "left_population": 259436,
      "right_population": 127447,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 136,
      "pair_index": 2631,
      "left_city": "Regensburg",
      "right_city": "Heilbronn",
      "left_population": 121691,
      "right_population": 115843,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 137,
      "pair_index": 1511,
      "left_city": "Mainz",
      "right_city": "Karlsruhe",
      "left_population": 179486,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 138,
      "pair_index": 2771,
      "left_city": "Fuerth",
      "right_city": "Erlangen",
      "left_population": 103362,
      "right_population": 102440,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 139,
      "pair_index": 2730,
      "left_city": "Koblenz",
      "right_city": "Siegen",
      "left_population": 108733,
      "right_population": 109174,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 140,
      "pair_index": 2761,
      "left_city": "Hildesheim",
      "right_city": "Moers",
      "left_population": 105291,
      "right_population": 104595,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 141,
      "pair_index": 1515,
      "left_city": "Karlsruhe",
      "right_city": "Osnabrueck",
      "left_population": 275061,
      "right_population": 163168,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 142,
      "pair_index": 2734,
      "left_city": "Hildesheim",
      "right_city": "Siegen",
      "left_population": 105291,
      "right_population": 109174,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 143,
      "pair_index": 2104,
      "left_city": "Reutlingen",
      "right_city": "Saarbruecken",
      "left_population": 103687,
      "right_population": 191694,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 144,
      "pair_index": 2718,
      "left_city": "Pforzhein",
      "right_city": "Hildesheim",
      "left_population": 112944,
      "right_population": 105291,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 145,
      "pair_index": 2743,
      "left_city": "BergischGladbach",
      "right_city": "Koblenz",
      "left_population": 104037,
      "right_population": 108733,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 146,
      "pair_index": 2092,
      "left_city": "Saarbruecken",
      "right_city": "Zwickau",
      "left_population": 191694,
      "right_population": 114636,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 147,
      "pair_index": 7,
      "left_city": "Duesseldorf",
      "right_city": "Berlin",
      "left_population": 575794,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 148,
      "pair_index": 2350,
      "left_city": "Leverkusen",
      "right_city": "Siegen",
      "left_population": 160919,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 149,
      "pair_index": 1519,
      "left_city": "Oldenburg",
      "right_city": "Karlsruhe",
      "left_population": 143131,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 150,
      "pair_index": 1834,
      "left_city": "Saarbruecken",
      "right_city": "Krefeld",
      "left_population": 191694,
      "right_population": 244020,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    }
  ]
};
