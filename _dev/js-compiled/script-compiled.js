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
            app.initialize.menu();
            app.initialize.hamburg();
            app.initialize.bannerParalax();
            app.initialize.arrowScroll();
            app.initialize.animSocial();
            app.initialize.litery();
            app.initialize.slider();
            app.initialize.mapWidth();
            app.initialize.supportMap();
            app.initialize.galeria();
        },

        menu: function menu() {
            var htmlBody = $('html, body');
            var hash = window.location.hash;
            if (hash != '') {
                htmlBody.animate({
                    scrollTop: $(hash).offset().top - 80
                }, 500);
            } else {
                htmlBody.animate({
                    scrollTop: $('header').offset().top
                }, 500);
            }

            // menu plus history state ------------------------------
            var menu = $('#menu-overlay nav ul li a');

            menu.on('click', function (e) {
                e.preventDefault();

                var element = $(this).attr('href');

                var hamburger = $(".hamburger.is-active");
                var menuOverlay = $('.overlay.overlay-slidedown');
                hamburger.removeClass("is-active");
                menuOverlay.removeClass("open");

                //hash w adresie url
                if (history.pushState) {
                    history.pushState(null, null, element);
                } else {
                    window.location.hash = element;
                }
                // hash w url end

                htmlBody.animate({
                    scrollTop: $(element).offset().top - 80
                }, 500);
            });
            // strzalka wstecz w przegladarce
            window.onpopstate = function (evt) {
                var hash = window.location.hash;
                if (hash != '') {
                    htmlBody.animate({
                        scrollTop: $(hash).offset().top - 80
                    }, 500);
                } else {
                    htmlBody.animate({
                        scrollTop: $('header').offset().top
                    }, 500);
                }
            };
            // menu plus history state end ---------------------------
        },
        preloader: function preloader() {
            console.log('zaladowano');
            $("#gal-lokal").click();
            $("#gal-lokal").addClass("active");

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
            var divs = $('#maska');
            var slogan = $('.slogan');
            var social = $('.social');
            var arrow = $("#arrow-scroll");
            var header = $('header');

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
            }, { offset: '80%;'
            });

            $('.jq-sec1').waypoint(function (direction) {
                if (direction == "down") {
                    $('.jq-news-text').addClass('animated fadeIn');
                }
            }, { offset: '50%;'
            });

            $('.jq-sec2').waypoint(function (direction) {
                if (direction == "down") {
                    $('.jq-sec2-o').addClass('animated bounceInRight');
                }
            }, { offset: '80%;'
            });

            $('.jq-sec2-img').waypoint(function (direction) {
                if (direction == "down") {
                    $('.smiglo').addClass('animated slideInLeft');
                }
            }, { offset: '60%;'
            });

            $('.jq-sec2-img').waypoint(function (direction) {
                if (direction == "down") {
                    $('.mieso').addClass('animated slideInRight');
                }
            }, { offset: '80%;'
            });

            $('.jq-sec3').waypoint(function (direction) {
                if (direction == "down") {
                    $('.jq-sec3-m').addClass('animated bounceInLeft');
                }
            }, { offset: '80%;'
            });

            $('.jq-sec4').waypoint(function (direction) {
                if (direction == "down") {
                    $('.jq-sec4-g').addClass('animated bounceInRight');
                }
            }, { offset: '80%;'
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
                centerPadding: '1%',
                responsive: [{
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                        infinite: true,
                        arrows: false,
                        dots: false
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        arrows: false,
                        dots: false
                    }
                }, {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        arrows: false,
                        dots: false
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                }]
            });

            //slider menu
            $('.slider__menu-leftArrow').on('click', function () {
                $('.menu-item').slick("slickPrev");
            });
            $('.slider__menu-rightArrow').on('click', function () {
                $('.menu-item').slick("slickNext");
            });

            $('.slider-menu .menu-item').slick({
                arrows: false,
                dots: false
            });
        },
        mapWidth: function mapWidth() {
            var contactWrapper = $('.contactWrapper');
            var mapWrapper = $('.mapWrapper');

            function calculateMapWidth() {
                var windowWidth = $(window).width();
                if ($(window).width() >= 992) {
                    mapWrapper.css('min-width', windowWidth - contactWrapper.outerWidth());
                } else {
                    mapWrapper.css('min-width', 'inherit');
                }
            }

            calculateMapWidth();

            $(window).on('resize', function () {
                calculateMapWidth();
            });
        },
        supportMap: function supportMap() {
            $().ready(function () {

                var styles = [{
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [{
                        "color": "#FFFFFF"
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#303030"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#FFFFFF"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#808080"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [{
                        "color": "#FFFFFF"
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#303030"
                    }]
                }];
                var myLatlng = new google.maps.LatLng(54.417138, 18.559109);
                var posLatlng = new google.maps.LatLng(54.417138, 18.559109);
                var mapOptions = {
                    zoom: 16,
                    center: posLatlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: !0,
                    zoomControl: !0,
                    disableDoubleClickZoom: 0,
                    panControl: !1,
                    scrollwheel: !1,
                    mapTypeControl: !1,
                    scaleControl: !0,
                    streetViewControl: !1,
                    overviewMapControl: !1,
                    zoomControlOptions: { style: google.maps.ZoomControlStyle.LARGE, position: google.maps.ControlPosition.LEFT_CENTER } };

                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    icon: "../img/marker.png",
                    title: "Steak Master"
                });

                var center = map.getCenter();
                google.maps.event.addDomListener(window, 'resize', function () {
                    map.setCenter(center);
                });

                map.setOptions({ styles: styles });
            });
        },
        galeria: function galeria() {
            console.log('gggg');
            $(".filter-button").click(function () {
                var value = $(this).attr('data-filter');

                $(".filter-button").removeClass("active");
                $(this).addClass("active");

                if (value == "all") {
                    //$('.filter').removeClass('hidden');
                    $('.filter').show('2000');
                } else {
                    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                    $(".filter").not('.' + value).hide('3000');
                    $('.filter').filter('.' + value).show('3000');
                }
            });
        }
    };
})(jQuery, window, document);
//# sourceMappingURL=script-compiled.js.map
