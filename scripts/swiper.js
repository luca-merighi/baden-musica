const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    speed: 400,
    slidesPerView: 1,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: false,
    keyboard: true
})