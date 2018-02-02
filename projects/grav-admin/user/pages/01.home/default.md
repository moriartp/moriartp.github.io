---
title: Home
content:
    items: '@self.modular'
    order:
        by: default
        dir: asc
        custom:
            - news
            - projects
            - team
            - learning
---

<div id="XRtype"><h1><text style="color:#e42a1d;display: inline-block;text-align:left;">The X Reality Center is&nbsp</text>
      <span
         class="txt-rotate"
         data-period="2000"
         data-rotate='[ 
           " where XR happens at The New School.",
           " a place where you will find XR resources, and guidance.", 
           " paving a new pathway of design.", 
           " defining how XR is used in education.", 
           " on the avante garde.", 
           " leading the design of the virtual and augmented reality.",
           " a new research center at The New School.",
           " virtual, augmented, and mixed reality.", 
           " New School faculty and students.",
           " exploring new arenas of design.", 
           " an opportunity to solve problems.",
           " an IT development and prototyping team.", 
           " your chance to design new worlds.", 
           " the reality that has yet to be defined." 
           ]'>
      </span>
      </h1>
</div>


# Grav is Running!
## You have installed **Grav** successfully

Congratulations! You have installed the **Base Grav Package** that provides a **simple page** and the default **antimatter** theme to get you started.

!!! If you want a more **full-featured** base install, you should check out [**Skeleton** packages available in the downloads](http://getgrav.org/downloads).

#pageinject
[plugin:content-inject](/about)




### Find out all about Grav

* Learn about **Grav** by checking out our dedicated [Learn Grav](http://learn.getgrav.org) site.
* Download **plugins**, **themes**, as well as other Grav **skeleton** packages from the [Grav Downloads](http://getgrav.org/downloads) page.
* Check out our [Grav Development Blog](http://getgrav.org/blog) to find out the latest goings on in the Grav-verse.

### Edit this Page

To edit this page, simply navigate to the folder you installed **Grav** into, and then browse to the `user/pages/01.home` folder and open the `default.md` file in your [editor of choice](http://learn.getgrav.org/basics/requirements).  You will see the content of this page in [Markdown format](http://learn.getgrav.org/content/markdown).

### Create a New Page

Creating a new page is a simple affair in **Grav**.  Simply follow these simple steps:

1. Navigate to your pages folder: `user/pages/` and create a new folder.  In this example, we will use [explicit default ordering](http://learn.getgrav.org/content/content-pages) and call the folder `02.mypage`.
2. Launch your text editor and paste in the following sample code:

        ---
        title: My New Page
        ---
        # My New Page!

        This is the body of **my new page** and I can easily use _Markdown_ syntax here.

3. Save this file in the `user/pages/02.mypage/` folder as `default.md`. This will tell **Grav** to render the page using the **default** template.
4. That is it! Reload your browser to see your new page in the menu.

! NOTE: The page will automatically show up in the Menu after the "Home" menu item. If you wish to change the name that shows up in the Menu, simple add: `menu: My Page` between the dashes in the page content. This is called the YAML front matter, and it is where you configure page-specific options.

__________________________________

<script type="text/javascript">

var dotNumerator;
var dotx = [];
var doty = [];
var dotsx = [];
var dotsy = [];

var XX;
var YY;

function setup() {
   dotNumerator = $("#XRtype").width()/25;
   XX = $("#XRtype").width();
   YY = windowHeight;

   for (var j = 0; j<=dotNumerator;j++){
      dotx[j] = random(0,XX);
      doty[j] = random(0,windowHeight);
      dotsx[j] = random(-0.5,0.5);
      dotsy[j] = random(-0.5,0.5);
   } 
}

function draw() {
   cnv = createCanvas($("#XRtype").width(), windowHeight*1);
   cnv.parent("XRtype");
   
   

   background(255); 

   
   noStroke();
   fill(0,0,0,155);
   for (var i = 0; i<=dotNumerator;i++){
      dotx[i] = dotx[i]+dotsx[i];
      doty[i] = doty[i]+dotsy[i];
      ellipse(dotx[i],doty[i],3);

      if(dotx[i]<= 0 || dotx[i]>= $("#container").width()){
         dotsx[i] = dotsx[i] * -1;
      }

      if(doty[i]<= 0 || doty[i]>= windowHeight){
         dotsy[i] = dotsy[i] * -1;
      }

      for (var k = 0;k<=dotNumerator;k++){
         dotx[0] = mouseX;
         doty[0] = mouseY;
         // stroke(222,222,222,(333 -    (( abs(dotx[i]-dotx[k])   +   abs(doty[i]-doty[k]))      )));
         stroke(0,0,0,(288 -    (( abs(dotx[i]-dotx[k])   +   abs(doty[i]-doty[k]))      )));
         strokeWeight(2);
         line(dotx[i],doty[i],dotx[k],doty[k]);

      }
   }
   noStroke();
   XX = XX-2.5;
   if (XX < -2200){
      XX = windowWidth;
   }
   
}
    
    
    
    
    
/////    
    
  var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 50;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};


window.onload = function() {

  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
    // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

</script>