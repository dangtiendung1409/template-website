$(function () {
        $(".navbar-icon .icon-search").click(function () {
                $(".navbar .search").toggleClass("active");
        });
        $(".feedback .slide-inner").slick({
                infinite: true,
                arrows: false,
                dots: true,
        });
        $(".trademark .slide-inner").slick({
                slidesToShow: 3,
                infinite: true,
                arrows: false,
                dots: false,
                autoplay: true,
        });
        $(".slide").slick({
                autoplay: true,
                fade: true,
                dots: true,
        });

        $(window).scroll(function () {
                if ($(window).scrollTop() > 50) {
                        $(".navbar").addClass("active");
                } else {
                        $(".navbar").removeClass("active");
                }
        });
});
