/* global define, require, console */

define(["jquery", "app/utils"],  function($, Utils) {
    var section = $('<div class=".section"></div>'),
        header = Utils.createHeader('"Men are moved by two levers only: fear and self interest."', '- Napoleon Bonaparte');

    section.append(header).append($('<div/>').text("I'll fill this out eventually..."));

    return section;
});