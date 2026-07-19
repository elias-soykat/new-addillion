document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Preloader fade-out
    window.addEventListener('load', function () {
        var preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.transition = 'opacity 0.6s ease';
            preloader.style.opacity = '0';
            setTimeout(function () {
                preloader.style.display = 'none';
            }, 600);
        }
    });

    // Sidebar toggle
    document.querySelectorAll('.sidebar-btn2').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var sidebar = document.querySelector('.header-sidebar');
            if (sidebar) sidebar.classList.add('slide');
        });
    });

    document.querySelectorAll('.close-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var sidebar = document.querySelector('.header-sidebar');
            if (sidebar) sidebar.classList.remove('slide');
        });
    });

    document.querySelectorAll('.sidebar-button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            var mainMenu = document.querySelector('.main-menu');
            if (mainMenu) mainMenu.classList.toggle('show-menu');
        });
    });

    // Sticky header & menu
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header.header-area2, .header5');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 0);
        }
        var posTop = document.querySelector('.position_top');
        if (posTop) {
            posTop.classList.toggle('sticky', window.scrollY > 200);
        }
    });

    // Active menu highlighting
    var currentLocation = window.location.href;
    document.querySelectorAll('ul li a').forEach(function (menuItem) {
        if (menuItem.href === currentLocation) {
            menuItem.classList.add('active');
        }
    });

    // Home5 Banner slider
    if (document.querySelector('.banner5-slider')) {
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
    }

    // Home5 Testimonial slider
    if (document.querySelector('.home5-testimonial-slider')) {
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
    }
});
