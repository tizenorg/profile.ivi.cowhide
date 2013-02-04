module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: [
        'grunt.js',

        'src/javascripts/*.js',
        'src/bootstrap/**/*.{js,less}',
        'src/themes/**/*.less',

        'examples/**/*.*',

        'tests/**/*.js'
      ],
      tasks: 'default'
    },
    clean: {
      folder: 'dist'
    },
    lint: {
      all: [
        'grunt.js',

        'src/bootstrap/js/*.js',
        'src/javascripts/*.js',

        'examples/calf/javascripts/*.js',
        'examples/calf/javascripts/app/*.js',
        'examples/calf/javascripts/app/**/*.js',

        'examples/calf-ng/javascripts/*.js',
        'examples/calf-ng/javascripts/app/*.js',
        'examples/calf-ng/javascripts/app/**/*.js',

        'examples/widget-gallery/javascripts/*.js',

        'examples/hoofbeats/javascripts/*.js',

        'test/**/*.js'
      ]
    },
    jshint: {
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
          'lib/jquery-1.8.3.js',
          'lib/jquery-ui-1.9.2.custom.js',
          'lib/jquery.ui.slider.js',
          'lib/jquery.mCustomScrollbar.js',
          'lib/underscore-min.js',

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
          'src/javascripts/cowhide-scrollable.js'
        ], dest: 'dist/cowhide.js'
      },
      cowhide_ng_js: {
        src: [
          'lib/angular.js',

          'src/javascripts/cowhide-ng-core.js',
          'src/javascripts/cowhide-ng-page.js',
          'src/javascripts/cowhide-ng-header.js',
          'src/javascripts/cowhide-ng-button.js',
          'src/javascripts/cowhide-ng-slider.js',
          'src/javascripts/cowhide-ng-scrollable.js'
        ], dest: 'dist/cowhide-ng.js'
      },
      css_default: {
        src: [
          'dist/cowhide-default.css',
          'lib/jquery.ui.slider.css',
          'lib/jquery.mCustomScrollbar.css'
        ], dest: 'dist/cowhide-default.css'
      },
      css_default_night: {
        src: [
          'dist/cowhide-default-night.css',
          'lib/jquery.ui.slider.css',
          'lib/jquery.mCustomScrollbar.css'
        ], dest: 'dist/cowhide-default-night.css'
      },
      css_amelia: {
        src: [
          'dist/cowhide-amelia.css',
          'lib/jquery.ui.slider.css',
          'lib/jquery.mCustomScrollbar.css'
        ], dest: 'dist/cowhide-amelia.css'
      },
      css_amelia_night: {
        src: [
          'dist/cowhide-amelia-night.css',
          'lib/jquery.ui.slider.css',
          'lib/jquery.mCustomScrollbar.css'
        ], dest: 'dist/cowhide-amelia-night.css'
      },
      css_spruce: {
        src: [
          'dist/cowhide-spruce.css',
          'lib/jquery.ui.slider.css',
          'lib/jquery.mCustomScrollbar.css'
        ], dest: 'dist/cowhide-spruce.css'
      },
      css_spruce_night: {
        src: [
          'dist/cowhide-spruce-night.css',
          'lib/jquery.ui.slider.css',
          'lib/jquery.mCustomScrollbar.css'
        ], dest: 'dist/cowhide-spruce-night.css'
      }
    },
    min: {
      cowhide: {
        src: ['dist/cowhide.js'],
        dest: 'dist/cowhide.min.js'
      },
      cowhide_ng: {
        src: ['fist/cowhide-ng.js'],
        dest: 'dist/cowhide-ng.min.js'
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
        files: {
          'dist/images/': 'images/**',
          'dist/README.md': 'README.md',
          'dist/examples/calf/': 'examples/calf/**',
          'dist/examples/calf-ng/': 'examples/calf-ng/**',
          'dist/examples/widget-gallery/': 'examples/widget-gallery/**',
          'dist/docs/': 'docs/**'
        }
      },
      examples_lib: {
        options: {
          flatten: true
        },
        files: {
          'dist/examples/calf/lib/': [
            'dist/cowhide-default.css',
            'dist/cowhide.js',
            'lib/handlebars-1.0.rc.1.js',
            'lib/ember-latest.js'
          ],
          'dist/examples/hoofbeats/lib/': [
            'dist/cowhide-default.css',
            'dist/cowhide.js'
          ]
        }
      }
    },
    exec: {
      build_docs: {
        command: 'node dist/docs/build'
      }
    },
    compress: {
      dist: {
        files: {
          'dist/cowhide.zip': 'dist/**'
        }
      }
    },
    growl : {
      started : {
        message : "Grunt compilation started.",
        title : "Cowhide"
      },
      finished : {
          message : "Grunt compilation finished.",
          title : "Cowhide"
      }
    }
  });

  // Default task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', 'growl:started clean lint less concat min cssmin copy exec:build_docs compress growl:finished');
};
