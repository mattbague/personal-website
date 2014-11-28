define(["jquery"], function ($) {
    var section = $('<div></div>').addClass('section'),
        sectionTitle = $('<h3></h3>').addClass('section-title').html('"The most complicated skill is to be simple."<br/>- Dejan Stojanovic'),
    // TODO: Read these lists from some sort of database or file...
        languagesSubsection = createSubsection('Languages', ['Java', 'JavaScript', 'Groovy', 'SQL', 'Objective-C']),
        frameworkAndLibrarySubsection = createSubsection('Frameworks/Libraries', ['require', 'JSON', 'jQuery + UI', 'React', 'Spring', 'JUnit/QUnit', 'Jackson', 'Spock', 'Mockito']),
        methodologiesSubsection = createSubsection('Methodologies', ['Pair Programming', 'Agile Development', 'TDD', 'OOP', 'REST', 'RDBMS', 'NoSQL']),
        toolsSubsection = createSubsection('Tools', ['IntelliJ IDEA', 'Linux', 'Git', 'Maven', 'JSHint', 'Jenkins CI', 'Supervisor']),
        platformsSubsection = createSubsection('Platforms', ['JVM', 'Elasticsearch', 'Node.js', 'Android', 'iOS']),
        databaseSubsection = createSubsection('Databases', ['Cassandra', 'MongoDB', 'Oracle']);

    function createSubsection(listTitle, listArray) {
        var subsection = $('<div></div>').addClass('skillset'),
            listHeader = $('<h3></h3>').text(listTitle),
            unorderedList = $('<ul></ul>');

        $.each(listArray, function (index, value) {
            var listItem = $('<li></li>').text(value);
            unorderedList.append(listItem)
        });

        return subsection.append(listHeader).append(unorderedList);
    }

    section
        .append(sectionTitle)
        .append(languagesSubsection)
        .append(frameworkAndLibrarySubsection)
        .append(methodologiesSubsection)
        .append(toolsSubsection)
        .append(platformsSubsection)
        .append(databaseSubsection);

    return section;
});