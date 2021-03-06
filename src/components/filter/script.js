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