const blogSwiper = new Swiper('.blog-swiper', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 3,
    watchOverflow: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});