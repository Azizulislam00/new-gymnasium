$(document).ready(function () {

    $('.banner-slider').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 1500,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        dots: true,
    });


    $('.venobox').venobox({
        bgcolor: '#242121',
        closeColor: '#e23e38',
        spinColor: '#e23e38',
        spinner: 'three-bounce',
    });
    //================about video  js end
    $('.our-team-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        }]
    });
    //================our team slider end
    $('.test-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 2,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }]
    });

    //================testimonial slider end

    $('.counter').counterUp({
        delay: 20,
        time: 1500
    });
    //================counter slider end
    $('.brand-slider').slick({
        slidesToScroll: 2,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prev-btn"</i>',
        nextArrow: '<i class="fas fa-chevron-right next-btn"</i>',
        dots: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });
    //================brand slider end
    //================color plate start
    $('.color-pointer .color-icon').on('click', function () {
        $('.color-pointer').toggleClass('color-pointer-pos');
    });
    $('.color-pointer ul .default').on('click', function () {
        $('body').removeClass('color1').removeClass('color2').removeClass('color3').removeClass('color4');
    });
    $('.color-pointer ul .color1').on('click', function () {
        $('body').addClass('color1').removeClass('color2').removeClass('color3').removeClass('color4').removeClass('default');
    });
    $('.color-pointer ul .color2').on('click', function () {
        $('body').addClass('color2').removeClass('color1').removeClass('color3').removeClass('color4').removeClass('default');
    });
    $('.color-pointer ul .color3').on('click', function () {
        $('body').addClass('color3').removeClass('color1').removeClass('color2').removeClass('color4').removeClass('default');
    });
    $('.color-pointer ul .color4').on('click', function () {
        $('body').addClass('color4').removeClass('color1').removeClass('color2').removeClass('color3').removeClass('default');
    });

    //=================color plate end

    //scroll-spy & Smooth-scrolling start
    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 80
        }, 1000);
    });
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionhead = $(this.hash).offset().top - 85;
            if (scrollTop >= sectionhead) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    //scroll-spy & Smooth-scrolling start
    //back to top button start;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 50) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });
    //back to top button end
});