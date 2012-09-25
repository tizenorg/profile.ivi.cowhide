module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: [
        'grunt.js',

        'src/bootstrap/js/*.js',
        'src/*.js',

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
      bootstrap: {
        files: {
          'dist/ivi-webui.css': 'src/bootstrap/less/bootstrap.less'
        }
      }
    },
    concat: {
      js: {
        src: [
          'lib/*.js',
          // Bootstrap files must preserve order.
          'bootstrap-transition.js',
          'bootstrap-alert.js',
          'bootstrap-button.js',
          'bootstrap-carousel.js',
          'bootstrap-collapse.js',
          'bootstrap-dropdown.js',
          'bootstrap-modal.js',
          'bootstrap-tooltip.js',
          'bootstrap-popover.js',
          'bootstrap-scrollspy.js',
          'bootstrap-tab.js',
          'bootstrap-typeahead.js',
          'bootstrap-affix.js'
        ],
        dest: 'dist/ivi-webui.js'
      }
    },
    min: {
      all: {
        src: ['dist/ivi-webui.js'],
        dest: 'dist/ivi-webui.min.js'
      }
    },
    cssmin: {
      all: {
        src: ['dist/ivi-webui.css'],
        dest: 'dist/ivi-webui.min.css'
      }
    }
  });

  // Default task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-css');
  grunt.registerTask('default', 'lint less concat min cssmin');
};