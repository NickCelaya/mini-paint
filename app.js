$(document).ready(function() {



    $(".box").on("mouseenter", function() {
        $(this).addClass(color);
        // change mouseenter to click to have clicked boxes stay color
    });


    $(".box").on("dblclick", function() {
        $(this).removeClass(colors);

    });



    $("#reset").on("dblclick", function() {
        $(".box").removeClass(colors)

    });


    // creating color Pallette.
    var colors = "green red yellow blue white ";

    $("#red").on("click", function() {
        color = "red";

    })

    $("#blue").on("click", function() {
        color = "blue";

    })

    $("#green").on("click", function() {
        color = "green";

    })

    $("#yellow").on("click", function() {
        color = "yellow";
    })

    $("#white").on("click", function() {
        color = "white";
    })





});
// end of query.
