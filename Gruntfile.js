var path = require('path')
    , fs = require('fs')
    , _ = require("underscore")
    ;

module.exports = function (grunt) {


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        
        // Install dependencies for bower and npm
        exec: {
            npm: {
                cwd: ".",
                cmd: ' NODE_ENV=production npm install'
            }
        },


        jsdoc: {
            dist: {
                src: ['protocols.js'],
                options: {
                    destination: 'docs',
                    template: "node_modules/minami",
                }
            }
        }, 
        
    });

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-jsdoc');

    // Default task(s)
    grunt.registerTask('default', [
        'jsdoc',
        'exec:npm',
    ]);

};