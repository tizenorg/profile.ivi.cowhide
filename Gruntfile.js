/*
 * Copyright (c) 2012, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: [
        'Gruntfile.js',

        'src/javascripts/*.js',
        'src/bootstrap/**/*.{js,less}',
        'src/stylesheets/**/*.less',
        'src/themes/**/*.less',

        'tests/**/*.js'
      ],
      tasks: 'default'
    },
    clean: {
      folder: 'dist'
    },
    jshint: {
      all: [
        'GruntFile.js',
        'src/javascripts/*.js',
        'test/**/*.js'
      ],
      options: {
        "validthis": true,
        "laxcomma" : true,
        "laxbreak" : true,
        "browser"  : true,
        "eqnull"   : true,
        "debug"    : true,
        "devel"    : true,
        "boss"     : true,
        "expr"     : true,
        "asi"      : true,
        "es5"      : true
      }
    },
    less: {
      default_: {
        files: {
          'dist/cowhide-default.css': 'src/themes/default/default.less',
          'dist/cowhide-responsive.css': 'src/bootstrap/less/responsive.less'
        }
      },
      default_night: {
        files: {
          'dist/cowhide-default-night.css': 'src/themes/default/default-night.less'
        }
      },
      amelia: {
        files: {
          'dist/cowhide-amelia.css': 'src/themes/amelia/amelia.less'
        }
      },
      amelia_night: {
        files: {
          // TODO: add theme implementation for amelia-night.
          'dist/cowhide-amelia-night.css': 'src/themes/amelia/amelia.less'
        }
      },
      spruce: {
        files: {
          'dist/cowhide-spruce.css': 'src/themes/spruce/spruce.less'
        }
      },
      spruce_night: {
        files: {
          // TODO: add theme implementation for spruce-night.
          'dist/cowhide-spruce-night.css': 'src/themes/spruce/spruce.less'
        }
      }
    },
    concat: {
      cowhide_js: {
        src: [
          'lib/jquery/dist/jquery.js',
          'lib/jquery-ui/dist/jquery-ui.js',
          'lib/underscore/underscore.js',

          // Bootstrap files must preserve order.
          'src/bootstrap/js/bootstrap-transition.js',
          'src/bootstrap/js/bootstrap-alert.js',
          'src/bootstrap/js/bootstrap-button.js',
          'src/bootstrap/js/bootstrap-carousel.js',
          'src/bootstrap/js/bootstrap-collapse.js',
          'src/bootstrap/js/bootstrap-dropdown.js',
          'src/bootstrap/js/bootstrap-modal.js',
          'src/bootstrap/js/bootstrap-tooltip.js',
          'src/bootstrap/js/bootstrap-popover.js',
          'src/bootstrap/js/bootstrap-scrollspy.js',
          'src/bootstrap/js/bootstrap-tab.js',
          'src/bootstrap/js/bootstrap-typeahead.js',
          'src/bootstrap/js/bootstrap-affix.js',

          'src/javascripts/api.js',

          'src/javascripts/cowhide-core.js',
          'src/javascripts/cowhide-widget.js',
          'src/javascripts/cowhide-button.js',
          'src/javascripts/cowhide-seat-selector.js',
          'src/javascripts/cowhide-slider.js',
          'src/javascripts/cowhide-text-input.js',
          'src/javascripts/cowhide-radio-input.js',
          'src/javascripts/cowhide-checkbox-input.js',
          'src/javascripts/cowhide-select.js',
          'src/javascripts/cowhide-page.js',
          'src/javascripts/cowhide-header.js',
          'src/javascripts/cowhide-simple-scrollable.js'
        ], dest: 'dist/cowhide.js'
      },
      css_default: {
        src: [
          'lib/jquery-ui/dist/jquery-ui.css',
          'dist/cowhide-default.css',
        ], dest: 'dist/cowhide-default.css'
      },
      css_default_night: {
        src: [
          'lib/jquery-ui/dist/jquery-ui.css',
          'dist/cowhide-default-night.css',
        ], dest: 'dist/cowhide-default-night.css'
      },
      css_amelia: {
        src: [
          'lib/jquery-ui/dist/jquery-ui.css',
          'dist/cowhide-amelia.css',
        ], dest: 'dist/cowhide-amelia.css'
      },
      css_amelia_night: {
        src: [
          'lib/jquery-ui/dist/jquery-ui.css',
          'dist/cowhide-amelia-night.css',
        ], dest: 'dist/cowhide-amelia-night.css'
      },
      css_spruce: {
        src: [
          'lib/jquery-ui/dist/jquery-ui.css',
          'dist/cowhide-spruce.css',
        ], dest: 'dist/cowhide-spruce.css'
      },
      css_spruce_night: {
        src: [
          'lib/jquery-ui/dist/jquery-ui.css',
          'dist/cowhide-spruce-night.css',
        ], dest: 'dist/cowhide-spruce-night.css'
      }
    },
    uglify: {
      cowhide: {
        src: ['dist/cowhide.js'],
        dest: 'dist/cowhide.min.js'
      }
    },
    cssmin: {
      default_: {
        src: ['dist/cowhide-default.css'],
        dest: 'dist/cowhide-default.min.css'
      },
      responsive: {
        src: ['dist/cowhide-responsive.css'],
        dest: 'dist/cowhide-responsive.min.css'
      },
      default_night: {
        src: ['dist/cowhide-default-night.css'],
        dest: 'dist/cowhide-default-night.min.css'
      },
      amelia: {
        src: ['dist/cowhide-amelia.css'],
        dest: 'dist/cowhide-amelia.min.css'
      },
      amelia_night: {
        src: ['dist/cowhide-amelia-night.css'],
        dest: 'dist/cowhide-amelia-night.min.css'
      },
      spruce: {
        src: ['dist/cowhide-spruce.css'],
        dest: 'dist/cowhide-spruce.min.css'
      },
      spruce_night: {
        src: ['dist/cowhide-spruce-night.css'],
        dest: 'dist/cowhide-spruce-night.min.css'
      }
    },
    copy: {
      dist: {
        files: [
          {dest: 'dist/', src: ['images/**'], cwd: 'lib/jquery-ui/dist/', expand: true},
          {dest: 'dist/', src: ['images/**']},
          {dest: 'dist/', src: ['README.md']},
          {dest: 'dist/', src: ['docs/**']}
        ]
      },
    },
    exec: {
      build_docs: {
        command: 'node dist/docs/build'
      }
    },
    compress: {
      dist: {
        options: {
          archive: 'dist/cowhide.zip'
        },
        files: [
          {dest: 'cowhide', src: ['**'], cwd: 'dist', expand: true}
        ]
      }
    }
  });

  // Default task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['clean', 'jshint', 'less', 'concat', 'uglify', 'cssmin', 'copy', 'exec:build_docs', 'compress']);
};
