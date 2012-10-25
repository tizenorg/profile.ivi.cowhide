module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: [
        'grunt.js',

        'src/bootstrap/**/*.{js,less}',
        'src/javascripts/*.js',
        'src/less/*.less',
        'src/themes/*.less',
        'src/cowhide-less/*.less',

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

        'examples/widget-gallery/javascripts/*.js',

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
        "asi"      : true
      }
    },
    less: {
      default_theme: {
        files: {
          'dist/cowhide-default.css': 'src/less/cowhide-default.less',
          'dist/cowhide-responsive.css': 'src/bootstrap/less/responsive.less'
        }
      },
      default_night_theme: {
        files: {
          'dist/cowhide-default-night.css': 'src/less/cowhide-default-night.less'
        }
      }
    },
    concat: {
      js: {
        src: [
          'lib/jquery-1.8.2.js',
          'lib/jquery.ui.core.js',
          'lib/jquery.ui.widget.js',
          'lib/jquery.ui.mouse.js',
          'lib/jquery.ui.slider.js',
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

          'src/javascripts/cowhide-core.js',
          'src/javascripts/cowhide-widget.js',
          'src/javascripts/cowhide-button.js',
          'src/javascripts/cowhide-seat-selector.js',
          'src/javascripts/cowhide-slider.js',
          'src/javascripts/cowhide-text-input.js',
          'src/javascripts/cowhide-radio-input.js',
          'src/javascripts/cowhide-page.js'
        ], dest: 'dist/cowhide.js'
      },
      css_default: {
        src: [
          'dist/cowhide-default.css',
          'lib/jquery.ui.slider.css'
        ], dest: 'dist/cowhide-default.css'
      },
      css_default_night: {
        src: [
          'dist/cowhide-default-night.css',
          'lib/jquery.ui.slider.css'
        ], dest: 'dist/cowhide-default-night.css'
      }
    },
    min: {
      all: {
        src: ['dist/cowhide.js'],
        dest: 'dist/cowhide.min.js'
      }
    },
    cssmin: {
      default_theme: {
        src: ['dist/cowhide-default.css'],
        dest: 'dist/cowhide-default.min.css'
      },
      responsive: {
        src: ['dist/cowhide-responsive.css'],
        dest: 'dist/cowhide-responsive.min.css'
      },
      default_night_theme: {
        src: ['dist/cowhide-default-night.css'],
        dest: 'dist/cowhide-default-night.min.css'
      }
    },
    copy: {
      dist: {
        files: {
          'dist/images/': 'images/**',
          'dist/README.md': 'README.md',
          'dist/examples/calf/': 'examples/calf/**',
          'dist/examples/widget-gallery/': 'examples/widget-gallery/**',
          'dist/docs/': 'docs/**'
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