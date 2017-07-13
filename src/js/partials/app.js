$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        draggable: false,
        fade: true,
        speed: 1000
    });

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $(slick.$slides).removeClass('is-animating');
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $(slick.$slides.get(currentSlide)).addClass('is-animating');
    });

    $('.reviews__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        speed: 1000,
        arrows: false,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });

    var show = true;
    var countbox = "#counts";
    var todayCount = $('#todayCount');
    var yestardayCount = $('#yestardayCount');
    var weekCount = $('#weekCount');
    $(window).on("scroll load resize", function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();

        if(w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 1200,
                from: 0
            });

            show = false;
        }
    });

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
    todayCount.html(randomInteger(10, 30));
    yestardayCount.html(randomInteger(20, 40));
    weekCount.html(randomInteger(200, 300));

    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });

    // browser window scroll
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
});
