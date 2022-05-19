window.addEventListener('load', function () {

    let projects = document.querySelector('.projects');
    if (projects) {
        let sliders = document.querySelectorAll('.projects__slider'),
            navs = document.querySelectorAll('.projects__nav');

        new OzimnadTabs({
            selector: projects,
            btnSelector: '.projects__btn',
            tabSelector: '.projects__tab'
        });

        if (isMobile.phone || isMobile.tablet){
            // console.log('MOBILE');
        } else {
            sliders.forEach(function (i, x) {
                let swiper = i.querySelector('.projects__swiper'),
                    pag = i.querySelector('.projects__pag'),
                    nav = navs[x],
                    prev = nav.querySelector('.projects__prev'),
                    next = nav.querySelector('.projects__next');

                swiper = new Swiper(swiper, {
                    slidesPerView: 'auto',
                    speed: 500,
                    spaceBetween: 40,
                    loop: true,
                    centeredSlides: true,
                    grabCursor: true,
                    // initialSlide: 1,
                    slideActiveClass: 'active',
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    pagination: {
                        el: pag,
                        bulletClass: 'projects__bullet',
                        bulletActiveClass: 'active'
                    },
                });
            });
        }

    }
});