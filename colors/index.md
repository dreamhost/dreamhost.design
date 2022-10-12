---
title: Colors
layout: app_new
toc: false
---

<div class="container-fluid p-0">
<p>Color distinguishes our brand and helps us create consistent experiences across products.  test</p>
<h3 class="m-bottom-2 t-bold">Primary Colors</h3>
<p>Colors that represent our brand, used as primary color and accents. Our primary palette is comprised of purple, white, and blue to bring boldness to our brand and is used in logical ways throughout product and marketing to guide the eye and highlight the important bits.</p>

<div class="row">
{% for colors in site.data.colors %}
{% for color in colors.primary %}
      <div class="col-12 col-md-4">
            {% include components/swatch.html class="w-100 m-bottom-4" color=color %}
      </div>
{% endfor %}
{% endfor %}
</div>


<h3 class="m-bottom-2 t-bold">Secondary Color</h3>
<p>Our secondary palette contains a variety of colors to keep things fresh and interesting. The secondary palette consists of red, green, orange, and yellow. These colors are used across
all web apps at DreamHost.</p>

{% comment %}
Start of Secondary Colours
{% endcomment %}

<div class="row">
{% for colors in site.data.colors %}
{% for color in colors.secondary %}
      <div class="col-12 col-md-4">
            {% include components/swatch.html class="w-100 m-bottom-4" color=color %}
      </div>
{% endfor %}
{% endfor %}
</div>


<h3 class="m-bottom-2 t-bold">Gray Scale</h3>
<p>Our neutral palette is a set of warm grays. Use these to enhance information especially in the UI, but also ask if gray is even necessary for larger areas. The grayscales also are used for the backgrounds and text color.</p>

{% comment %}
Start of Gray Scale
{% endcomment %}

<div class="row">
{% for colors in site.data.colors %}
{% for color in colors.grayscale %}
      <div class="col-12 col-md-4">
            {% include components/swatch.html class="w-100 m-bottom-4" color=color %}
      </div>
{% endfor %}
{% endfor %}
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

<h3 class ="t-bold t-right m-0">  Next: <a href="">Iconography →</a></h3>
