---
title: Grid
layout: app_new
---

<p class="t-4">DreamHost has multiple options to achieve the layouts we need to create.</p>

<hr />
We recommend custom CSS Grid as required by each use case, but also utilize a modified version of bootstrap grid for some projects.
<h2>Bootstrap grid</h2>

Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's structure consists of a <code>.container</code>, <code>.row</code>, and <code>.col</code>.

{% highlight html %}
<div class="container">
	<div class="row">1</div>
	<div class="col">2</div>
</div><!--Grid-->
{% endhighlight %}

<hr>

<h2>12 column grid</h2>

For more specific grid requirements there is also a 12 column grid layout system.

<div class="container">
	<div class="row">
		<div class="col-12 m-bottom-2 bg-c-g200 t-center p-2 u-border-radius"><strong>.col-12</strong></div>
		<div class="col-6 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-6</strong></div>
		<div class="col-6 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-6</strong></div>
		<div class="col-3 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-3</strong></div>
		<div class="col-3 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-3</strong></div>
		<div class="col-3 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-3</strong></div>
		<div class="col-3 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-3</strong></div>
		<div class="col-2 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-2</strong></div>
		<div class="col-2 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-2</strong></div>
		<div class="col-2 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-2</strong></div>
		<div class="col-2 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-2</strong></div>
		<div class="col-2 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-2</strong></div>
		<div class="col-2 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-2</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
		<div class="col-1 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-1</strong></div>
	</div>
</div><!--Grid-->

{% highlight html %}
<div class="container">
	<div class="row">
		<div class="col-12 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-12</strong></div>
		<div class="col-6 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-6</strong></div>
		<div class="col-6 m-bottom-2 bg-c-g200 t-center p-2"><strong>.col-6</strong></div>
	</div>
</div><!--Grid-->
{% endhighlight %}

<hr>

<h2>12 column responsive modifiers</h2>

<code>-xs</code> - extra small-breakpoint modifier <576px <br>
<code>-s</code> - small-breakpoint modifier ≥576px <br>
<code>-md</code> - medium-breakpoint modifier ≥750px <br>
<code>-lg</code> - large-breakpoint modifier ≥1050px<br>
<code>-xl</code> - extra large-breakpoint modifier ≥1280px

<div class="container">
	<div class="row">
		<div class="col-md-12 col-lg-4 m-bottom-2 t-center p-2 bg-c-g200 ">1</div>
		<div class="col-md-12 col-lg-4 m-bottom-2 t-center p-2 bg-c-g200 ">2</div>
		<div class="col-md-12 col-lg-4 m-bottom-2 t-center p-2 bg-c-g200 ">3</div>
	</div>
</div>

{% highlight html %}
<div class="container">
	<div class="row">
		<div class="col-md-12 col-lg-4">1</div>
		<div class="col-md-12 col-lg-4">2</div>
		<div class="col-md-12 col-lg-4">3</div>
	</div>
</div><!--Grid-->
{% endhighlight %}

<hr />
