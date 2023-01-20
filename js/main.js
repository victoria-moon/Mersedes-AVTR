$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="images/ArrowLeft.svg" alt="" class="arrow arrow-left">',
        nextArrow: '<img src="images/ArrowRightsvg.svg" alt="" class="arrow arrow-right">',
        responsive: [
            {
                breakpoint:361,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    });
});