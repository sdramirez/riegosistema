module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      debug: {
        options: {
          compress: {
            drop_debugger: false
          },
          mangle: false,
          beautify: true
        },
        files:{
          'scripts/scripts.js': "src/scripts/*.js"
        }
      },
      dist: {
        options: {
          mangle: false,
        },
        files:{
          'scripts/scripts.js': "src/scripts/*.js"
        }
      }
    },
    sass: {
      debug: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: {
          'styles/main.css': 'src/styles/main.scss'
        }
      },
      dist: {
        options: {
          style: 'compact',
        },
        files: {
          'styles/main.css': 'src/styles/main.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/scripts/*.js'],
        tasks: ['uglify:debug']
      },
      styles: {
        files: ['src/styles/**/*.scss'],
        tasks: ['sass:debug']
      }
    },
    connect: {
      server:{
        options:{
          port: 8000,
        }
      }
    },
    // ngconstant: {
    //   debug:{
    //     options:{
    //       name: "waic.constants",
    //       dest: "src/scripts/constants.js"
    //     },
    //     constants:{
    //       serviceUrl: "http://msrtest.waic.com/consumerrater/service/",
    //       vehicleUrl: "http://msrtest.waic.com/consumerrater/service/Vehicle.svc/",
    //       reportUrl:  "http://msrtest.waic.com/reports/reportprint.aspx",
    //       emailUrl:   "http://msrtest.waic.com/reports/reportprintEmail.aspx"
    //     }
    //   },
    //   dist: {
    //     options:{
    //       name: "waic.constants",
    //       dest: "src/scripts/constants.js"
    //     },
    //     constants:{
    //       serviceUrl: "http://msrtest.waic.com/consumerrater/service/",
    //       vehicleUrl: "http://msrtest.waic.com/consumerrater/service/Vehicle.svc/",
    //       reportUrl:  "http://msrtest.waic.com/reports/reportprint.aspx",
    //       emailUrl:   "http://msrtest.waic.com/reports/reportprintEmail.aspx"
    //     }
    //   }
    // },
    bowercopy: {
      js:{
        options:{
          destPrefix: "scripts/"
        },
        files:{
          'angular.js':'angular/angular.min.js',
          'angular-ui-router.js':'angular-ui-router/release/angular-ui-router.min.js',
          'ui-bootstrap.js':'angular-bootstrap/ui-bootstrap.min.js',
          'ui-bootstrap-tpls.js':'angular-bootstrap/ui-bootstrap-tpls.min.js',
          'moment.js': 'momentjs/min/moment.min.js',
          'underscore.js': 'underscore/underscore.js'
        }
      },
      css:{
        files:{
          'styles/bootstrap.css':'bootstrap/dist/css/bootstrap.min.css',
          'fonts':'bootstrap/dist/fonts/',
        }
      }
    },
    copy: {
      build: {
        nonull: true,
        src: ["index.html","fonts/**","scripts/**","styles/**","images/**","views/**"],
        dest: "build/"
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  //grunt.registerTask('default', ['ngconstant:debug','bowercopy','uglify:debug', 'sass:debug']);
  grunt.registerTask('default', ['bowercopy','uglify:debug', 'sass:debug']);
  grunt.registerTask('server',['default','connect','watch']);

  //grunt.registerTask("build",["ngconstant:dist",'bowercopy','uglify:dist','sass:dist','copy:build']);
  grunt.registerTask("build",['bowercopy','uglify:dist','sass:dist','copy:build']);

};
