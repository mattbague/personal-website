requirejs.config({
    "baseUrl": "personal/js/lib",
    "paths": {
        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
        "underscore": "underscore-min",
        "backbone": "backbone-min",
        "react": "//dragon.ak.fbcdn.net/hphotos-ak-xfp1/t39.3284-6/10574704_692335637508900_1178381672_n"
    }
});

// Load the main app module to start the app
requirejs(["app/home"]);