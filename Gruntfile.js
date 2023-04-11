module.exports = function(grunt){

    //configuration de grunt
    grunt.initConfig({
        webfont: {
            icons: {
                src: "icons/*.svg",
                dest : "webroot/assets/fonts",
                destCss: "scss",
                options: {
                    engine: "fontforge",
                    stylesheets: ["scss"],
                    relativeFontPath: "../fonts"
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-webfonts');
    //definition des tâches Grunt
    grunt.registerTask("default",["webfont"]);

}