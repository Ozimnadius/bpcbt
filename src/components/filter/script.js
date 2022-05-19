window.addEventListener('load', function (){
   $('.filter__btn').on('click', function (){
       let $this = $(this),
           $filter = $this.closest('.filter'),
           $drop = $filter.find('.filter__drop');

       $drop.slideToggle(500);
   });

   $('body').on('click', function (e){
       if (!e.target.closest('.filter')){
           $('.filter__drop').slideUp(500);
       }
   });
});