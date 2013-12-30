/*global module:false*/
module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['assets/lib/{,*/}*.js'],
        dest: 'assets/dist/<%= pkg.name %>.v<%= pkg.version %>.js'
      }
    },
    uglify: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'assets/dist/<%= pkg.name %>.v<%= pkg.version %>.min.js'
      }
    },
    jshint: {
      options: grunt.file.readJSON('.jshintrc'),
      lib_test: {
        src: ['assets/lib/{,*/}*.js']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'nyan'
        },
        src: ['test/*.js']
      }
    },
    connect : {
        options: {
            port       : 9000,
            livereload : 35729,
            hostname   : 'localhost'
        },
        livereload: {
            options: {
                open: true,
                base: 'assets'
            }
        }
    },
    watch: {
        livereload: {
            options: { livereload: '<%= connect.options.livereload %>' },
            files : ['assets/{,*/}*.js'],
            tasks : []
        }
    }
  });



  // TASKS
  grunt.registerTask('build',  ['concat', 'uglify']);
  grunt.registerTask('server', ['connect','watch']);
  grunt.registerTask('hint', ['jshint']);

};
