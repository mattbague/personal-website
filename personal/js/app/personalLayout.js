/* jshint undef: true, unused: true */
/* global define, require */

define(["jquery"], function($) {
    "use strict";
    var iconsPath = "personal/images/icons/";

    function layout() {
        var header = "<div class='header'></div>";
        var container = "<div id='container'></div> ";
        var footer = "<div class='footer'></div>";
        var linkBack = "<p>Hosting provided by <a href='http://vlexofree.com/'>VlexoFree Hosting</a></p>";

        $("body").append(header);
        $("body").append(container);
        $("body").append(footer);
        $(".footer").append(linkBack);
    }

    function navi() {
        var buttons = {},
            buttonNames = {
                about: "About Me",
                skills: "Skills",
                experience: "Work Experience",
                projects: "Projects",
                interests: "Interests",
                contact: "Contact Info",
                home: "Home"
            },
            navSection = "<div id='nav' class='navbar'></div>";

        $.each(buttonNames, function(key, value) {
            buttons[key] = "<a><div id='" + key + "' class='level'>" + value +
                "<img src='" + iconsPath + key + ".png'/></div></a>";
        });

        $("#container").append(navSection);
        $("#nav").append(buttons.about)
            .append(buttons.skills)
            .append(buttons.experience)
            .append(buttons.projects)
            .append(buttons.interests)
            .append(buttons.contact)
            .append(buttons.home);

        $.each(buttonNames, function(key) {
            $("#" + key).click(function() {
                require([("app/" + key)], function(onSuccess) {
                    onSuccess.create();
                });
                window.location.hash = key;
            });
        });
    }

    function create() {
        layout();
        navi();
    }


    return {
        create: create
    };
});
