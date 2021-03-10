 $("body").niceScroll({
     cursorcolor: "#f65803",
     cursorwidth: "8px",
     cursorborder: "none"
 });

$(".arrow i").click(function () {
   
    $("html, body").animate({
        scrollTop: $(".features").offset().top
    }, 1000);

});
