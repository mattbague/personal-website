
define(["jquery"],  function($) {
    var section = $('<div class=".section"></div>'),
        header = $('<h3></h3>').addClass('section-header').html('"Good judgment comes from experience, and experience comes from bad judgment."<br />- Frederick P. Brooks');


    section.append(header);

    return section;
});