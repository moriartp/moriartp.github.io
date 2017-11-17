// $(".menuItem").click(function() {
//   $('.menuItem').toggleClass('animatedMenu');
// });
// console.log('here?');


$('.base')
    .hover(
   function(){
       $(this).addClass('hovered');
       $(this).removeClass('base');
   }
   ,
   function() {
       $(this).removeClass('hovered');
   })
    .click(function() {
        $(this).addClass('selected');
        $(this).removeClass('hovered');
   });  

$('i.fa')
  .click(function(e){
    // e.preventDefault();
    e.stopPropagation();
    // $(this).parent().addClass('base').siblings().removeClass('selected');
    $(this).parent().addClass('base');
    $(this).parent().removeClass('selected');    
});