

define(["jquery", "app/utils"],  function($, Utils) {
    var section = $('<div class=".section"></div>'),
        header = Utils.createHeader('"The best way to get a project done faster is to start sooner."', '- Jim Highsmith'),
        githubLink = $('<a/>').text('Check out my GitHub!').attr('href', 'https://github.com/mattbague').addClass('contact-link'),
        githubImg = $('<img/>').attr('src', 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png').addClass('email-image'),
        githubDiv = $('<div/>');

    function createProjectEntry(projectName, langTech, startDate, endDate, description) {

        var entry = $('<div/>').addClass('generic-entry'),
            titleHeader = $('<h3/>').text(projectName),
            langTechDiv = $('<div/>').text('Built using:' + langTech),
            durationDiv = $('<div/>').text(startDate + ' -- ' + endDate),
            descDiv = $('<div/>').text(description);
        return entry
            .append(titleHeader)
            .append(langTechDiv)
            .append(durationDiv)
            .append(descDiv);
    }

    githubLink.prepend(githubImg);
    githubDiv.append(githubLink);

    section
        .append(header)
        .append(githubDiv)
        .append(createProjectEntry('This website!', 'JS, JQuery, require', 'September 2013',  'ongoing'))
        .append(createProjectEntry('DBMS for XML Documents', 'C', 'September 2013', 'December 2013', 'A NoSQL DBMS written in C by a team of four. Parses XML documents using SAX. Data records are stored using a heap file organization and a sparse index is used indexing of the records. Queries were implemented using a simplified version of XPath.'))
        .append(createProjectEntry('Brawl Card Game', 'Java, Java Swing, Redis', 'January 2013', 'June 2013'));

    return section;
});