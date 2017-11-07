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
        $(this).toggleClass('selected');
        // $(this).removeClass('hover');
});


$('.menuItem.selected i.fa')
    .click(function() {
        $(this).addClass('base');
        $(this).removeClass('selected');
});    
