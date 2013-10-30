module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

    //dirs
    distFolder: 'dist',
    bowerFolder: 'bower_components',


    //clean

    clean: {
      dist: ['dist', '_gh_pages']
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
                ext: '.css',
                report: 'min'
            }]
        },
    },

    cssmin: {
        build: {
            expand: true,
            cwd: '<%= distFolder %>/css/',
            src: ['*.css', '!*.min.css' ],
            dest: '<%= distFolder %>/css/',
            ext: '.min.css',
            report: 'min'
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

//jekyll
jekyll: {
    work: {
        options: {
            serve: true,
            exlude: ['node_modules'],
            watch: true
        }
    }
},


//watch
watch: {
    options: {
        debounceDelay: 200,
        livereload: true,
        nospawn: true
    },
    work: {
        files: 'less/**/*.less',
        tasks: ['less', 'cssmin']
    }
},

//concurrency
concurrent: {
    work: {
        tasks: ['jekyll', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    }
}


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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.registerTask('build', ['clean', 'imagemin:build', 'copy:build', 'less', 'cssmin']);
    grunt.registerTask('work', ['clean', 'copy:build', 'less', 'cssmin', 'concurrent:work']);
};
