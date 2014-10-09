
define(["jquery"],  function($) {
    function create() {
        document.title = "Interests - mattbague.com";
        $("body").empty();
        $("body").append("<div>Interests me</div>");
    }

    return {
        create: create
    }
});