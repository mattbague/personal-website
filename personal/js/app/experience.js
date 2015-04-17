

define(["jquery", "app/utils"],  function($, Utils) {
    var section = $('<div/>').addClass('section'),
        header = Utils.createHeader('"Good judgment comes from experience, and experience comes from bad judgment."', '- Frederick P. Brooks');

    function createJobEntry(title, company, startDate, endDate, description) {
        var entry = $('<div/>').addClass('generic-entry'),
            titleHeader = $('<h3/>').text(title),
            companyDiv = $('<div/>').text(company).css('font-style', 'italic'),
            durationDiv = $('<div/>').text(startDate + ' -- ' + endDate),
            descDiv = $('<div/>').text(description);

        return entry
            .append(titleHeader)
            .append(companyDiv)
            .append(durationDiv)
            .append(descDiv);
    }

    section
        .append(header)
        .append(createJobEntry('Associate Software Engineer', 'CJ Affiliate', 'June 2014', 'present', 'Doing fun stuff with some cool engineers. (Front end, back end, data infrastructure, and more!)'))
        .append(createJobEntry('Undergraduate Student', 'California Polytechnic State University: San Luis Obispo', 'September 2010', 'June 2014',
            'Specialized in Databases, UI, and AI. Senior project was a video game recommendation website that was advised by Dr. Franz Kurfess'))
        .append(createJobEntry('Information Systems Intern', 'Amgen', 'June 2013', 'September 2013', 'Helped create an internal help desk website built upon ServiceNow.'));

    return section;
});