---
title: Marketing Typography 
layout: app_new
toc: false
---

<div class="container-fluid p-0">

<p class="m-bottom-4">Typography is the visual component
of our written communications. It’s what makes reading easier, establishing content hierarchy and making the text easier to digest. Consistent use of type makes for a successful customer experience.</p>

<h3 class="m-bottom-2 t-bold">Fonts</h3>


 </div>
  <div class="bg-c-g100  p-4 m-bottom-4 rounded-container">
  <h3 class="m-bottom-2 t-bold">Gilroy</h3>
  <p>Gilroy is a modern sans-serif typeface that we use on our website, blog, and printed collateral.</p><p> 
Note that we use various weights of the Gilroy font family. For headers, we use “Bold” and “Semi-Bold” and for body texts, we use “Medium”.
</p>
         <p class="rounded-pill col-12 col-md-3 p-2 bg-c-b300 t-center t-c-w100 "><a class="t-c-w100"  href ="https://www.fontspring.com/fonts/radomir-tinkov/gilroy">Full Version on Font Spring →  </a></p>
         
 </div>

 <h3 class="t-bold m-bottom-2">Typography Scale & Hierarchy</h3>
 <p>Big and bold, or small and italicized, everyone relies on the hierarchy of text.

Hierarchy is the organization of the text. It’s how we establish an order of importance within our communications, allowing the reader to easily read through what they are looking for and navigate the content.
</p>


 <div class = " bg-c-b300 t-c-w100 p-4  p-top-2 p-bottom-2 m-bottom-2  rounded-top">
 <div class="row flex flex-align-center">
  <p class="col-5 col-md-3 t-2__m t-bold">Style</p>
<p class="col-3 col-md-3 t-2__m t-bold">Weight</p>
  <p class="col-2 col-md-3 t-2__m t-bold">Size</p>
<p class="col-2 col-md-3 t-2__m t-bold">Line Height</p>
</div>
  </div>

{% for type in site.data.typography_marketing %}
 <div class = "bg-c-g100 p-4 m-bottom-2">
 <div class="row flex flex-align-center">
  <p class="col-5 col-md-3 {{type.font_size}} {{type.font_weight}} ">{{type.style}}</p>
<p class="col-3 col-md-3">{{type.weight}}</p>
  <p class="col-2 col-md-3">{{type.size}}</p>
<p class="col-2 col-md-3">{{type.line_height}}</p>
</div>
  </div>
{% endfor %}

 <h3 class="t-medium m-bottom-2 m-top-4">Text & Background Pairing</h3>
 <p>Providing good contrast between background and texts colors will improve readability. Text should be clearly distinguishable from the background. Visit the <a href="{{site.baseurl}}/colors/">color page</a> to learn more about colors.
</p>

<div class="m-bottom-4">
{% for pairs in site.data.colors_paring_marketing %}
<div class="row">
<p class="col-12 col-md-3 flex flex-align-center t-1 t-2__m m-top-2">{{pairs.bg_name}}</p>


<span class="col-4 col-md-3 border border-c-b50  border-size-1 flex flex-align-center t-1 t-2__m {{pairs.bg_color}} {{pairs.font_color}}">
<p>
<b class="t-medium">{{pairs.treatment}}</b><br/>
{{pairs.base_color}}</p>
</span>
<span class="col-4 col-md-3 border border-c-b50  border-size-1 flex flex-align-center t-1 t-2__m p-top-2 b-bottom-2 {{pairs.bg_color}}">
<div>
{% for emphasis in pairs.emphasis %}
<div class="{{emphasis.font_color}} ">
<p>
<b class="t-medium">Emphasis</b><br/>
{{emphasis.color_name}}</p>
</div>
{% endfor %}
</div>
</span>
<span class="col-4 col-md-3 t-c-r300 border border-c-b50 border-size-1 flex flex-align-center t-1 t-2__m {{pairs.bg_color}}">
{% for error in pairs.error %}
<p class="{{error.font_color}}">
<b class="t-medium">{{error.heading}}</b><br/>
{{error.color_name}}</p>
{% endfor %}

</span>

</div>
{% endfor %}
</div>



 <h3 class="t-bold m-bottom-4">Button text colors</h3>
<div class="p-2">
<div class="row flex flex-justify-center">
    <div class="p-2">
   <p class="rounded-pill  p-2 p-left-4 p-right-4 bg-c-b300 t-center t-3 t-bold t-c-w100">Primary Azure </p>
   </div>
       <div class="p-2">
   <p class="rounded-pill  p-2 p-left-4 p-right-4 bg-c-p300 t-center t-3 t-bold t-c-w100">Primary Prince</p>
   </div>
       <div class="p-2">
   <p class="rounded-pill  p-2 p-left-4 p-right-4 bg-c-t300 t-center t-3 t-bold t-c-w100">Primary Turtle </p>
   </div>
</div>

<div class="row flex flex-justify-center ">
    <div class="p-2  ">
   <p class="rounded-pill m-bottom-0  p-2 p-left-4 p-right-4 bg-c-b700 t-center  t-3 t-bold t-c-w100">Primary Midnight </p>
   </div>
       <div class="p-2">
   <p class="rounded-pill m-bottom-0  p-2 p-left-4 p-right-4 border border-3 t-3 t-bold ">Ghost Light </p>
   </div>
       <div class="p-2 bg-black rounded-container">
   <p class="rounded-pill m-bottom-0  p-2 p-left-4 p-right-4 t-center border border-3 t-3 t-bold t-c-w100">Ghost Dark </p>
   </div>
</div>
</div>


<h3 class="t-bold">Examples</h3>
<p>In this example, we break down the usage of sizes, colors, weight, and informational hierarchy of a pricing card.</p>
<div class = "flex flex-justify-center">
<img  src="{{site.baseurl}}/assets/images/typography_new/example.svg">
</div>

<h3 class ="t-bold t-right m-0">  Next: <a href="{{site.baseurl}}/typography/product">Products Typography →</a></h3> 