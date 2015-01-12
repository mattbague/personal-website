/* global define, require, console */

define(["jquery"],  function($) {
    var section = $('<div class=".section"></div>'),
        header = $('<h3></h3>').addClass('section-header').html('"Men are moved by two levers only: fear and self interest."<br />- Napoleon Bonaparte');


    section.append(header);

    return section;
});