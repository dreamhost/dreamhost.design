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
 End of primary colour pils
{% endcomment %}


</div>

<h3 class ="t-bold t-right m-0">  Next: <a href="">Color →</a></h3>
