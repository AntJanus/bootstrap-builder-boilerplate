module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

    //image minification
    imagemin: {
        dev: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                {
                    expand: true,
                    cwd: './images/',
                    src: ['**/*.png'],
                    dest: './build/images/',
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
                    dest: './build/images/',
                    ext: '.jpg'
                }
                ]
            }
        },
        release: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                {
                    expand: true,
                    cwd: './images/',
                    src: ['**/*.png'],
                    dest: './dist/images/',
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
                    dest: './dist/images/',
                    ext: '.jpg'
                }
                ]
            }
        }
    }

    // Load NPM Tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    grunt.registerTask('release', ['imagemin:release']);
    grunt.registerTask('build', ['imagemin:dev']);

});
};
