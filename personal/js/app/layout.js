/* jshint undef: true */
/* global define, require, history, console */

define(["jquery"], function ($) {
    var iconsPath = "personal/images/icons/",
        container = $('<div class="container"></div>'),
        header = $('<div class="header"></div>'),
        columnContainer = $('<div class="column-container opacity"></div>'),
        leftColumn = $('<div class="left-column"></div>'),
        rightColumn = $('<div class="right-column"></div>'),
        footer = $('<div class="footer">Hosting provided by <a href="http://vlexofree.com/">VlexoFree Hosting</a></div>'),
        content = $('<div class="content"></div>').hide();

    function createLayout() {
        leftColumn.append(createNavi());
        rightColumn.append(content);
        columnContainer.append(leftColumn).append(rightColumn);

        container
            .append(header)
            .append(columnContainer)
            .append(footer);
    }

    function changeContent(key, section) {
        toggleSelected(key);
        document.title = key.charAt(0).toUpperCase() + key.slice(1) + " - mattbague";
        content.hide('drop', {
            direction: 'down',
            complete: function () {
                content.empty();
                content.append(section);
                content.show('drop', {direction: 'up'});
            }
        });
    }

    function createNavi() {
        var buttons = {},
            buttonNames = {
                about: "About",
                skills: "Skills",
                experience: "Experience",
                projects: "Projects",
                interests: "Interests",
                contact: "Contact",
                home: "Home"
            },
            navSection = $('<div class="navbar"></div>');

        $.each(buttonNames, function (key, value) {
            buttons[key] = $('<div></div>')
                .attr('id', key)
                .addClass('level')
                .text(value)
                .append($('<img/>').attr('src', iconsPath + key + '.png'));
        });

        navSection
            .append(buttons.home)
            .append(buttons.about)
            .append(buttons.skills)
            .append(buttons.experience)
            .append(buttons.projects)
            .append(buttons.interests)
            .append(buttons.contact);

        $.each(buttonNames, function (key) {
            navSection.find("#" + key).click(function () {
                history.pushState({page: window.location.pathname}, '', key);
                require([("app/" + key)], function (section) {
                    changeContent(key, section);
                });
            });
        });

        return navSection;
    }

    function toggleSelected(selectedId) {
        container.find('.level').removeClass('selected');
        container.find('#' + selectedId).addClass('selected');
    }

    function handleHistoryPopState() {
        return function () {
            var key = window.location.pathname.substring(1);
            if (key) {
                toggleSelected(key);
                document.title = key.charAt(0).toUpperCase() + key.slice(1) + " - mattbague.com";
                require([("app/" + key)], function (section) {
                    changeContent(key, section);
                });
            }
        };
    }

    function handlePathname(pathname) {
        if (pathname && pathname.length > 1) {
            require([("app/" + pathname)], function (section) {
                changeContent(pathname.substring(1), section);
            });
        }
        else {
            require([("app/home")], function (section) {
                changeContent('home', section);
            });
        }
    }

    return function (opts) {
        createLayout();
        handlePathname(opts.pathname);
        window.onpopstate = handleHistoryPopState();

        return {
            $el: container
        };
    }
});
