$(function () {
   var designWidth=375;
   function resize() {
       var deviceWidth=$(document).width();
       if(deviceWidth>750){
           $('html').css('fontSize','100px');
       }else{
           $('html').css('fontSize',`${deviceWidth/designWidth*100}px`)

       }

   }
   $(window).on('resize',function () {
       resize();
   })
   resize();
});