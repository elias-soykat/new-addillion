(function ($) {
    'use strict';

    // Preloader
    jQuery(window).on('load', function () {
        $('.preloader').delay(1600).fadeOut('slow');
    });

    // sidebar
    $('.sidebar-btn2').on('click', function () {
        $('.header-sidebar').addClass('slide');
    });
    $('.close-btn').on('click', function () {
        $('.header-sidebar').removeClass('slide');
    });

    // sticky header
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header.header-area2, .header5');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 0);
        }
    });

    $('.sidebar-button').click(function () {
        $(this).toggleClass('active');
    });

    // Active menu
    var currentLocation = location.href;
    var menuItems = document.querySelectorAll('ul li a');
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].className = 'active';
        }
    }

    // sticky menu
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.position_top').addClass('sticky');
        } else {
            $('.position_top').removeClass('sticky');
        }
    });

    // Home5 Banner slider
    new Swiper('.banner5-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 3000,
        effect: 'fade',
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        fadeEffect: {
            crossFade: true,
        },
    });

    // Home5 Testimonial slider
    new Swiper('.home5-testimonial-slider', {
        loop: true,
        spaceBetween: 0,
        speed: 2000,
        centeredSlides: true,
        navigation: {
            nextEl: '.nextbtn3',
            prevEl: '.prevbtn3',
        },
        autoplay: {
            delay: 5000,
        },
    });

    document
        .querySelector('.sidebar-button')
        .addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show-menu'));
})(jQuery);
