
define(["jquery", "app/utils"],  function($, Utils) {
    var section = $('<div class=".section"></div>'),
        header = Utils.createHeader('"Good judgment comes from experience, and experience comes from bad judgment."', '- Frederick P. Brooks');

    section.append(header);

    return section;
});