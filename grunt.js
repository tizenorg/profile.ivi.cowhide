module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: [
        'grunt.js',
        'lib/**/*.js',

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
        src: ['src/bootstrap/js/*.js'],
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