const swiper = new Swiper('.landing-swiper', {
    loop: true,
    effect: "fade",
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
})