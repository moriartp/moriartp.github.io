// $(".menuItem").click(function() {
//   $('.menuItem').toggleClass('animatedMenu');
// });
// console.log('here?');


$('.menuItem')
    .hover(
   function(){
       $(this).addClass('hover');
       $(this).removeClass('base');
   },
   function() {
       $(this).removeClass('hover');
   })
    .click(function() {
        $(this).addClass('selected');
        $(this).removeClass('hover');
   });  

$('i.fa')
  .click(function(e){
    // e.preventDefault();
    e.stopPropagation();
    // $(this).parent().addClass('base').siblings().removeClass('selected');
    $(this).parent().addClass('base').removeClass('selected');    
});