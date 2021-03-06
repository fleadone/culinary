$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        pagination : false,
        responsive:{
            0:{
                items:5
            },
            600:{
                items:5
            },
            1000:{
                items:5,
            }
        }
    })
    $('.owl-item').css('z-index', '1');
    $('.owl-nav').css('z-index', '1');
    $('.owl-dots').css('z-index', '2');
    $('.owl-item').mouseenter(function () { 
        $(this).css('z-index', '2');
    });
    $('.owl-item').mouseleave(function () { 
        $(this).css('z-index', '1');
    });
    $(".gallery_item").slice(0, 8).show();
    $('.gallery_button').on('click', function (e) {
        e.preventDefault();
        $('.gallery_item:hidden').slice(0, 4).slideDown();
        if ($('.gallery_item:hidden').length == 0) {
            $('.gallery_button').fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
    $('.gallery_item_hover_button').on('click', function(e) {
        e.preventDefault();
        let name = $(this).parent().parent().parent();
        $('.gallery_popup_title').text(name.find('.gallery_item_info>h3').text());
        $('.gallery_popup_info_img>img').attr('src', name.find('.gallery_item_img>img').attr('src'));
        $('.gallery_popup').fadeIn();
    });
    $('.gallery_popup_close').on('click', function(e){
        e.preventDefault();
        $('.gallery_popup').fadeOut();
    })
    $('.comments_slide').slick({
        dots:true,
    });
    $('.header_burger_menu').click(function(){
        $(this).toggleClass('open');
        $('.navigation').slideToggle();
	});
});
// $(window).resize(function(){
//     location.reload();
// });
