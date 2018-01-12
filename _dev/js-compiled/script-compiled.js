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

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function callback(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });

    $(document).ready(app.ready.init);

    app.initialize = {

        init: function init() {
            wow.init();
            app.initialize.hamburg();
            app.initialize.bannerParalax();
            app.initialize.arrowScroll();
        },

        hamburg: function hamburg() {
            var $hamburger = $(".hamburger");
            $hamburger.on("click", function (e) {
                $hamburger.toggleClass("is-active");
                // something more
            });
        },
        bannerParalax: function bannerParalax() {
            // let movStr = 10;
            // let windowH = window.innerHeight;
            // let windowW = window.innerWidth;
            // let height = movStr / windowH;
            // let width = movStr / windowW;
            var divs = $('#maska');
            // let slogan = $('.slogan');

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
                //$('.slogan').css('opacity', 1 - percent);
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
        }
    };
})(jQuery, window, document);
//# sourceMappingURL=script-compiled.js.map
