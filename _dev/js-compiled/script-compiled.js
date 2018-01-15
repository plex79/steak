'use strict';

(function ($, window, document, undefined) {

    'use strict';

    console.log(window);
    console.log($(window));

    var app = app || {};

    app.ready = {
        init: function init() {
            app.initialize.init();
        }
    };
    app.load = {
        init: function init() {
            app.initialize.preloader();
        }
    };

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function callback(box) {

            //let socialTitle = box.firstChild;
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
            //console.log(socialTitle);
            //console.log('----------------');
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });

    $(document).ready(app.ready.init);
    $(window).on('load', app.load.init);

    app.initialize = {

        init: function init() {
            wow.init();
            app.initialize.hamburg();
            app.initialize.bannerParalax();
            app.initialize.arrowScroll();
            app.initialize.animSocial();
            app.initialize.litery();
            app.initialize.slider();
        },

        preloader: function preloader() {
            console.log('zaladowano');
            $('#preloader--stan').fadeOut(100);
            $('#preloader').fadeOut(100);
            //$('body').delay(350).css({'overflow':'visible'});
        },
        hamburg: function hamburg() {
            var hamburger = $(".hamburger");
            var menuOverlay = $('.overlay');
            hamburger.on("click", function (e) {
                hamburger.toggleClass("is-active");
                // something more
                menuOverlay.toggleClass("open");
            });
        },
        bannerParalax: function bannerParalax() {
            // let movStr = 10;
            // let windowH = window.innerHeight;
            // let windowW = window.innerWidth;
            // let height = movStr / windowH;
            // let width = movStr / windowW;
            var divs = $('#maska');
            var slogan = $('.slogan');
            var social = $('.social');
            var arrow = $("#arrow-scroll");
            var header = $('header');
            // $("header").on('mousemove', function(e){
            //     let pageX = e.pageX - (windowW / 2);
            //     let pageY = e.pageY - (windowH / 2);
            //     let newvalueX = width * pageX * -1 - 25;
            //     let newvalueY = height * pageY * -1 - 50;
            //     //slogan.css("transform", "translate("+newvalueX+"% ,"+newvalueY+"%)");
            // });

            $(window).scroll(function () {
                var percent = $(window).scrollTop() / $(window).outerHeight();
                divs.css('opacity', 0 + percent);
                slogan.css('opacity', 1 - percent);
                social.css('opacity', 1 - percent);
                arrow.css('opacity', 1 - percent);
            });
        },
        arrowScroll: function arrowScroll() {
            var arrow = $("#arrow-scroll");
            function arrowUp() {
                arrow.animate({
                    bottom: "40px"
                }, 600).animate({
                    bottom: "20px"
                }, 570);
            }
            setInterval(arrowUp, 1000);
        },
        animSocial: function animSocial() {
            var socialTitle = $('.social .title');
            var socialline = $('.social .line');
            var socialFb = $('.social .fb');
            var socialInsta = $('.social .insta');
            socialInsta.hide();
            socialFb.hide();

            socialTitle.on('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function () {
                socialline.css('max-height', '8rem');
            });
            socialline.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                socialFb.fadeIn(function () {
                    socialInsta.fadeIn();
                });
            });
        },
        litery: function litery() {
            $('.jq-sec1').waypoint(function (direction) {
                if (direction == "down") {
                    $('.jq-sec1-a').addClass('animated bounceInLeft');
                }
            }, { offset: '50%;'
            });
        },
        slider: function slider() {
            $('.slider__leftArrow').on('click', function () {
                $('.akt--list').slick("slickPrev");
            });
            $('.slider__rightArrow').on('click', function () {
                $('.akt--list').slick("slickNext");
            });
            $('.akt--list').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                fade: true,
                asNavFor: '.slider-wrapper'
            });

            $('.slider-wrapper').slick({
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.akt--list',
                centerMode: true,
                centerPadding: '12%',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        dots: false
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                }]
            });
        }
    };
})(jQuery, window, document);
//# sourceMappingURL=script-compiled.js.map
