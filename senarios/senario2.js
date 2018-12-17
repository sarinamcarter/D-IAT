
    var sen2_block1_instructions = {
      type: 'html-keyboard-response',
      stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>Press E for:<br><strong>Life</strong></p></div>" +
      "<div style='position: absolute; top: 18%; right: 20%'><p>Press I for:<br><strong>Death</strong></p></div><br>" +
      "<div style='position: relative; top: 45%; margin-left: auto; margin-right: auto'>Put a left finger on the <strong>E</strong> key " +
      "for items that belong to the <strong>Life</strong> category. Put a right finger on the " +
      "<strong>I</strong> key for items that belong to the <strong>Death</strong> " +
      "category. Items will appear one at a time.<br><br>" + "If you " +
      "make a mistake, a red X will appear. Press the keys listed below " +
      "to continue. Go as fast as you can while being accurate.<br><br> " +
      "Press the any key when you are ready to start.</div>",
      };
    var sen2_block1 = {
      timeline: [
        {
        type: 'iat-html',
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
        bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['Life'],
        right_category_label: ['Death'],
        response_ends_trial: true,
        data: { iat_type: 'life-death' }
        }
      ],
      timeline_variables: [
        {stimulus: "Die", stim_key_association: "right"},
        {stimulus: "Dead", stim_key_association: "right"},
        {stimulus: "Deceased", stim_key_association: "right"},
        {stimulus: "Lifeless", stim_key_association: "right"},
        {stimulus: "Suicide", stim_key_association: "right"},
        {stimulus: "Alive", stim_key_association: "left"},
        {stimulus: "Survive", stim_key_association: "left"},
        {stimulus: "Live", stim_key_association: "left"},
        {stimulus: "Thrive", stim_key_association: "left"},
        {stimulus: "Breathing", stim_key_association: "left"},
      ],
      randomize_order: true,
      repetitions: 2
      };
      
    var sen2_block2_instructions = {
      type: 'html-keyboard-response',
      stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>Press E for:<br><strong>Not Me</strong></p></div>" +
      "<div style='position: absolute; top: 18%; right: 20%'><p>Press I for:<br><strong>Me</strong></p></div><br>" +
      "<div style='position: relative; top: 45%; margin-left: auto; margin-right: auto'>Put a left finger on the <strong>E</strong> " + 
      "key for items that belong to the <strong>Not Me</strong> category. Put a right finger on the " +
      "<strong>I</strong> key for items that belong to the <strong>Me</strong> " +
      "category. Items will appear one at a time.<br><br>" + "If you " +
      "make a mistake, a red X will appear. Press the keys listed below " +
      "to continue. Go as fast as you can while being accurate.<br><br> " +
      "Press the any key when you are ready to start.</div>",
      };
    var sen2_block2 = {
      timeline: [
        {
        type: 'iat-html',
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
        bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['Not Me'],
        right_category_label: ['Me'],
        response_ends_trial: true,
        data: { iat_type: 'notme-me' }
        }
      ],
      timeline_variables: [
        {stimulus: "They", stim_key_association: "left"},
        {stimulus: "Them", stim_key_association: "left"},
        {stimulus: "Their", stim_key_association: "left"},
        {stimulus: "Theirs", stim_key_association: "left"},
        {stimulus: "Other", stim_key_association: "left"},
        {stimulus: "I", stim_key_association: "right"},
        {stimulus: "Myself", stim_key_association: "right"},
        {stimulus: "My", stim_key_association: "right"},
        {stimulus: "Mine", stim_key_association: "right"},
        {stimulus: "Self", stim_key_association: "right"},
        ],
      randomize_order: true,
      repetitions: 2
      };

    var sen2_block3_instructions = {
      type: 'html-keyboard-response',
      stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>" +
      "Press E for:<br><strong>Life</strong><br> or <br><strong>Not Me</strong></p></div>" +
      "<div style='position: absolute; top: 18%; right: 20%'><p>Press I for:<br><strong>Death</strong><br> or <br><strong>Me</strong></p></div><br><br>" +
      "<div style='position: relative; top: 45%; margin-left: auto; margin-right: auto'>The four categories that you saw separately now appear together. " +
      "Press <strong>E</strong> key for items that belong to the <strong>Life</strong> or <strong>Not Me</strong> categories. Press the " +
      "<strong>I</strong> key for items that belong to the <strong>Death</strong> or <strong>Me</strong> " +
      "categories. Items will appear one at a time.<br><br> If you make a mistake, a red X will appear. Press the keys listed below " +
      "to continue. Go as fast as you can while being accurate.<br><br> " +
      "Press the any key when you are ready to start.</div>",
      };
    var sen2_block3 = {
      timeline: [
        {
        type: 'iat-html',
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
        bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['Life', 'Not Me'],
        right_category_label: ['Death', 'Me'],
        response_ends_trial: true,
        data: { iat_type: 'life/notme-death/me' }
        }
      ],
      timeline_variables: [
        {stimulus: "Die", stim_key_association: "right"},
        {stimulus: "Dead", stim_key_association: "right"},
        {stimulus: "Deceased", stim_key_association: "right"},
        {stimulus: "Lifeless", stim_key_association: "right"},
        {stimulus: "Suicide", stim_key_association: "right"},
        {stimulus: "Alive", stim_key_association: "left"},
        {stimulus: "Survive", stim_key_association: "left"},
        {stimulus: "Live", stim_key_association: "left"},
        {stimulus: "Thrive", stim_key_association: "left"},
        {stimulus: "Breathing", stim_key_association: "left"},
        {stimulus: "They", stim_key_association: "left"},
        {stimulus: "Them", stim_key_association: "left"},
        {stimulus: "Their", stim_key_association: "left"},
        {stimulus: "Theirs", stim_key_association: "left"},
        {stimulus: "Other", stim_key_association: "left"},
        {stimulus: "I", stim_key_association: "right"},
        {stimulus: "Myself", stim_key_association: "right"},
        {stimulus: "My", stim_key_association: "right"},
        {stimulus: "Mine", stim_key_association: "right"},
        {stimulus: "Self", stim_key_association: "right"},
        ],
      randomize_order: true,
      repetitions: 1
      };
  
    var sen2_block4_instructions = {
      type: 'html-keyboard-response',
      stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>" +
      "Press E for:<br><strong>Life</strong><br> or <br><strong>Not Me</strong></p></div>" +
      "<div style='position: absolute; top: 18%; right: 20%'><p>Press I for:<br><strong>Death</strong><br> or <br><strong>Me</strong></p></div><br><br>" +
      "<div style='position: relative; top: 45%; margin-left: auto; margin-right: auto'>Sort the same four categories again. " +
      "Press <strong>E</strong> key for items that belong to the <strong>Life</strong> or <strong>Not Me</strong> categories. Press the " +
      "<strong>I</strong> key for items that belong to the <strong>Death</strong> or <strong>Me</strong> " +
      "categories. Items will appear one at a time.<br><br>" + "If you " +
      "make a mistake, a red X will appear. Press the keys listed below " +
      "to continue. Go as fast as you can while being accurate.<br><br> " +
      "Press the any key when you are ready to start.</div>",
      };
    var sen2_block4 = {
      timeline: [
        {
        type: 'iat-html',
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
        bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['Life', 'Not Me'],
        right_category_label: ['Death', 'Me'],
        response_ends_trial: true,
        data: { iat_type: 'life/notme-death/me' }
        }
      ],
      timeline_variables: [
        {stimulus: "Die", stim_key_association: "right"},
        {stimulus: "Dead", stim_key_association: "right"},
        {stimulus: "Deceased", stim_key_association: "right"},
        {stimulus: "Lifeless", stim_key_association: "right"},
        {stimulus: "Suicide", stim_key_association: "right"},
        {stimulus: "Alive", stim_key_association: "left"},
        {stimulus: "Survive", stim_key_association: "left"},
        {stimulus: "Live", stim_key_association: "left"},
        {stimulus: "Thrive", stim_key_association: "left"},
        {stimulus: "Breathing", stim_key_association: "left"},
        {stimulus: "They", stim_key_association: "left"},
        {stimulus: "Them", stim_key_association: "left"},
        {stimulus: "Their", stim_key_association: "left"},
        {stimulus: "Theirs", stim_key_association: "left"},
        {stimulus: "Other", stim_key_association: "left"},
        {stimulus: "I", stim_key_association: "right"},
        {stimulus: "Myself", stim_key_association: "right"},
        {stimulus: "My", stim_key_association: "right"},
        {stimulus: "Mine", stim_key_association: "right"},
        {stimulus: "Self", stim_key_association: "right"},
        ],
      randomize_order: true,
      repetitions: 2
      };  

    var sen2_block5_instructions = {
      type: 'html-keyboard-response',
      stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>Press E for:<br><strong>Death</strong></p></div>" +
      "<div style='position: absolute; top: 18%; right: 20%'><p>Press I for:<br><strong>Life</strong></p></div><br><br>" +
      "<div style='position: relative; top: 45%; margin-left: auto; margin-right: auto'>" +
      "There are now only two categories, and their positions have swithced. " +
      "Put a left finger on the <strong>E</strong> key for items that belong to the <strong>Life</strong> category. Put a right finger on the " +
      "<strong>I</strong> key for items that belong to the <strong>Death</strong> " +
      "category. Items will appear one at a time.<br><br>" + "If you " +
      "make a mistake, a red X will appear. Press the keys listed below " +
      "to continue. Go as fast as you can while being accurate.<br><br> " +
      "Press the any key when you are ready to start.</div>",
      };
    var sen2_block5 = {
      timeline: [
        {
        type: 'iat-html',
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
        bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['Death'],
        right_category_label: ['Life'],
        response_ends_trial: true,
        data: { iat_type: 'death-life' }
        }
      ],
      timeline_variables: [
        {stimulus: "Die", stim_key_association: "left"},
        {stimulus: "Dead", stim_key_association: "left"},
        {stimulus: "Deceased", stim_key_association: "left"},
        {stimulus: "Lifeless", stim_key_association: "left"},
        {stimulus: "Suicide", stim_key_association: "left"},
        {stimulus: "Alive", stim_key_association: "right"},
        {stimulus: "Survive", stim_key_association: "right"},
        {stimulus: "Live", stim_key_association: "right"},
        {stimulus: "Thrive", stim_key_association: "right"},
        {stimulus: "Breathing", stim_key_association: "right"},
      ],
      randomize_order: true,
      repetitions: 2
      };
   
    var sen2_block6_instructions = {
      type: 'html-keyboard-response',
      stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>" +
      "Press E for:<br><strong>Death</strong><br> or <br><strong>Not Me</strong></p></div>" +
      "<div style='position: absolute; top: 18%; right: 20%'><p>Press I for:<br><strong>Life</strong><br> or <br><strong>Me</strong></p></div><br><br>" +
      "<div style='position: relative; top: 45%; margin-left: auto; margin-right: auto'>The four categories now appear together in a new configuration. " +
      "Press <strong>E</strong> key for items that belong to the <strong>Death</strong> or <strong>Not Me</strong> categories. Press the " +
      "<strong>I</strong> key for items that belong to the <strong>Life</strong> or <strong>Me</strong> " +
      "categories. Items will appear one at a time.<br><br>" + "If you " +
      "make a mistake, a red X will appear. Press the keys listed below " +
      "to continue. Go as fast as you can while being accurate.<br><br> " +
      "Press the any key when you are ready to start.</div>",
      };
    var sen2_block6 = {
      timeline: [
        {
        type: 'iat-html',
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
        bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['Death', 'Not Me'],
        right_category_label: ['Life', 'Me'],
        response_ends_trial: true,
        data: { iat_type: 'death/notme-life/me' }
        }
      ],
      timeline_variables: [
        {stimulus: "Die", stim_key_association: "left"},
        {stimulus: "Dead", stim_key_association: "left"},
        {stimulus: "Deceased", stim_key_association: "left"},
        {stimulus: "Lifeless", stim_key_association: "left"},
        {stimulus: "Suicide", stim_key_association: "left"},
        {stimulus: "Alive", stim_key_association: "right"},
        {stimulus: "Survive", stim_key_association: "right"},
        {stimulus: "Live", stim_key_association: "right"},
        {stimulus: "Thrive", stim_key_association: "right"},
        {stimulus: "Breathing", stim_key_association: "right"},
        {stimulus: "They", stim_key_association: "left"},
        {stimulus: "Them", stim_key_association: "left"},
        {stimulus: "Their", stim_key_association: "left"},
        {stimulus: "Theirs", stim_key_association: "left"},
        {stimulus: "Other", stim_key_association: "left"},
        {stimulus: "I", stim_key_association: "right"},
        {stimulus: "Myself", stim_key_association: "right"},
        {stimulus: "My", stim_key_association: "right"},
        {stimulus: "Mine", stim_key_association: "right"},
        {stimulus: "Self", stim_key_association: "right"},
        ],
      randomize_order: true,
      repetitions: 1
      };

    var sen2_block7_instructions = {
      type: 'html-keyboard-response',
      stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>" +
      "Press E for:<br><strong>Death</strong><br> or <br><strong>Not Me</strong></p></div>" +
      "<div style='position: absolute; top: 18%; right: 20%'><p>Press I for:<br><strong>Life</strong><br> or <br><strong>Me</strong></p></div><br><br>" +
      "<div style='position: relative; top: 45%; margin-left: auto; margin-right: auto'>Sort the same four categories again. " +
      "Press <strong>E</strong> key for items that belong to the <strong>Death</strong> or <strong>Not Me</strong> categories. Press the " +
      "<strong>I</strong> key for items that belong to the <strong>Life</strong> or <strong>Me</strong> " +
      "categories. Items will appear one at a time.<br><br>" + "If you " +
      "make a mistake, a red X will appear. Press the keys listed below " +
      "to continue. Go as fast as you can while being accurate.<br><br> " +
      "Press the any key when you are ready to start.</div>",
      };
    var sen2_block7 = {
      timeline: [
        {
        type: 'iat-html',
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
        bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['Life', 'Not Me'],
        right_category_label: ['Death', 'Me'],
        response_ends_trial: true,
        data: { iat_type: 'life/notme-death/me' }
        }
      ],
      timeline_variables: [
        {stimulus: "Die", stim_key_association: "left"},
        {stimulus: "Dead", stim_key_association: "left"},
        {stimulus: "Deceased", stim_key_association: "left"},
        {stimulus: "Lifeless", stim_key_association: "left"},
        {stimulus: "Suicide", stim_key_association: "left"},
        {stimulus: "Alive", stim_key_association: "right"},
        {stimulus: "Survive", stim_key_association: "right"},
        {stimulus: "Live", stim_key_association: "right"},
        {stimulus: "Thrive", stim_key_association: "right"},
        {stimulus: "Breathing", stim_key_association: "right"},
        {stimulus: "They", stim_key_association: "left"},
        {stimulus: "Them", stim_key_association: "left"},
        {stimulus: "Their", stim_key_association: "left"},
        {stimulus: "Theirs", stim_key_association: "left"},
        {stimulus: "Other", stim_key_association: "right"},
        {stimulus: "I", stim_key_association: "left"},
        {stimulus: "Myself", stim_key_association: "left"},
        {stimulus: "My", stim_key_association: "left"},
        {stimulus: "Mine", stim_key_association: "left"},
        {stimulus: "Self", stim_key_association: "left"},
        ],
      randomize_order: true,
      repetitions: 2
      };
    

  