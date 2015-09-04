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
            scrollTop: $("#about").offset().top - 60
        }, 1000);
        $('header').addClass("visible");
    });
    $(".port").bind("click", function(){
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 60
        }, 1000);
        $('header').addClass("visible");
    });
    $(".contact").bind("click", function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 60
        }, 1000);
        $('header').addClass("visible");
    });
});