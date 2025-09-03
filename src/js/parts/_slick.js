$(function() {
    $('.slider_main').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: false
    });

    $('.personal_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        arrows: true,
        variableWidth: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    variableWidth: false,
                    fade: true,
                    dots: true
                }
            }
        ]
    });

    $('.photo_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    fade: true,
                    dots: true
                }
            }
        ]
    });
    $('.blog_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.feedback-short').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.simple_slider').slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centermode: false,
        speed: 300,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.patient-slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 3,
        centermode: false,
        speed: 300,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    var currentSlide = $('.slider_main').slick('slickCurrentSlide');

    $('.slider_main').on('afterChange', function(){
        console.log('piu');
        $('.slider_title').addClass('title_animate');
        setTimeout(function() {
            $('.slider_desc').addClass('desc_animate');
            $('.bt_slide').addClass('bt_animate');
        },500);

    });

    $('.slider_main').on('beforeChange', function(){
        setTimeout(function() {
            $('.slider_title').removeClass('title_animate');
            $('.slider_desc').removeClass('desc_animate');
            $('.bt_slide').removeClass('bt_animate');
        },100);
    });

    $('.slider-for').init( function(){
        $('.slider_title').addClass('title_animate');
        setTimeout(function() {
            $('.slider_desc').addClass('desc_animate');
            $('.bt_slide').addClass('bt_animate');
        },500);
    });
});