$(function () {
        $(".navbar-icon .icon-search").click(function () {
                $(".navbar .search").toggleClass("active");
        });
        $(".feed_back .slide-inner").slick({
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

        $(window).scroll(function () {
                if ($(window).scrollTop() > 50) {
                        $(".navbar").addClass("active");
                } else {
                        $(".navbar").removeClass("active");
                }
        });
});
var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
        },
        loop: true,
        autoplay: {
                delay: 500,
                disableOnInteraction: false,
        },
});
