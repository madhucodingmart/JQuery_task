$(document).ready(function() {
    $("#btn1").on("click", function() {

        var el = $(this);
        el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));


        $("#p").hide();
        $("#d").on("click", function() {
            $("#pre").toggle();
            $("#p").toggle();


            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });



        $("#p1").hide();
        $("#d1").on("click", function() {
            $("#pre1").toggle();
            $("#p1").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

        $("#p2").hide();
        $("#d2").on("click", function() {
            $("#pre2").toggle();
            $("#p2").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

        $("#p3").hide();
        $("#d3").on("click", function() {
            $("#pre3").toggle();
            $("#p3").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

        $("#p4").hide();
        $("#d4").on("click", function() {
            $("#pre4").toggle();
            $("#p4").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

        $("#p5").hide();
        $("#d5").on("click", function() {
            $("#pre5").toggle();
            $("#p5").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

        $("#p6").hide();
        $("#d6").on("click", function() {
            $("#pre6").toggle();
            $("#p6").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

        $("#p7").hide();
        $("#d7").on("click", function() {
            $("#pre7").toggle();
            $("#p7").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

        $("#p8").hide();
        $("#d8").on("click", function() {
            $("#pre8").toggle();
            $("#p8").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

        $("#p9").hide();
        $("#d9").on("click", function() {
            $("#pre9").toggle();
            $("#p9").toggle();

            var el = $(this);
            el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
        });

    });
});
