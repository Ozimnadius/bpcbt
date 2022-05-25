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