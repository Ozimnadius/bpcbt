window.addEventListener('load', function () {

    document.querySelectorAll('.platform').forEach(i=>{

        let btn = i.querySelector('.platform__btn'),
            wrap = i.querySelector('.platform__wrap');

        wrap.style.marginBottom = `-${btn.offsetHeight}px`;
    });

    $('.platform').on('click', function () {
        let $this = $(this),
            $wrap = $this.find('.platform__wrap');

        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $wrap.slideUp(500);
        } else {
            $this.addClass('active');
            $wrap.slideDown(500);
        }
    });
});