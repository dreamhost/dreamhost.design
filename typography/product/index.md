---
title: Product Typography
layout: app_new
toc: false
---

<div class="container-fluid p-0">

<p class="m-bottom-4">Typography is the visual component
of our written communications. It’s what makes reading easier, establishing content hierarchy and making the text easier to digest. Consistent use of type makes for a successful customer experience.</p>

<h3 class="m-bottom-2 t-bold">Fonts</h3>


 </div>
  <div class="bg-c-g100  p-4 m-bottom-4 rounded-container">
  <h3 class="m-bottom-2 t-bold">Ubuntu</h3>
  <p>Ubuntu is a versatile display font that we use for headlines on our website, blog, and printed collateral.</p><p> 
Note that we only use the ‘Medium’ weight of the Ubuntu font family. If you feel the need to use a thinner or heavier weight, please contact the design team before doing so.
</p>
         <p class="rounded-pill col-12 col-md-3 p-2 bg-c-b300 t-center t-c-w100 "><a class="t-c-w100"  href ="https://fonts.google.com/specimen/Ubuntu">Download on Google Fonts →  </a></p>
         
 </div>

  <div class="bg-c-g100  p-4 m-bottom-4 rounded-container">
  <h3 class="m-bottom-2 t-bold">Proxima Nova</h3>
  <p>Proxima Nova is a light, easy-to-read font that we use for written content on our website, blog, and printed collateral.</p><p> 
Note that we only use the ‘Regular’ weight of the Proxima Nova font family. If you feel the need to use a thinner or heavier weight, please contact the design team before doing so.
</p>
         <p class="rounded-pill col-12 col-md-3 p-2 bg-c-b300 t-center t-c-w100 "><a class="t-c-w100"  href ="https://fonts.adobe.com/fonts/proxima-nova">Full Version on Adobe Fonts →  </a></p>
         
 </div>


 <h3 class="t-bold m-bottom-2">Typography Scale & Hierarchy</h3>
 <p>Big and bold, or small and italicized, everyone relies on the hierarchy of text.</p>
<p>
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

{% for type in site.data.typography_product %}
 <div class = "bg-c-g100 p-4 m-bottom-2">
 <div class="row flex flex-align-center">

  <p style ="font-family:{{type.font_family}}; font-size:{{type.size}}px; font-weight:{{type.font_weight}};" class="col-5 col-md-3">{{type.style}} </p>
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
{% for pairs in site.data.colors_paring_product %}
<div class="row">
<p class="col-12 col-md-3 flex flex-align-center t-1 t-2__m m-top-2">{{pairs.bg_name}}</p>


<span style ="font-family:Ubuntu;" class="col-4 col-md-3 border border-c-b50  border-size-1 flex flex-align-center t-1 t-2__m {{pairs.bg_color}} {{pairs.font_color}}">
<p>
<b style ="font-family:Ubuntu;"  class="t-medium">{{pairs.treatment}}</b><br/>
{{pairs.base_color}}</p>
</span>
<span style ="font-family:Ubuntu;"  class="col-4 col-md-3 border border-c-b50  border-size-1 flex flex-align-center t-1 t-2__m p-top-2 b-bottom-2 {{pairs.bg_color}}">
<div>
{% for emphasis in pairs.emphasis %}
<div style ="font-family:Ubuntu;" class="{{emphasis.font_color}} ">
<p>
<b style ="font-family:Ubuntu;" class="t-medium">Emphasis</b><br/>
{{emphasis.color_name}}</p>
</div>
{% endfor %}
</div>
</span>
<span style ="font-family:Ubuntu;"  class="col-4 col-md-3 t-c-r300 border border-c-b50 border-size-1 flex flex-align-center t-1 t-2__m {{pairs.bg_color}}">
{% for error in pairs.error %}
<p style ="font-family:Ubuntu;"  class="{{error.font_color}}">
<b style ="font-family:Ubuntu;"  class="t-medium">{{error.heading}}</b><br/>
{{error.color_name}}</p>
{% endfor %}

</span>

</div>
{% endfor %}
</div>



 

<h3 class="t-bold">Examples</h3>
<p>In this example, we break down the usage of sizes, colors, weight, and informational hierarchy of one Dreamhost Web Panel section.</p>
<div class = "flex flex-justify-center">
<img  src="{{site.baseurl}}/assets/images/typography_new/example_2.svg">
</div>

