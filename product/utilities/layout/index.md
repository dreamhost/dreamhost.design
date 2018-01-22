---
title: Layout
layout: page
---

<p class="t-4">Layout utilities are prefixed with <strong>l-</strong> and control the positioning of elements.</p>

<hr />

## Floats

<div class="m-bottom">
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.l-float-left</p>
	<div class="border t-c-g100">
		<div class="u-clearfix">
			<p class="bg-c-g300 p-2 l-float-left t-c-g500">Left</p>
		</div>
	</div>
</div>
<div class="m-bottom">
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.l-float-right</p>
	<div class="border t-c-g100">
		<div class="u-clearfix">
			<p class="bg-c-g300 p-2 l-float-right t-c-g500">Right</p>
		</div>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="l-float-left">Left</div>
	<div class="l-float-right">Right</div>
</div>
{% endhighlight %}

<hr />

## Display

<div class="m-bottom">
	<p class="m-bottom-0 t-2 t-c-r300 t-bold l-inline">.l-inline</p>
	<p class="bg-c-g300 p-2 l-inline">Inline</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold l-inline">.l-inline-block</p>
	<p class="bg-c-g300 p-2 l-inline-block">Inline-block</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.l-block</p>
	<p class="bg-c-g300 p-2 l-block">Block</p>
</div>

{% highlight html %}
<p class="l-inline">Inline</p>
<p class="l-inline-block">Inline-block</p>
<p class="l-block">Block</p>

{% endhighlight %}

<hr />

## Positioning

These classes can be used for positioning specific elements in relation to their parents.

{% highlight html %}
<div class="l-pos-absolute">Absolute</div>
<div class="l-pos-relative">Relative</div>
<div class="l-pos-fixed">Fixed</div>
{% endhighlight %}

{% highlight html %}
<div class="l-pos-top">Top</div>
<div class="l-pos-right">Right</div>
<div class="l-pos-bottom">Bottom</div>
<div class="l-pos-left">Left</div>

<div class="l-pos-top-left">Top left</div>
<div class="l-pos-top-right">Top right</div>
<div class="l-pos-bottom-left">Bottom left</div>
<div class="l-pos-bottom-right">Bottom right</div>
{% endhighlight %}

<hr/>

## Responsive
All layout classes are responsive and can use the __m and __l modifier classes, e.g `l-block___m`.
