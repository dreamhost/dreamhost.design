---
title: Containers
layout: page
---

<p class="t-4">They contain things.</p>

<hr />


<div class="container-s bg-c-g200 p-4 m-bottom-4 u-border-radius">
	<p class="m-0"><strong>.container-s</strong> (640px)</p>
</div>

<div class="container-m bg-c-g200 p-4 m-bottom-4 u-border-radius">
	<p class="m-0"><strong>.container-m</strong> (960px)</p>
</div>


<div class="container-l bg-c-g200 p-4 m-bottom-4 u-border-radius">
	<p class="m-0"><strong>.container-l</strong> (1280px)</p>
</div>

<div class="container-full-width bg-c-g200 p-4 m-bottom-4 u-border-radius">
	<p class="m-0"><strong>.container-full-width</strong> (100%)</p>
</div>


{% highlight html %}
<div class="container-s">
	<p>640px</p>
</div>
<div class="container-m">
	<p>960px</p>
</div>
<div class="container-l">
	<p>1280px</p>
</div>
<div class="container-full-width">
	<p>100%</p>
</div>
{% endhighlight %}



<hr />

## Bootstrap Containers

For the grid system, use <code>.container</code> for making rows with a responsive fixed width or <code>.container-fluid</code> for a full width container that spans the entire width of your viewport.

<div class="container bg-c-g200 p-4 m-bottom-4 u-border-radius">
	<p class="m-0"><strong>.container</strong> (1212px)</p>
</div>

<div class="container-fluid bg-c-g200 p-4 m-bottom-4 u-border-radius">
	<p class="m-0"><strong>.container-fluid</strong> (100%)</p>
</div>

{% highlight html %}
<div class="container">
	<p>1212px</p>
</div>
<div class="container-fluid">
	<p>100%</p>
</div>
{% endhighlight %}