document.addEventListener('DOMContentLoaded', function () {
    'use strict';

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

    // Native Accordion Toggle (replaces bootstrap.min.js)
    document.querySelectorAll('.accordion-button').forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = this.getAttribute('data-bs-target');
            var targetContent = targetId ? document.querySelector(targetId) : null;
            var isExpanded = this.getAttribute('aria-expanded') === 'true';

            var parent = this.closest('.accordion');
            if (parent) {
                parent.querySelectorAll('.accordion-button').forEach(function (btn) {
                    btn.classList.add('collapsed');
                    btn.setAttribute('aria-expanded', 'false');
                });
                parent.querySelectorAll('.accordion-collapse').forEach(function (content) {
                    content.classList.remove('show');
                });
            }

            if (!isExpanded && targetContent) {
                this.classList.remove('collapsed');
                this.setAttribute('aria-expanded', 'true');
                targetContent.classList.add('show');
            }
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
