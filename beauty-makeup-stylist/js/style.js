function backtop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}
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
