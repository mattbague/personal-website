requirejs.config({
    "baseUrl": "personal/js/lib",
    "paths": {
        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
        "jquery_ui": "//code.jquery.com/ui/1.11.2/jquery-ui.min",
        "underscore": "underscore-min",
        "backbone": "backbone-min",
        "react": "//dragon.ak.fbcdn.net/hphotos-ak-xfp1/t39.3284-6/10574704_692335637508900_1178381672_n"
    },
    "shim": {
        "jquery_ui": {
            exports: "$",
            deps: ['jquery']
        },
        "backbone": {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ["underscore", "jquery"],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: "Backbone"
        },
        "underscore": {
            exports: "_"
        }
    }
});
