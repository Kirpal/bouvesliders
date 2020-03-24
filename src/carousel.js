function slider1() {
    var owl = jQuery('.owl-slider1').owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
        smartSpeed:500,
        items: 1
    });
    jQuery('.owl-slider1').children('.owl-dots').wrap('<div class="owl-nav-combined"></div>');
    jQuery('.owl-slider1 .owl-nav-combined').prepend('<div class="owl-prev owl-nav-icon">ᐸ</div>');
    jQuery('.owl-slider1 .owl-nav-combined').append('<div class="owl-next owl-nav-icon">ᐳ</div>');

    jQuery('.owl-slider1 .owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    jQuery('.owl-slider1 .owl-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
}
function slider2() {
    var owl = jQuery('.owl-slider2').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        smartSpeed:500,
        items: 1,
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });

    jQuery('.owl-slider2 .owl-item .slider-content').before('<div class="owl-prev owl-nav-icon">ᐸ</div>');
    jQuery('.owl-slider2 .owl-item .slider-content').after('<div class="owl-next owl-nav-icon">ᐳ</div>');

    jQuery('.owl-slider2 .owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    jQuery('.owl-slider2 .owl-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
}

jQuery('document').ready(function() {
    slider1();
    slider2();
});