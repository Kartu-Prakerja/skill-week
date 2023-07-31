// carousel for home
$(document).ready(function() {
    $('#courseCarousel').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                margin: 16
            },
            600:{
                items:3,
                margin: 16
            },
            1000:{
                items:4
            }
        }
    });

    $('#coworkingCarousel').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                margin: 0
            }
        }
    })
);
/// AOS init
AOS.init();

// position for wisepops
(function(w, i, s, e) {
    window[w] = window[w] || function() {
        (window[w].q = window[w].q || []).push(arguments)
    };
    window[w].l = Date.now();
    s = document.createElement('script');
    e = document.getElementsByTagName('script')[0];
    s.defer = 1;
    s.src = i;
    e.parentNode.insertBefore(s, e)
})('wisepops', 'https://wisepops.net/loader.js?v=2&h=iTmgynBRtt');