window.addEventListener('load', function (){
    let elem = document.querySelector('.article-more__swiper');
    if (elem) {
        new Swiper(elem, {
            slidesPerView: 'auto',
            speed: 500,
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            grabCursor: true,
            slideActiveClass: 'active',
            navigation: {
                nextEl: '.article-more__next',
                prevEl: '.article-more__prev',
            },

        });
    }
});