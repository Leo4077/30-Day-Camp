// Swiper
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,       
        slidesPerGroup: 1,      // 一次滑動 1 個
        spaceBetween: 24,       // 每個項目間距
        loop: false,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
            disabledClass: 'swiper-button-disabled'
        },
        // RWD
        breakpoints: {
            1600: {
                slidesPerView: 3,// 當 ≥1650px 時顯示 3 個
            },
            768: {
                slidesPerView: 2,// 當 ≥1200px 時顯示 2 個
            }
        }
    });
});