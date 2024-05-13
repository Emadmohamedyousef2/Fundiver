var fundiver = {};


fundiver.Banner = function() {
    if ($("body").hasClass("rtl") == true) {

        var slider = $("#bannerSlider").lightSlider({

            rtl: true,
            item: 1,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 0,
            controls: false,
            useCss: true,
            auto: true,
            mode: "fade",
            pager: true,
            loop: true,
            // prevHtml: '<span><i class="ico-prev"></i></span>',
            // nextHtml: '<span><i class="ico-next"></i></span>',

        });
        $(".lSPrev").click(function() {
            slider.goToPrevSlide();
        })

        $(".lSNext").click(function() {
            slider.goToNextSlide();
        })


    } else {
        var slider = $("#bannerSlider").lightSlider({

            item: 1,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 0,
            controls: false,
            useCss: true,
            pager: true,
            loop: true,
            rtl: "false",
            mode: "fade",
            auto: true,
            // prevHtml: '<span><i class="ico-prev"></i></span>',
            // nextHtml: '<span><i class="ico-next"></i></span>',


        });
        $(".lSPrev").click(function() {
            slider.goToPrevSlide();
        })

        $(".lSNext").click(function() {
            slider.goToNextSlide();
        })

    }
    let totalSlides = $('#bannerSlider li').length;

    function createMenuItem(name) {
        let a = document.createElement('a');
        a.textContent = name;
        return a;
    }
    // get the ul#userprofile
    const userprofile = document.querySelector('#sliderNumbers');
    // add the user profile items
    for (let i = 1; i <= totalSlides; i++) {
        userprofile.appendChild(createMenuItem("0" + i));

    }
    $("#sliderNumbers a:first-child").addClass("active");

    $("#sliderNumbers a").click(function() {

        var slide_n = ($('#sliderNumbers a').index(this) + 1);

        $("#sliderNumbers a").removeClass("active");



        slider.goToSlide(slide_n);
        $(this).addClass("active");

    });

};



fundiver.initialize = function() {
    fundiver.Banner();


};

jQuery(document).ready(function() {
    fundiver.initialize();
    $(function() {
        //caches a jQuery object containing the header element
        var header = $("header");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("darkHeader");
            } else {
                header.removeClass("darkHeader");
            }
        });
    });

});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();

    }
});


$(".scrolltop").on("click", function() {
    $("body,html").animate({
        scrollTop: 2
    }, 1000)
})

$(".close-btn").on("click", function(e) {
    e.preventDefault();
    $(".modal").modal("hide");
    $('.modal').data("modal", null);
});

$("#side-menu-btn").click(function() {

    $(".menu").toggleClass("show");
    $(".modaldrop-menu").fadeIn();
});


$(".close-side-menu a").click(function() {
    $(".menu").toggleClass("show");
    $("#side-menu-btn").toggleClass("show");
    $(".modaldrop-menu").fadeOut();
});
$(".modaldrop-menu").click(function() {
    $(".menu").removeClass("show");
    $(this).fadeOut();
});
$('.menu li a').click(function(e) {

    var targetHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(targetHref).offset().top
    }, 500);

    e.preventDefault();
});
