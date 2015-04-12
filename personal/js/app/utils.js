define(["jquery"], function ($) {
        function createHeader(quote, author) {
            var header = $('<h3></h3>').addClass('section-header'),
                quoteDiv = $('<div/>').addClass('section-header-quote').text(quote),
                authorDiv = $('<div/>').addClass('section-header-author').text(author);

            header
                .append(quoteDiv)
                .append(authorDiv);

            return header;
        }

        return {
            createHeader: createHeader
        };
    }
)
;