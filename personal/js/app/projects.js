
define(["jquery", "app/utils"],  function($, Utils) {
    var section = $('<div class=".section"></div>'),
        header = Utils.createHeader('"The best way to get a project done faster is to start sooner."', '- Jim Highsmith');

    section.append(header);

    return section;
});