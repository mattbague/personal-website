
define(["jquery"],  function($) {
    function create() {
        document.title = "Contact - mattbague.com";
        $("body").empty();
        $("body").append("<div>Contact me</div>");
    }

    return {
        create: create
    };
});