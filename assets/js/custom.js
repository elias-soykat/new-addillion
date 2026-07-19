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

    jQuery('.dropdown-icon').on('click', function () {
        jQuery(this).toggleClass('active').next('ul').slideToggle();
        jQuery(this).parent().siblings().children('ul').slideUp();
        jQuery(this).parent().siblings().children('.active').removeClass('active');
    });

    // sticky header
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header.header-area2, .header5');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 0);
        }
    });

    // Native counter-up (replaces jquery.counterup + waypoints)
    function animateCounter(el) {
        var target = parseInt(el.textContent, 10);
        var duration = 1000;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            el.textContent = Math.floor(progress * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(step);
    }

    var counterObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 },
    );

    document.querySelectorAll('.counter').forEach(function (el) {
        counterObserver.observe(el);
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

    // Native scroll-reveal (replaces WOW.js)
    jQuery(window).on('load', function () {
        var revealObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var el = entry.target;
                        var delay = el.getAttribute('data-wow-delay') || '0ms';
                        var delayMs = parseInt(delay, 10) || 0;
                        setTimeout(function () {
                            el.classList.add('animated');
                        }, delayMs);
                        revealObserver.unobserve(el);
                    }
                });
            },
            { threshold: 0.1 },
        );

        document.querySelectorAll('.wow').forEach(function (el) {
            revealObserver.observe(el);
        });
    });

    // =======================================================================================
    // Magic cursor (no effect on small screens!)
    // =======================================================================================

    if ($('body').not('.is-mobile').hasClass('tt-magic-cursor')) {
        if ($(window).width() > 1024) {
            gsap.config({
                nullTargetWarn: false,
                trialWarn: false,
            });

            $('.magnetic-item').wrap('<div class="magnetic-wrap"></div>');

            if ($('a.magnetic-item').length) {
                $('a.magnetic-item').addClass('not-hide-cursor');
            }

            var $mouse = { x: 0, y: 0 }; // Cursor position
            var $pos = { x: 0, y: 0 }; // Cursor position
            var $ratio = 0.15; // delay follow cursor
            var $active = false;
            var $ball = $('#ball');

            var $ballWidth = 36; // Ball default width
            var $ballHeight = 36; // Ball default height
            var $ballOpacity = 0.5; // Ball default opacity
            var $ballBorderWidth = 2; // Ball default border width

            gsap.set($ball, {
                // scale from middle and style ball
                xPercent: -50,
                yPercent: -50,
                width: $ballWidth,
                height: $ballHeight,
                borderWidth: $ballBorderWidth,
                opacity: $ballOpacity,
            });

            document.addEventListener('mousemove', mouseMove);

            function mouseMove(e) {
                $mouse.x = e.clientX;
                $mouse.y = e.clientY;
            }

            gsap.ticker.add(updatePosition);

            function updatePosition() {
                if (!$active) {
                    $pos.x += ($mouse.x - $pos.x) * $ratio;
                    $pos.y += ($mouse.y - $pos.y) * $ratio;

                    gsap.set($ball, { x: $pos.x, y: $pos.y });
                }
            }

            $('.magnetic-wrap').mousemove(function (e) {
                parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
                callParallax(e, this);
            });

            function callParallax(e, parent) {
                parallaxIt(e, parent, parent.querySelector('.magnetic-item'), 25); // magnetic area = higher number is more attractive
            }

            function parallaxIt(e, parent, target, movement) {
                var boundingRect = parent.getBoundingClientRect();
                var relX = e.clientX - boundingRect.left;
                var relY = e.clientY - boundingRect.top;

                gsap.to(target, {
                    duration: 0.3,
                    x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
                    y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
                    ease: Power2.easeOut,
                });
            }

            function parallaxCursor(e, parent, movement) {
                var rect = parent.getBoundingClientRect();
                var relX = e.clientX - rect.left;
                var relY = e.clientY - rect.top;
                $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
                $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
                gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
            }

            // Magic cursor behavior
            // ======================

            // Magnetic item hover.
            $('.magnetic-wrap')
                .on('mouseenter mouseover', function () {
                    $ball.addClass('magnetic-active');
                    gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
                    $active = true;
                })
                .on('mouseleave', function () {
                    $ball.removeClass('magnetic-active');
                    gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
                    gsap.to(this.querySelector('.magnetic-item'), { duration: 0.3, x: 0, y: 0, clearProps: 'all' });
                    $active = false;
                });

            // Alternative cursor style on hover.
            $('.cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a')
                .not('.magnetic-item') // omit from selection.
                .on('mouseenter', function () {
                    gsap.to($ball, {
                        duration: 0.3,
                        borderWidth: 0,
                        opacity: 0.2,
                        backgroundColor: '#CCC',
                        width: '100px',
                        height: '100px',
                    });
                })
                .on('mouseleave', function () {
                    gsap.to($ball, {
                        duration: 0.3,
                        borderWidth: $ballBorderWidth,
                        opacity: $ballOpacity,
                        backgroundColor: 'transparent',
                        width: $ballWidth,
                        height: $ballHeight,
                        clearProps: 'backgroundColor',
                    });
                });

            // Overlay menu caret hover.
            $('.tt-ol-submenu-caret-wrap .magnetic-wrap')
                .on('mouseenter', function () {
                    gsap.to($ball, { duration: 0.3, scale: 0.6, borderWidth: 3 });
                })
                .on('mouseleave', function () {
                    gsap.to($ball, { duration: 0.3, scale: 1, borderWidth: $ballBorderWidth });
                });

            // Cursor view on hover (data attribute "data-cursor="...").
            $('[data-cursor]').each(function () {
                $(this)
                    .on('mouseenter', function () {
                        $ball.addClass('ball-view').append('<div class="ball-view-inner"></div>');
                        $('.ball-view-inner').append($(this).attr('data-cursor'));
                        gsap.to($ball, {
                            duration: 0.3,
                            yPercent: -75,
                            width: 95,
                            height: 95,
                            opacity: 1,
                            borderWidth: 0,
                        });
                        gsap.to('.ball-view-inner', { duration: 0.3, scale: 1, autoAlpha: 1 });
                    })
                    .on('mouseleave', function () {
                        gsap.to($ball, {
                            duration: 0.3,
                            yPercent: -50,
                            width: $ballWidth,
                            height: $ballHeight,
                            opacity: $ballOpacity,
                            borderWidth: $ballBorderWidth,
                        });
                        $ball.removeClass('ball-view').find('.ball-view-inner').remove();
                    });
                $(this).addClass('not-hide-cursor');
            });

            // Cursor drag on hover (class "cursor-drag"). For Swiper sliders.
            $('.swiper').each(function () {
                if ($(this).parent().attr('data-simulate-touch') === 'true') {
                    if ($(this).parent().hasClass('cursor-drag')) {
                        $(this)
                            .on('mouseenter', function () {
                                $ball.append('<div class="ball-drag"></div>');
                                gsap.to($ball, { duration: 0.3, width: 60, height: 60, opacity: 1 });
                            })
                            .on('mouseleave', function () {
                                $ball.find('.ball-drag').remove();
                                gsap.to($ball, {
                                    duration: 0.3,
                                    width: $ballWidth,
                                    height: $ballHeight,
                                    opacity: $ballOpacity,
                                });
                            });
                        $(this).addClass('not-hide-cursor');

                        // Ignore "data-cursor" on hover.
                        $(this)
                            .find('[data-cursor]')
                            .on('mouseenter mouseover', function () {
                                $ball.find('.ball-drag').remove();
                                return false;
                            })
                            .on('mouseleave', function () {
                                $ball.append('<div class="ball-drag"></div>');
                                gsap.to($ball, { duration: 0.3, width: 60, height: 60, opacity: 1 });
                            });
                    }
                }
            });

            // Cursor drag on mouse down / click and hold effect (class "cursor-drag-mouse-down"). For Swiper sliders.
            $('.swiper').each(function () {
                if ($(this).parent().attr('data-simulate-touch') === 'true') {
                    if ($(this).parent().hasClass('cursor-drag-mouse-down')) {
                        $(this)
                            .on('mousedown pointerdown', function (e) {
                                if (e.which === 1) {
                                    // Affects the left mouse button only!
                                    gsap.to($ball, { duration: 0.2, width: 60, height: 60, opacity: 1 });
                                    $ball.append('<div class="ball-drag"></div>');
                                }
                            })
                            .on('mouseup pointerup', function () {
                                $ball.find('.ball-drag').remove();
                                if (!$(this).find('[data-cursor]:hover').length) {
                                    gsap.to($ball, {
                                        duration: 0.2,
                                        width: $ballWidth,
                                        height: $ballHeight,
                                        opacity: $ballOpacity,
                                    });
                                }
                            })
                            .on('mouseleave', function () {
                                $ball.find('.ball-drag').remove();
                                gsap.to($ball, {
                                    duration: 0.2,
                                    width: $ballWidth,
                                    height: $ballHeight,
                                    opacity: $ballOpacity,
                                });
                            });

                        // Ignore "data-cursor" on mousedown.
                        $(this)
                            .find('[data-cursor]')
                            .on('mousedown pointerdown', function () {
                                return false;
                            });

                        // Ignore "data-cursor" on hover.
                        $(this)
                            .find('[data-cursor]')
                            .on('mouseenter mouseover', function () {
                                $ball.find('.ball-drag').remove();
                                return false;
                            });
                    }
                }
            });

            // Cursor close on hover.
            $('.cursor-close').each(function () {
                $(this).addClass('ball-close-enabled');
                $(this)
                    .on('mouseenter', function () {
                        $ball.addClass('ball-close-enabled');
                        $ball.append('<div class="ball-close">Close</div>');
                        gsap.to($ball, { duration: 0.3, yPercent: -75, width: 80, height: 80, opacity: 1 });
                        gsap.from('.ball-close', { duration: 0.3, scale: 0, autoAlpha: 0 });
                    })
                    .on('mouseleave click', function () {
                        $ball.removeClass('ball-close-enabled');
                        gsap.to($ball, {
                            duration: 0.3,
                            yPercent: -50,
                            width: $ballWidth,
                            height: $ballHeight,
                            opacity: $ballOpacity,
                        });
                        $ball.find('.ball-close').remove();
                    });

                // Hover on "cursor-close" inner elements.
                $('.cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor')
                    .not('.not-hide-cursor') // omit from selection (class "not-hide-cursor" is for global use).
                    .on('mouseenter', function () {
                        $ball.removeClass('ball-close-enabled');
                    })
                    .on('mouseleave', function () {
                        $ball.addClass('ball-close-enabled');
                    });
            });

            // Blog interactive title link hover.
            $('.blog-interactive-item').each(function () {
                var $biItem = $(this);
                if ($biItem.find('.bi-item-image').length) {
                    $biItem
                        .find('.bi-item-title a')
                        .on('mouseenter mouseover', function () {
                            $('#magic-cursor').addClass('blog-interactive-hover-on');
                            $biItem.find('.bi-item-image').appendTo($ball);
                            gsap.to($ball, { duration: 0.3, width: '20vw', height: '20vw', opacity: 1 });
                        })
                        .on('mouseleave', function () {
                            $('#magic-cursor').removeClass('blog-interactive-hover-on');
                            $ball.find('.bi-item-image').appendTo($biItem);
                            gsap.to($ball, {
                                duration: 0.3,
                                width: $ballWidth,
                                height: $ballHeight,
                                opacity: $ballOpacity,
                            });
                        });
                    $biItem.find('.bi-item-title a').addClass('not-hide-cursor');
                    $biItem.addClass('bi-item-image-on');
                }
            });

            // ================================================================
            // Scroll between anchors
            // ================================================================

            $('a[href^="#"]')
                .not('[href$="#"]') // omit from selection
                .not('[href$="#0"]') // omit from selection
                .on('click', function () {
                    var target = this.hash;
                    var $offset = 0;

                    // If fixed header position enabled.
                    if ($('#tt-header').hasClass('tt-header-fixed')) {
                        $offset = $('#tt-header').height();
                    }

                    // You can use data attribute (for example: data-offset="100") to set top offset in HTML markup if needed.
                    if ($(this).data('offset') != undefined) $offset = $(this).data('offset');

                    var topY = $(target).offset().top - $('body').offset().top - $offset;
                    $('html,body').animate({ scrollTop: topY }, 800);
                    return false;
                });

            // ================================================================
            // Scroll to top
            // ================================================================

            $('.scroll-to-top').on('click', function () {
                $('html,body').animate({ scrollTop: 0 }, 800);
                return false;
            });

            // Show/hide magic cursor
            // =======================

            // Hide on hover.
            $('a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor') // class "hide-cursor" is for global use.
                .not('.not-hide-cursor') // omit from selection (class "not-hide-cursor" is for global use).
                .not('.cursor-alter') // omit from selection
                .not('.tt-main-menu-list > li > a') // omit from selection
                .not('.tt-main-menu-list > li > .tt-submenu-trigger > a') // omit from selection
                .on('mouseenter', function () {
                    gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
                })
                .on('mouseleave', function () {
                    gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
                });

            // Hide on click.
            $('a')
                .not('[target="_blank"]') // omit from selection.
                .not('[href^="#"]') // omit from selection.
                .not('[href^="mailto"]') // omit from selection.
                .not('[href^="tel"]') // omit from selection.
                .not('.lg-trigger') // omit from selection.
                .not('.tt-btn-disabled') // omit from selection.
                .on('click', function () {
                    gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
                });

            // Show/hide on document leave/enter.
            $(document)
                .on('mouseleave', function () {
                    gsap.to('#magic-cursor', { duration: 0.3, autoAlpha: 0 });
                })
                .on('mouseenter', function () {
                    gsap.to('#magic-cursor', { duration: 0.3, autoAlpha: 1 });
                });

            // Show as the mouse moves.
            $(document).mousemove(function () {
                gsap.to('#magic-cursor', { duration: 0.3, autoAlpha: 1 });
            });
        }
    }

    document
        .querySelector('.sidebar-button')
        .addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show-menu'));
})(jQuery);
