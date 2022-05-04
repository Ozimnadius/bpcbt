window.addEventListener('load', function (){
    $('.platform').on('click', function (){
        let $this = $(this),
            $wrap = $this.find('.platform__wrap');

        if ($this.hasClass('active')){
            $this.removeClass('active');
            $wrap.slideUp(500);
        } else{
            $this.addClass('active');
            $wrap.slideDown(500);
        }
    });
});