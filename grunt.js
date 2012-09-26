module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: [
        'grunt.js',
        'src/bootstrap/**/*.{js,less}',
        'src/*.js',
        'tests/**/*.js'
      ],
      tasks: 'default'
    },
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

          'src/cowhide-widget.js',
          'src/cowhide-button.js'
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