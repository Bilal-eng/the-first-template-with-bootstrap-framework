$(document).ready(function(){

    $('.carousel').carousel({

        interval: 6000
    });

    // Show Color Option Div When Click On The Gear

    $('.gear-check').click(function(){

        $('.color-option').toggle(200);
    });

    // Change Theme Color On Click

    var colorLi = $('.color-option ul li');

    colorLi
        .eq(0).css('backgroundColor', '#E41B17').end()
        .eq(1).css('backgroundColor', '#E426D5').end()
        .eq(2).css('backgroundColor', '#009AFF').end()
        .eq(3).css('backgroundColor', '#FFF400').end()

    colorLi.click(function(){
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
    });
});