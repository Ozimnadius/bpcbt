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