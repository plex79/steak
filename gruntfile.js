module.exports = function(grunt) {

grunt.initConfig({
    babel: {
        options: {
            "sourceMap": true
        },
        dist: {
            files: [{
                "expand": true,
                "cwd": "_dev/js",
                "src": ["**/*.jsx"],
                "dest": "_dev/js-compiled/",
                "ext": "-compiled.js"
            }]
        }
    },
    uglify: {
        all_src : {
            options : {
              sourceMap : true,
              sourceMapName : '_final/js/sourceMap.map'
            },
            src : '_dev/js-compiled/**/*-compiled.js',
            dest : '_final/js/all.min.js'
        }
    },
    sass: {
        dist: {
          files: {
            '_dev/css/style.css' : '_dev/scss/style.scss'
          }
        }
      },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: '_dev/css/style.css'
      }
    },
    cssmin: {
      task: {
        src: ['_dev/css/style.css'], 
        dest: '_final/css/style.min.css'
      },
      options: {
        'banner': null,
        'keepSpecialComments': '*',
        'report': 'min'
      }
    },
    connect: {
        server: {
          options: {
            livereload: true,
            base: '_final/',
            port: 9009
          }
        }
    },
    watch: {
        sass: {
          // We watch and compile sass files as normal but don't live reload here
          files: ['_dev/scss/**/*.scss'],
          tasks: ['sass', 'postcss', 'cssmin']
        },
        babel: {
          files: ['_dev/js/*.jsx'],
          tasks: ['babel']
        },
        uglify: {
          files: ['_dev/js-compiled/*.js'],
          tasks: ['uglify']
        },
        livereload: {
          // Here we watch the files the sass task will compile to
          // These files are sent to the live reload server after sass compiles to them
          options: { livereload: true },
          files: ['_final/**/*'],
        }
      }    
});

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default", ["connect:server", "watch"]);
};
