(function ($) {
    "use strict";
    // header sticky add class js
    $('.drdt_sticky_section').each(function( e ){
        var top = this.offsetTop;
        $(this).attr('data-topset', top);
    });

    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop();  
        $('.drdt_sticky_section').each(function(){
            var top = $(this).data('topset');
            if( window_top > top){
                $(this).addClass('drdt_sticky_fixed');
            } else {
                $(this).removeClass('drdt_sticky_fixed');
            }
        });

    });

}(jQuery));