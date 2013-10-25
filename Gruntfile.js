module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

    //dirs
    distFolder: 'dist',
    bowerFolder: 'bower_components',


    //clean

    clean: {
      dist: ['dist']
  },

    //image minification
    imagemin: {
        build: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                {
                    expand: true,
                    cwd: './images/',
                    src: ['**/*.png'],
                    dest: '<%= distFolder %>/images/',
                    ext: '.png'
                }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                {
                    expand: true,
                    cwd: './images/',
                    src: ['**/*.jpg'],
                    dest: '<%= distFolder %>/images/',
                    ext: '.jpg'
                }
                ]
            }
        }
    },

    //less
    less: {
        build: {
            files: [{
                expand: true,
                cwd: 'less/',
                src: ['**/*.less'],
                dest: 'dist/css/',
                ext: '.css'
            }]
        }
    },

 //copy
 copy: {
    build: {
        expand: true,
        cwd: '<%= bowerFolder %>/bootstrap/dist/',
        dest: '<%= distFolder %>/',
        filters: 'isFile',
        src: ['**']
    },
},

});
    // Load NPM Tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('build', ['clean', 'imagemin:build', 'less:build', 'copy:build']);
};
