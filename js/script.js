/*$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:4
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });
});

*/
$(document).ready(function () {
    {
        $('.owl-carousel').owlCarousel({
            margin: 0,
            loop: true,
            responsiveClass: true,
            items: 1,
            nav: true,
            navText: ['<i class="fas fa-angle-double-left" aria-hidden="true"></i>',
                '<i class="fas fa-angle-double-right" aria-hidden="true"></i>'],
            responsive: {
                0:{
                    items:4
                },
                600:{
                    items:4
                },
                1000:{
                    items:4
                }
            }
        });
    }
});


