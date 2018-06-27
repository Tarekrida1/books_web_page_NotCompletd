$(function () {
    'use strict';
    $(window).scroll(function () { 
        if ($(document).scrollTop() > 0) { 
            $(".navbar").css("box-shadow", "0 0rem 1rem 0rem");
            $(".navbar").css({
                background: "#fff"
                                    });
        } else {
            $(".navbar").css("box-shadow", "0 0 0 0");
            $(".navbar").css({
                background: "none"
                                 });
             }
                                });
                            });