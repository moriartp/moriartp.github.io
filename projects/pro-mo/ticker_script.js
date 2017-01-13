///////////////////////ticker script//////////////////
console.log('hello world');
var d = new Date();
var n = (d.getHours()<10?'0':'') + d.getHours();
var m = (d.getMinutes()<10?'0':'') + d.getMinutes();
var s = (d.getSeconds()<10?'0':'') + d.getSeconds();

var lastUpdate = d3.select(".box.fade-in.two")
      .append('text').html(function (d) {
        if(n==12){
          return "<i>...last update: " + n  + ":" + m +":" + s + " p.m.</i>";
        }else if (n<12){
          return "<i>...last update: " + n  + ":" + m +":" + s + " a.m.</i>";
        } else {
          return "<i>...last update: " + (n - 12) + ":" + m +":" + s + " p.m.</i>";
        }
      ;})
    
