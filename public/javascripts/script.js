$(document).ready(function() {
    options = [];

    $("#scan").click(function(e) {
        e.stopPropagation();
        action();
    });

    $("body").on("click", ".list-group-item", function(e) {
        e.stopPropagation();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            let index = options.indexOf($(this).attr('value'));
            options.splice(index, 1);
        }
        else {
            $(this).addClass("active");
            options.push($(this).attr(value))
        }
    })
})