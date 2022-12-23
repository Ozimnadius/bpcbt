//USER

//COMPONENTS


// common.js
const jsTools = {
    getNumber: function (str) {
        return parseInt(str.replace(/[^\d]/g, ''));
    },
    getWindowWidth: function () {
        return document.documentElement.clientWidth;
    },
    getNumberFormat: function (number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ",";
        }
        if (thousands_sep == undefined) {
            thousands_sep = ".";
        }
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
        return km + kw + kd;
    }
};

const media = {
    mobile: window.matchMedia("(max-width: 767.98px)"),

}

window.addEventListener("load", function () {

    $('.input[type="tel"]').inputmask("+7(999)999-99-99");

    setMainOffset();
    window.addEventListener('resize', setMainOffset);

});

function setMainOffset() {
    let fullW = document.body.clientWidth;
    let containerW = document.querySelectorAll('.container')[1].clientWidth - 40;
    document.body.style.setProperty('--main-offset', `${(fullW - containerW) / 2}px`);
}

window.addEventListener('load', function () {
    new Events();
});

class Events {
    constructor() {

        this.events = {
            click: {
                openMenu: this.openMenu,
                closeMenu: this.closeMenu,
                openForm: this.openForm,
                closeForm: this.closeForm,
                scrollTo: this.scrollTo,
            },
            submit: {
                sendForm: this.sendForm
            }
        }

        this.init();
    }

    init() {

        for (let key in this.events) {
            let items = this.events[key];

            document.querySelector('body').addEventListener(key, (e) => {
                for (let name in items) {
                    let target = e.target.closest(`[data-event="${name}"]`);
                    if (target !== null) {
                        items[name].call(this, e, target)
                    }
                }
            });
        }
    }

    openMenu(e, elem) {
        e.preventDefault();
        console.log('Open menu');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    closeMenu(e, elem) {
        e.preventDefault();
        console.log('Close menu');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    openForm(e, elem) {
        e.preventDefault();
        console.log('Open form');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    closeForm(e, elem) {
        e.preventDefault();
        console.log('Close form');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    sendForm(e, elem) {
        e.preventDefault();
        console.log('Send form');
        console.log(this);
        console.log(e);
        console.log(elem);

        fetch(elem.action, {
            method: 'POST',
            body: new FormData(elem)
        }).then(response => response.json()).then((data) => {
            console.log(this);
            console.log(data);
        });
    }

    scrollTo(e, elem) {
        e.preventDefault();

        document.querySelector(elem.hash).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

}
window.addEventListener('load', function () {
    gsap.registerPlugin('ScrollTrigger');

    ScrollTrigger.create({
        trigger: ".wrapper",
        start: `${window.innerHeight}px center`,
        end: 'bottom top',
        // markers: true,
        onToggle: self => {
            let btn = document.querySelector('.up');
            if (self.isActive) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        },
    });

    if (document.querySelector('.main-desc__map-title')) {
        const animMainDesc = gsap.timeline();
        animMainDesc.fromTo(".main-desc__map-title--1", {
            opacity: 0,
            x: -150,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.3
        })
            .fromTo(".main-desc__map-title--2", {
                opacity: 0,
                x: -150,
            }, {
                opacity: 1,
                x: 0,
                duration: 1.3
            }, "-=1.1")
        ScrollTrigger.create({
            trigger: ".main-desc__map-title",
            animation: animMainDesc,
            start: 'center bottom',
            // markers: true
        });
    }

    if (document.querySelector('.import-banner__title')) {
        const animMainDesc = gsap.timeline();
        animMainDesc.fromTo(".import-banner__title--1", {
            opacity: 0,
            x: 150,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.3
        })
            .fromTo(".import-banner__title--2", {
                opacity: 0,
                x: 150,
            }, {
                opacity: 1,
                x: 0,
                duration: 1.3
            }, "-=1.1")
        ScrollTrigger.create({
            trigger: ".import-banner__title",
            animation: animMainDesc,
            start: 'top center',
            // markers: true
        });
    }

    if (document.querySelector('.partners__slogan')) {
        const animMainDesc = gsap.timeline();
        animMainDesc.fromTo(".partners__slogan--1", {
            opacity: 0,
            x: 150,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.3
        })
            .fromTo(".partners__slogan--2", {
                opacity: 0,
                x: 150,
            }, {
                opacity: 1,
                x: 0,
                duration: 1.3
            }, "-=1.1")
        ScrollTrigger.create({
            trigger: ".partners__slogan",
            animation: animMainDesc,
            start: 'top center',
            // markers: true
        });
    }

    ScrollTrigger.create({
        trigger: ".wrapper",
        start: `100px top`,
        end: 'bottom top',
        // markers: true,
        onUpdate: self => {
            if (self.isActive) {
                if (self.direction == 1) {
                    $('.header').addClass('hide');
                } else {
                    $('.header').removeClass('hide');
                }
            }
        },
    });

});
window.addEventListener('load', function () {
    if (window.matchMedia("(max-width: 1439.98px)").matches) {
        $('.nav__link').on('click', function (e) {
            let $this = $(this),
                $item = $(this).closest('.nav__item'),
                $drop = $item.find('.nav__drop');

            if ($drop.length === 0){
                return;
            }

            $item.toggleClass('active');
            $drop.slideToggle(500);
        });
    }

    $('.header__mmenu-btn').on('click', function (e){
        $(this).toggleClass('active');
        $('.header__center').toggleClass('active');
        $('body').toggleClass('ovh');
    });
});
window.addEventListener('load', function () {

    document.querySelectorAll('.platform').forEach(i=>{

        let btn = i.querySelector('.platform__btn'),
            wrap = i.querySelector('.platform__wrap');

        wrap.style.marginBottom = `-${btn.offsetHeight}px`;
    });

    $('.platform').on('click', function (e) {
        let $this = $(this),
            $wrap = $this.find('.platform__wrap');

        if ($this.hasClass('active')) {
            if ($(e.target).closest('.platform__content').length == 0){
                $this.removeClass('active');
                $wrap.slideUp(500);
            }

        } else {
            $this.addClass('active');
            $wrap.slideDown(500);
        }
    });
});
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

        if (window.matchMedia("(max-width: 1023.98px)").matches) {
            // console.log('MOBILE');
        } else {
            sliders.forEach(function (i, x) {
                let swiper = i.querySelector('.projects__swiper'),
                    pag = i.querySelector('.projects__pag'),
                    nav = navs[x],
                    prev = nav.querySelector('.projects__prev'),
                    next = nav.querySelector('.projects__next');

                new Swiper(swiper, {
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
window.addEventListener('load', function (){
    if (!isMobile.phone) {
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
    }
});
window.addEventListener('load', function (){

    // let btn = document.querySelector('.up');
    //
    // btn.addEventListener('click', function (){
    //    window.scrollTo({
    //        top: 0,
    //        behavior: "smooth"
    //    });
    // });
});
window.addEventListener('load', function (){
   $('.filter__btn').on('click', function (){
       let $this = $(this),
           $filter = $this.closest('.filter'),
           $drop = $filter.find('.filter__drop');

       $drop.slideToggle(500);
   });

   if (window.matchMedia("(max-width: 1023.98px)").matches) {
       $('body').on('click', function (e) {
           if (!e.target.closest('.filter') || e.target.closest('.filter__item')) {
               $('.filter__drop').slideUp(500);
           }
       });
   }
});
window.addEventListener('load', function () {
    document.querySelector('.feed__form').addEventListener('submit', function (e){
        e.preventDefault();
        sendFeedData(this);
    });
});

function sendFeedData(form) {
    let data = $(form).serialize();

    $.ajax({
        dataType: "json",
        type: "POST",
        url: '/php/ajax.php',
        data: data,
        success: function (result) {
            if (result.status) {
                form.classList.add('sended');
            } else {
                alert('Что-то пошло не так, попробуйте еще раз!!!');
            }
        },
        error: function (result) {
            alert('Что-то пошло не так, попробуйте еще раз!!!');
        }
    });
}
window.addEventListener('load', function () {
    /*Медиазапрос*/
    if (!window.matchMedia('(max-width: 767.98px)').matches) {
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
    }

});
//# sourceMappingURL=script.js.map