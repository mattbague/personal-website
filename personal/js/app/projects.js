
define(["jquery"],  function($) {
    var section = $('<div class=".section"></div>'),
        header = $('<h3></h3>').addClass('section-header').html('"The best way to get a project done faster is to start sooner."<br />- Jim Highsmith');


    section.append(header);

    return section;
});