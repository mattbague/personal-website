define(["jquery", "app/utils"], function ($, Utils) {
    var section = $('<div></div>').addClass('section'),
        header = Utils.createHeader('"The most complicated skill is to be simple."', '- Dejan Stojanovic'),
    // TODO: don't hard code these...
        languagesSubsection = createSubsection('Languages', ['Java', 'Scala', 'JavaScript/CSS/HTML', 'SQL', 'Objective-C']),
        frameworkAndLibrarySubsection = createSubsection('Frameworks/Libraries', ['require', 'jQuery + UI', 'Spring', 'JUnit/QUnit']),
        methodologiesSubsection = createSubsection('Methodologies', ['Pair Programming', 'Agile Development', 'TDD', 'OOP', 'REST', 'RDBMS', 'NoSQL']),
        toolsSubsection = createSubsection('Tools', ['IntelliJ IDEA', 'Linux', 'Git', 'Maven']),
        platformsSubsection = createSubsection('Platforms', ['JVM', 'Android', 'iOS']),
        databaseSubsection = createSubsection('Databases/Systems', ['Kafka', 'Elasticsearch', 'Cassandra', 'MongoDB', 'Oracle']);

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
        .append(header)
        .append(languagesSubsection)
        .append(frameworkAndLibrarySubsection)
        .append(methodologiesSubsection)
        .append(databaseSubsection)
        .append(toolsSubsection)
        .append(platformsSubsection);

    return section;
});