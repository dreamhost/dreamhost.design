---
title: Pagination
layout: app_new
---
<p class="bg-c-w100">
  <p class="t-4">
    Pagination is used to breakdown &amp; navigate muti-step processes or large volumes of content. It is there to simplify and not overwhelm the user. In it's first instance it should be positioned at the top right of the content area.
  </p>
</p>

<hr />

<div class="Pagination m-bottom-4">
	<a class="Pagination__button" href="#"><svg class="Pagination__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M4.5 0L2 1.8 5.8 6 2 10.2 4.5 12 10 6z"/></svg></a>
	<p class="Pagination__status">Step <span>1</span> of <span>5</span></p>
	<a  class="Pagination__button" href="#"><svg class="Pagination__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M4.5 0L2 1.8 5.8 6 2 10.2 4.5 12 10 6z"/></svg></a>
</div><!--Pagination-->


{% highlight html %}
<div class="Pagination">
	<a class="Pagination__button" href="#"><svg class="Pagination__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M4.5 0L2 1.8 5.8 6 2 10.2 4.5 12 10 6z"/></svg></a>
	<p class="Pagination__status">Step <span>1</span> of <span>5</span></p>
	<a  class="Pagination__button" href="#"><svg class="Pagination__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M4.5 0L2 1.8 5.8 6 2 10.2 4.5 12 10 6z"/></svg></a>
</div><!--Pagination-->
{% endhighlight%}
