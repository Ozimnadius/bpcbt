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