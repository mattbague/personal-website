/* jshint undef: true, unused: true */
/* global define, require, console */

define(["jquery", "app/layout", "jquery_ui"], function($, Layout) {

    var opts = {
            pathname: window.location.pathname
        },
        layout = Layout(opts);

    $('body').append(layout.$el);
});
