---
title: Colors
layout: app_new
toc: false
---

<script>
function getColor() {
  /* Get the text field */
  var copyText = document.getElementById("pillColor");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

}
</script>

<div class="container-fluid p-0">
<p>Color distinguishes our brand and helps us create consistent experiences across products. </p>
<h3 class="m-bottom-2 t-bold">Primary Colors</h3>
<p>Colors that represent our brand, used as primary color and accents. Our primary palette is comprised of purple, white, and blue to bring boldness to our brand and is used in logical ways throughout product and marketing to guide the eye and highlight the important bits.</p>

{% comment %}
Start of primary color pills
{% endcomment %}

<div class="row ">
{% for colors in site.data.colors %}
{% for color in colors.primary %}
<span onClick="getColor()" type="button" class=" col-12 col-md-4 m-bottom-4  ">
<div class="row m-0 {{color.bg}} t-c-w100 p-0 m-0 t-left p-left-4 rounded-pill no-scroll shadow-default colorpill">
<a class='copy col-9 {% if color.text-color=="white"%} t-c-w100{% else %}t-black{% endif %} m-top-2 '>
<b class="t-bold">{{color.name}}</b><br/>
{{color.hex}}</a>
<span class="col-3 col-md-3 p-left-4 p-left-3__m p-3 bg-c-b300">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4182 5.32258L17.6727 3.29032C17.3818 3 16.8 3 16.5091 3H10.4C9.52727 3 8.65455 3.87097 8.65455 4.74194V6.48387H5.74545C4.87273 6.19355 4 7.06452 4 7.93548V19.2581C4 20.129 4.87273 21 5.74545 21H13.6C14.4727 21 15.3455 20.129 15.3455 19.2581V17.5161H18.2545C19.1273 17.5161 20 16.6452 20 15.7742V6.48387C20 5.90323 19.7091 5.6129 19.4182 5.32258ZM16.5091 3.87097C16.8 4.16129 16.5091 4.16129 16.5091 3.87097L18.5455 5.90323C18.5455 5.90323 18.5455 6.19355 18.8364 6.19355H16.5091V3.87097ZM14.1818 19.2581C14.1818 19.5484 13.8909 19.8387 13.6 19.8387H5.74545C5.45455 19.8387 5.16364 19.5484 5.16364 19.2581V7.93548C5.16364 7.64516 5.45455 7.35484 5.74545 7.35484H8.65455V15.7742C8.65455 16.6452 9.52727 17.5161 10.4 17.5161H14.4727V19.2581H14.1818ZM18.8364 15.7742C18.8364 16.0645 18.5455 16.3548 18.2545 16.3548H10.4C10.1091 16.3548 9.81818 16.0645 9.81818 15.7742V4.45161C9.81818 4.16129 10.1091 3.87097 10.4 3.87097H15.3455V6.48387C15.3455 7.06452 15.6364 7.35484 16.2182 7.35484H18.8364V15.7742Z" fill="white"/>
</svg>

</span>
</div>
<input class="l-none " type="text" value="#000000"  id="pillColor">
</span>
{% endfor %}
{% endfor %}
</div>
{% comment %} 
 End of Primary Colours
{% endcomment %}

<h3 class="m-bottom-2 t-bold">Secondary Color</h3>
<p>Our secondary palette contains a variety of colors to keep things fresh and interesting. The secondary palette consists of red, green, orange, and yellow. These colors are used across
all web apps at DreamHost.</p>

{% comment %}
Start of Secondary Colours
{% endcomment %}

<div class="row ">
{% for colors in site.data.colors %}
{% for color in colors.secondary %}
<span onClick="getColor()" type="button" class=" col-12 col-md-4 m-bottom-4  ">
<div class="row m-0 {{color.bg}} t-c-w100 p-0 m-0 t-left p-left-4 rounded-pill no-scroll shadow-default colorpill">
<a class='copy col-9 {% if color.text-color=="white"%} t-c-w100{% else %}t-black{% endif %} m-top-2 '>
<b class="t-bold">{{color.name}}</b><br/>
{{color.hex}}</a>
<span class="col-3 col-md-3 p-left-4 p-left-3__m p-3 bg-c-b300">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4182 5.32258L17.6727 3.29032C17.3818 3 16.8 3 16.5091 3H10.4C9.52727 3 8.65455 3.87097 8.65455 4.74194V6.48387H5.74545C4.87273 6.19355 4 7.06452 4 7.93548V19.2581C4 20.129 4.87273 21 5.74545 21H13.6C14.4727 21 15.3455 20.129 15.3455 19.2581V17.5161H18.2545C19.1273 17.5161 20 16.6452 20 15.7742V6.48387C20 5.90323 19.7091 5.6129 19.4182 5.32258ZM16.5091 3.87097C16.8 4.16129 16.5091 4.16129 16.5091 3.87097L18.5455 5.90323C18.5455 5.90323 18.5455 6.19355 18.8364 6.19355H16.5091V3.87097ZM14.1818 19.2581C14.1818 19.5484 13.8909 19.8387 13.6 19.8387H5.74545C5.45455 19.8387 5.16364 19.5484 5.16364 19.2581V7.93548C5.16364 7.64516 5.45455 7.35484 5.74545 7.35484H8.65455V15.7742C8.65455 16.6452 9.52727 17.5161 10.4 17.5161H14.4727V19.2581H14.1818ZM18.8364 15.7742C18.8364 16.0645 18.5455 16.3548 18.2545 16.3548H10.4C10.1091 16.3548 9.81818 16.0645 9.81818 15.7742V4.45161C9.81818 4.16129 10.1091 3.87097 10.4 3.87097H15.3455V6.48387C15.3455 7.06452 15.6364 7.35484 16.2182 7.35484H18.8364V15.7742Z" fill="white"/>
</svg>

</span>
</div>
<input class="l-none " type="text" value="#000000"  id="pillColor">
</span>
{% endfor %}
{% endfor %}
</div>
{% comment %} 
 End of Secondary Colours 
{% endcomment %}

<h3 class="m-bottom-2 t-bold">Gray Scale</h3>
<p>Our neutral palette is a set of warm grays. Use these to enhance information especially in the UI, but also ask if gray is even necessary for larger areas. The grayscales also are used for the backgrounds and text color.</p>

{% comment %}
Start of Gray Scale
{% endcomment %}

<div class="row ">
{% for colors in site.data.colors %}
{% for color in colors.grayscale %}
<span onClick="getColor()" type="button" class=" col-12 col-md-4 m-bottom-4  ">
<div class="row m-0 {{color.bg}} t-c-w100 p-0 m-0 t-left p-left-4 rounded-pill no-scroll shadow-default colorpill">
<a class='copy col-9 {% if color.text-color=="white"%}t-c-w100{% else %}t-black{% endif %} m-top-2 '>
<b class="t-bold">{{color.name}}</b><br/>
{{color.hex}}</a>
<span class="col-3 col-md-3 p-left-4 p-left-3__m p-3 bg-c-b300">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4182 5.32258L17.6727 3.29032C17.3818 3 16.8 3 16.5091 3H10.4C9.52727 3 8.65455 3.87097 8.65455 4.74194V6.48387H5.74545C4.87273 6.19355 4 7.06452 4 7.93548V19.2581C4 20.129 4.87273 21 5.74545 21H13.6C14.4727 21 15.3455 20.129 15.3455 19.2581V17.5161H18.2545C19.1273 17.5161 20 16.6452 20 15.7742V6.48387C20 5.90323 19.7091 5.6129 19.4182 5.32258ZM16.5091 3.87097C16.8 4.16129 16.5091 4.16129 16.5091 3.87097L18.5455 5.90323C18.5455 5.90323 18.5455 6.19355 18.8364 6.19355H16.5091V3.87097ZM14.1818 19.2581C14.1818 19.5484 13.8909 19.8387 13.6 19.8387H5.74545C5.45455 19.8387 5.16364 19.5484 5.16364 19.2581V7.93548C5.16364 7.64516 5.45455 7.35484 5.74545 7.35484H8.65455V15.7742C8.65455 16.6452 9.52727 17.5161 10.4 17.5161H14.4727V19.2581H14.1818ZM18.8364 15.7742C18.8364 16.0645 18.5455 16.3548 18.2545 16.3548H10.4C10.1091 16.3548 9.81818 16.0645 9.81818 15.7742V4.45161C9.81818 4.16129 10.1091 3.87097 10.4 3.87097H15.3455V6.48387C15.3455 7.06452 15.6364 7.35484 16.2182 7.35484H18.8364V15.7742Z" fill="white"/>
</svg>

</span>
</div>
<input class="l-none " type="text" value="#000000"  id="pillColor">
</span>
{% endfor %}
{% endfor %}
</div>
{% comment %} 
 End of Gray Scale
{% endcomment %}
</div>

<h3 class="m-bottom-2 t-bold">Example</h3>
<p>In this example, we break down the usage of primary colors, secondary colors, and gray scale colors.</p>
<img src ="/assets/images/color_new/example.png"/>

<h2 class="m-bottom-2 t-bold">Color Usage</h2>
 <div class="bg-c-g100  p-4 m-bottom-4 rounded-container">
  <h3 class="m-bottom-2 t-bold">Contrast</h3>
  <p>Color contrast between text and background is important because it affects people’s ability to percieve information and is neccessary for user accessibility. Color combonations should have a color contrast ratio of above 3.0.</p>
  
   <div class="row m-bottom-0 m-bottom-4__m">
    <div class="col-12 col-md-4 m-bottom-4 m-bottom-0__m">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "p-6 t-c-w100 bg-black ">
<h4 class="t-bold">Why DreamHost</h4>
<p>Own your virtual presence with the power of DreamHost. With 1.5 million websites already under our care, we’re ready to help you and your sites find success online. </p>
      </div>
      <div class="border-c-b300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-b300">Pass</h5>
      <p>
White on Abyss</p>
      </div>
     </div>
    </div>
    <div class="col-12 col-md-4 m-bottom-4 m-bottom-0__m">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "p-6 t-c-w100 bg-c-b300 ">
<h4 class="t-bold">Why DreamHost</h4>
<p>Own your virtual presence with the power of DreamHost. With 1.5 million websites already under our care, we’re ready to help you and your sites find success online. </p>
      </div>
      <div class="border-c-b300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-b300">Pass</h5>
      <p>
White on Azure</p>
      </div>
     </div>
    </div>
        <div class="col-12 col-md-4 m-bottom-4 m-bottom-0__m">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "p-6">
<h4 class="t-bold">Why DreamHost</h4>
<p>Own your virtual presence with the power of DreamHost. With 1.5 million websites already under our care, we’re ready to help you and your sites find success online. </p>
      </div>
      <div class="border-c-b300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-b300">Pass</h5>
      <p>
Abyss on White</p>
      </div>
     </div>
    </div>
</div>

   <div class="row m-bottom-0 m-bottom-4__m">
    <div class="col-12 col-md-4 m-bottom-4 m-bottom-0__m">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "p-6 t-c-g300">
<h4 class="t-bold">Why DreamHost</h4>
<p>Own your virtual presence with the power of DreamHost. With 1.5 million websites already under our care, we’re ready to help you and your sites find success online. </p>
      </div>
      <div class="border-c-r300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-r300">Fail</h5>
      <p>
Smoke on White</p>
      </div>
     </div>
    </div>
    <div class="col-12 col-md-4 m-bottom-4 m-bottom-0__m">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "p-6 t-c-g400 bg-c-g500 ">
<h4 class="t-bold">Why DreamHost</h4>
<p>Own your virtual presence with the power of DreamHost. With 1.5 million websites already under our care, we’re ready to help you and your sites find success online. </p>
      </div>
      <div class="border-c-r300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-r300">Fail</h5>
      <p>
Galactic on Metal</p>
      </div>
     </div>
    </div>
        <div class="col-12 col-md-4 m-bottom-4 m-bottom-0__m">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "p-6 bg-c-y300 t-c-r300">
<h4 class="t-bold">Why DreamHost</h4>
<p>Own your virtual presence with the power of DreamHost. With 1.5 million websites already under our care, we’re ready to help you and your sites find success online. </p>
      </div>
      <div class="border-c-r300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-r300">Fail</h5>
      <p>
Coral on Sunflower</p>
      </div>
     </div>
    </div>
</div>

  <h3 class="m-bottom-2 t-bold">Create Emphasis</h3>
  <p>When used sparingly, color can be used to bring attention to important messaging</p>

   <div class="row m-bottom-4">
    <div class="col-12 col-md-6 m-bottom-4">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "bg-black">
<img class="flex m-auto p-2 w-100" src="{{site.baseurl}}/assets/images/color_new/do-emphasis.svg" alt="Do Create Emphasis" />
      </div>
      <div class="border-c-b300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-b300">Do</h5>
      <p>
Use color to emphaize main points and attract attention.</p>
      </div>
     </div>
    </div>
    <div class="col-12 col-md-6 m-bottom-4">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "bg-c-g500">
<img class="flex m-auto p-2 w-100" src="{{site.baseurl}}/assets/images/color_new/dont-emphasis.svg" alt="Don't Create Emphasis" />
      </div>
      <div class="border-c-r300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-r300">Don't</h5>
      <p>
Don’t use overly distracting color combinations.</p>
      </div>
     </div>
    </div>

</div>

<h3 class="m-bottom-2 t-bold">Evoke Feelings</h3>
  <p>Colors have meanings and connotations. Below are feelings associated with different colors.

<p><span class="t-bold">Blues & Purples</span> - Calm, loyalty, trust</p>
<p><span class="t-bold">Greens</span> - Nature, renewal, growth</p>
<p><span class="t-bold">Yellows & Oranges</span> - Happiness, creative, cheerful</p>
<p><span class="t-bold">Reds</span> - Danger, warning, passion</p></p>

   <div class="row m-bottom-4">
    <div class="col-12 col-md-6 m-bottom-4">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "">
<img class="flex m-auto p-2 w-100 shadow-high" src="{{site.baseurl}}/assets/images/color_new/do-evoke.svg" alt="Do Evoke" />
      </div>
      <div class="border-c-b300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-b300">Do</h5>
      <p>
Do use color combinations such as blues and yellow to communicate a pleasant tone.</p>
      </div>
     </div>
    </div>
    <div class="col-12 col-md-6 m-bottom-4">
     <div class= "Card bg-c-w100 rounded-container p-0 no-scroll">
      <div class= "">
<img class="flex m-auto p-2 w-100 shadow-high" src="{{site.baseurl}}/assets/images/color_new/dont-evoke.svg" alt="Don't Evoke" />
      </div>
      <div class="border-c-r300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-r300">Don't</h5>
      <p>
Don’t overuse aggressive colors such as red because it can be perceived negatively.</p>
      </div>
     </div>
    </div>
</div>

</div>

<h3 class ="t-bold t-right m-0"> Next: <a href="{{site.baseurl}}/iconography/product/">Product Icons →</a></h3>
