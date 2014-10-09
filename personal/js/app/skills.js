
define(["jquery"],  function($) {
    function create() {
        document.title = "Skills - mattbague.com";
        $("body").empty();
        $("body").append("<div>Skills me</div>");
    }

    return {
        create: create
    };
});