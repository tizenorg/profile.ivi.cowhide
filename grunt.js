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

        'examples/calf/javascripts/*.js',
        'examples/calf/javascripts/app/*.js',
        'examples/calf/javascripts/app/**/*.js',

        'tests/**/*.js'
      ],
      tasks: 'default'
    },
    lint: {
      all: [
        'grunt.js',

        'src/bootstrap/js/*.js',
        'src/javascripts/*.js',

        'examples/calf/javascripts/*.js',
        'examples/calf/javascripts/app/*.js',
        'examples/calf/javascripts/app/**/*.js',

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
          'dist/cowhide-default.css': 'src/less/cowhide-default.less'
        }
      },
      cyborg: {
        files: {
          'dist/cowhide-cyborg.css': 'src/less/cowhide-cyborg.less'
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
          'src/javascripts/cowhide-slider.js'
        ], dest: 'dist/cowhide.js'
      },
      css_default: {
        src: [
          'dist/cowhide-default.css',
          'lib/jquery.ui.slider.css'
        ], dest: 'dist/cowhide-default.css'
      },
      css_cyborg: {
        src: [
          'dist/cowhide-cyborg.css',
          'lib/jquery.ui.slider.css'
        ], dest: 'dist/cowhide-cyborg .css'
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
      cyborg: {
        src: ['dist/cowhide-cyborg.css'],
        dest: 'dist/cowhide-cyborg.min.css'
      }
    },
    copy: {
      dist: {
        files: {
          'dist/images/': 'images/*'
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

  grunt.registerTask('default', 'growl:started lint less concat min cssmin copy growl:finished');
};