/* jshint undef: true, unused: true */
/* global define, require */

define(["jquery", "app/personalLayout"], function($, layout) {
    "use strict";
    var hashValue = window.location.hash.substr(1);

    function setupLayout() {
        $( document ).ready(
            $("body").append(layout.create())
        );
    }

    function createPageFromFragment() {
        if (hashValue) {
            require([("app/" + hashValue)], function(onSuccess) {
                onSuccess.create();
            });
        }
        else {
            require(["app/home"], function(onSuccess) {
                onSuccess.create();
            });
        }
    }


    setupLayout();
    createPageFromFragment();
});
