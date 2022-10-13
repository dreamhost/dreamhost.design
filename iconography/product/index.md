---
title: Product Icons
layout: app_new
toc: false
---

<div class="container-fluid p-0">

<p class="m-bottom-4">Icons are powerful visual representations of our products and services. They are helpers that should not be overused. </p>
<h3 class="m-bottom-2 t-bold">Product Icons</h3>
<p>Product icons are designed to represent DreamHost-specific products. It is generally utilized on the website and paired with the product name. Download our full product icons <a href="{{site.baseurl}}/assets/downloads/icons/product/all-product-icons.svg" alt="All Product Icons" download>here</a>.</p>
 <div class="row m-bottom-4">


{% for icons in site.data.icons %}
  <div class="col-6 col-md-3">
  <div class="bg-c-g100 rounded-top">
   <img class="flex m-auto p-2 w-100" src="{{site.baseurl}}/assets/images/icons_new/product/display/{{icons.url}}" alt="{{icons.name}}" />
   </div>
   <p class="rounded-bottom p-2 bg-c-b300 t-center t-c-w100 ">Format: <a class="t-c-w100"  href ="{{site.baseurl}}/assets/downloads/icons_new/product/{{icons.url}}" download>SVG</a> </p>
  </div>
  {% endfor %}   

 </div>
  <div class="bg-c-g100  p-4 p-bottom-0  rounded-container">
  <h3 class="m-bottom-2 t-bold">Color Styles</h3>
  <p>Product icons comes in two treatments, Shaded and lined.</p>
   <div class="row m-bottom-4 ">
    <div class="col-12 col-md-6">
     <div class= "Card bg-c-w100 rounded-container p-0 ">
      <div class= "p-4">
       <img class="flex m-0 w-100" src="{{site.baseurl}}/assets/images/icons_new/product/samples/shaded.svg" alt="Shaded Icons" />
      </div>
   <div class="border-c-g200 border-top-3 border-solid p-4">
 <h5 class="t-bold">Shaded</h5>
      <p>Shaded comes with the following colors Blue, Purple, Green, Black (for light backgrounds), and Gray (for dark backgrounds).</p>
     </div>
  </div>
    </div>
    <div class="col-12 col-md-6">
     <div class= "Card bg-c-w100 rounded-container p-0 ">
      <div class= "p-4">
       <img class="flex m-0 w-100" src="{{site.baseurl}}/assets/images/icons_new/product/samples/lined.svg" alt="Lined Icons" />
      </div>
   <div class="border-c-g200 border-top-3 border-solid p-4">
 <h5 class="t-bold">Lined</h5>
      <p>For Lined we only use Black (#00000) any other color is considered not on brand. Please avoid using stroke in lighter brackgrounds.</p>
   </div>
     </div>
    </div>
  </div>
  <h4 class="m-bottom-2 t-bold">Shaded Icons Do’s and Dont’s</h4>
   <div class="row m-bottom-4">
    <div class="col-12 col-md-6">
     <div class= "Card bg-c-w100 rounded-container p-0 ">
      <div class= "p-4">
       <img class="flex m-auto" src="{{site.baseurl}}/assets/images/icons_new/product/samples/shared_green_sample.svg" alt="Shaded Icons" />
      </div>
      <div class="border-c-b300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-b300">Do</h5>
      <p>
      Use only the three preset product icons colours namely: Blue, Purple, Green, Black (for light backgrounds), and Gray (for dark backgrounds).</p>
      </div>
     </div>
    </div>
      <div class="col-12 col-md-6">
     <div class= "Card bg-c-w100 rounded-container p-0 ">
      <div class= "p-4">
       <img class="flex m-auto" src="{{site.baseurl}}/assets/images/icons_new/product/samples/shared_don't_sample.svg" alt="Shaded Icons" />
      </div>
      <div class="border-c-r300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-r300">Don't</h5>
      <p>
      Don’t make your own version or convert the icon to any style, on this example converting it into duo tones is not advisable.</p>
      </div>
     </div>
   </div>
      </div>
	  <h4 class="m-bottom-2 t-bold">Shaded Icons Do’s and Dont’s</h4>
   <div class="row m-bottom-4 ">
    <div class="col-12 col-md-6">
     <div class= "Card bg-c-w100 rounded-container p-0 ">
      <div class= "p-4">
       <img class="flex m-auto" src="{{site.baseurl}}/assets/images/icons_new/product/samples/vps_lined_sample.svg" alt="Shaded Icons" />
      </div>
      <div class="border-c-b300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-b300">Do</h5>
      <p>
      Use only the preset Black (#000000) for lined icon.</p>
      </div>
     </div>
    </div>
      <div class="col-12 col-md-6">
     <div class= "Card bg-c-w100 rounded-container p-0 ">
      <div class= "p-4">
       <img class="flex m-auto" src="{{site.baseurl}}/assets/images/icons_new/product/samples/vps_lined_don't_sample.svg" alt="Shaded Icons" />
      </div>
      <div class="border-c-r300 border-top-3 border-solid p-4">
      <h5 class="t-bold t-c-r300">Don't</h5>
      <p>
      Don’t use any other stroke color</p>
      </div>
     </div>
  </div>

 </div>

</div>
<h3 class ="t-bold t-right m-0"> Next: <a href="{{site.baseurl}}/iconography/standard/">Standard Icons →</a></h3>