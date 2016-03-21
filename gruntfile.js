module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  // Define the configuration for all the tasks
  grunt.initConfig({

    // compile less
    less: {
      development: {
        files: {
          'public/css/production.css': 'shared/less/main.less'
        }
      }
    },

    // Prefixer

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      files: {
        src: 'public/css/production.css',
        dest: 'public/css/production.css'
      }
    },

    concat: {
      options: {
        separator: grunt.util.linefeed + ';' + grunt.util.linefeed,
      },
      dist: {
        src: [
          'modules/core/client/app.js',
          'modules/core/client/config.js',
          'modules/core/client/interceptors.js',
          'modules/core/client/run.js',
          'modules/core/client/controllers/{,*/}*.js',
          'modules/user/client/{,*/}*.js',
         ],
        dest: 'public/js/production.js',
      },
    },

    //minify css

    cssmin: {
      minify: {
        src: 'public/css/production.css',
        dest: 'public/css/production.css'
      }
    },

    // copy statics
    copy: {
      main: {
        files: [
          {
              expand: true,
              cwd: 'bower_components/font-awesome/css',
              src: ['font-awesome.min.css'],
              dest: 'public/css'
          },
          {
              expand: true,
              cwd: 'bower_components/font-awesome/fonts',
              src: ['**'],
              dest: 'public/fonts'
          },
          {
              expand: true,
              cwd: 'bower_components/jquery/dist',
              src: ['jquery.min.js'],
              dest: 'public/js'
          },
          {
              expand: true,
              cwd: 'bower_components/bootstrap/dist/js',
              src: ['bootstrap.min.js'],
              dest: 'public/js'
          },
          {
              expand: true,
              cwd: 'bower_components/angular/',
              src: ['angular.min.js'],
              dest: 'public/js'
          },
          {
              expand: true,
              cwd: 'bower_components/angular-route/',
              src: ['angular-route.min.js'],
              dest: 'public/js'
          },
        ]
      }
    },

    // watch task
    watch: {
      scripts: {
        files: [
            // 'modules/pages/client/{,*/}*.js',
            'modules/core/client/{,*/}*.js',
            'modules/user/client/{,*/}*.js',
        ],
        tasks: ['concat'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['assets/less/{,*/}*.less'],
        tasks: ['less','autoprefixer','cssmin']
      }
    }
  });

  // build task
  grunt.registerTask('build', [
    'copy','concat','less','autoprefixer','cssmin'
  ]);
};