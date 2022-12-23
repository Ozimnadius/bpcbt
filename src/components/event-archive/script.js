window.addEventListener('load', function (){
    new Swiper('.event-archive__swiper', {
        slidesPerView: 'auto',
        speed: 500,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
            nextEl: '.event-archive__next',
            prevEl: '.event-archive__prev',
        },
    });
});