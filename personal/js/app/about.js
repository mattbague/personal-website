/* global define, require, console */


define(["jquery", "app/utils"], function ($, Utils) {
    var section = $('<div></div>').addClass('section'),
        tableContainer = $('<table border=0></table>'),
        header = Utils.createHeader('"I don\'t like that man. I must get to know him better."', '- Abraham Lincoln'),
        basicInfoRow = createBasicInfoRow(),
        descriptionRow = createDescriptionRow();

    function getQuickInfoPairingList() {
        return [
            ['Name', 'Matt Bague'],
            ['Employed at', 'CJ Affiliate by Conversant'],
            ['Position', 'Associate Software Engineer'],
            ['Lives in', 'Westlake Village, CA'],
            ['Studied at', 'California Polytechnic State University, San Luis Obispo'],
            ['Degree in', 'B.S., Computer Science']
        ]
    }

    function createBasicInfoRow() {
        var quickRow = $('<tr></tr>'),
            pictureCell = $('<td></td>'),
            picture = $('<img/>').attr('src', 'images/me_fancy.png').addClass('bio-image'),
            quickInfoCell = $('<td style="vertical-align: top"></td>'),
            quickInfo = $('<p></p>').addClass('bio');

        var pairings = getQuickInfoPairingList();

        $.each(pairings, function (index, pair) {
            quickInfo.append($('<div class="quick-info-entry"><strong>' + pair[0] + ':</strong><br />' + pair[1] + '</div>'));
        });

        pictureCell.append(picture);
        quickInfoCell.append(quickInfo);

        quickRow.append(pictureCell).append(quickInfoCell);

        return quickRow;
    }

    function createDescriptionRow() {
        var descriptionRow = $('<tr></tr>'),
            descriptionCell = $('<td></td>').attr('colspan', 2),
            paragraph1 = $('<p></p>'),//.addClass('indent'),
            paragraph2 = $('<p></p>'),//.addClass('indent'),
            paragraph3 = $('<p></p>');//.addClass('indent');

        // TODO: Have the text come from an endpoint/database/local file
        paragraph1.text("I'm a fairly recent computer science graduate diving into the profession of software engineering");
        paragraph2.text("");
        paragraph3.text("");

        descriptionCell
            .append(paragraph1)
            .append(paragraph2)
            .append(paragraph3);

        descriptionRow.append(descriptionCell);

        return descriptionRow;
    }

    tableContainer
        .append(basicInfoRow)
        .append(descriptionRow);

    section
        .append(header)
        .append(tableContainer);

    return section;
});