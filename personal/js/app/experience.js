
define(["jquery"],  function($) {
    function create() {
        document.title = "Experience - mattbague.com";
        $("body").empty();
        $("body").append("<div>Experience me</div>");
    }

    return {
        create: create
    };
});