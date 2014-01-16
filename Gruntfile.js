module.exports = function (grunt) {
    grunt.initConfig({
        baseUrl: '',
        less: {
            dist: {
                files: {
                    '<%= baseUrl %>css/styles.css': '<%= baseUrl %>less/styles.less'
                }
            }
        },
        watch: {
            less: {
                files: ['<%= baseUrl %>less/*.less'],
                tasks: ['less']
            },
            livereload: {
                options: { livereload: true },
                files: ['<%= baseUrl %>css/styles.css',
                        '<%= baseUrl %>js/*.js',
                        '<%= baseUrl %>*.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['watch']);
};
