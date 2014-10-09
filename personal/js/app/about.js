
define(["jquery"],  function($) {
    function create() {
        document.title = "About - mattbague.com";
        $("body").append("<div>About me</div>");
    }

    return {
        create: create
    };
});