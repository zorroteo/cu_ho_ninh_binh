jQuery(function ($) {

    'use strict';

    (function () {
        var windowWidth = $(window).width();
        if (windowWidth > 1000) {
            $(window).scroll(function () {
                var sT = $(this).scrollTop();
                if (sT >= 120) {
                    $('.homepage .navbar, .homepage-two.fixed-nav .navbar').addClass('sticky-nav')
                } else {
                    $('.homepage .navbar, .homepage-two.fixed-nav .navbar').removeClass('sticky-nav')
                };
            });
        } else {
            $('.homepage .navbar, .homepage-two.fixed-nav .navbar').removeClass('sticky-nav')
        };
        if (windowWidth > 1000) {
            $(window).scroll(function () {
                var sT = $(this).scrollTop();
                if (sT >= 120) {
                    $('.homepage #menubar, .homepage-two.fixed-nav #navigation').removeClass('container')
                    $('.homepage #menubar, .homepage-two.fixed-nav #navigation').addClass('container-fluid')
                } else {
                    $('.homepage #menubar, .homepage-two.fixed-nav #navigation').removeClass('container-fluid')
                    $('.homepage #menubar').addClass('container')
                }
            });
        } else {
            $('.homepage #menubar, .homepage-two.fixed-nav #navigation').removeClass('container-fluid')
        };

    }());



    /*==============================================================*/
    // # Date Time
    /*==============================================================*/

    (function () {
        var datetime = null,
        date = null;
        var update = function () {
            date = moment(new Date()).locale("vi");
            datetime.html(date.format('dddd, DD MMMM, YYYY'));
        };
        datetime = $('#date-time');
        update();
        setInterval(update, 1000);
    }());

    /*==============================================================*/
    // Magnific Popup
    /*==============================================================*/

    (function () {
        $('.image-link').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('.feature-image .image-link').magnificPopup({
            gallery: {
                enabled: false
            },
            type: 'image'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
        $('.video-link').magnificPopup({ type: 'iframe' });
    }());


});





