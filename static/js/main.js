/**
 * Created by Maira on 8/27/15.
 */
jQuery(document).ready(function ($) {
    $('html, body').animate({
            scrollTop: 0
        }, 10);
    $("section").width($(window).width()).height($(window).height());
    $(".start").bind("click", function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        $('header').removeClass("visible");
    });
    $(".about").bind("click", function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 70
        }, 1000);
        $('header').addClass("visible");
    });
    $(".port").bind("click", function(){
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 70
        }, 1000);
        $('header').addClass("visible");
    });
    $(".contact").bind("click", function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 70
        }, 1000);
        $('header').addClass("visible");
    });

    $(".point").bind("click", function(){
        $('.point').removeClass("selected");
        $(this).addClass("selected");
        var data_id = $(this).attr("data-id");
        $(".entrance").removeClass("selected");
        $(".entrance[data-id="+data_id+"]").addClass("selected");
    });
    $(window).on("scroll", function(){
        if ($('body').scrollTop() < 300) {
            $('header').removeClass("visible");
        } else {
            $('header').addClass("visible");
        }
    });
});