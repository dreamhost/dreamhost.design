---
title: Layout
layout: app_new
---

<p class="t-4">Layout utilities are prefixed with <code>l-</code> and control the positioning of elements.</p>

<hr />

## Floats

<p class="Alert">
<strong>Please Note:</strong> Floats must have a wrapper with the <code>u-clearfix</code> class attached so they avoid breaking layouts.</p>

<div class="bg-c-g100 m-bottom">
	<div class="u-clearfix">
		<p class="bg-c-g200 p-2 m-bottom-0 l-float-left t-c-g500"><strong>.l-float-left</strong> Float Left</p>
	</div>
</div>
<div class="bg-c-g100 m-bottom">
	<div class="u-clearfix">
		<p class="bg-c-g200 p-2 m-bottom-0 l-float-right t-c-g500"><strong>.l-float-right</strong> Float Right</p>
	</div>
</div>
<div class="bg-c-g100 m-bottom">
	<div class="u-clearfix">
		<p class="bg-c-g200 p-2 m-bottom-0 l-float-none t-c-g500"><strong>.l-float-none</strong> Float None</p>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="l-float-left">Left</div>
	<div class="l-float-right">Right</div>
	<div class="l-float-none">Right</div>
</div>
{% endhighlight %}

<hr />

## Display

<div class="m-bottom-4 bg-c-g100 p-2 l-block">
	<p class="bg-c-g200 l-inline m-0"><strong>.l-inline</strong> Display Inline</p>
</div>
<div class="m-bottom-4 bg-c-g100 l-block">
	<p class="bg-c-g200 l-inline-block p-2 m-0"><strong>.l-inline-block</strong> Display Inline</p>
</div>
<div class="m-bottom-4 bg-c-g100 l-block">
	<p class="bg-c-g200 l-block p-2 m-0"><strong>.l-block</strong> Display Block</p>
</div>

{% highlight html %}
<p class="l-inline">Inline</p>
<p class="l-inline-block">Inline-block</p>
<p class="l-block">Block</p>
<p class="l-none">None</p>
{% endhighlight %}

<hr />

## Display Table

<div class="l-table bg-c-g100 w-100 m-top-4 m-bottom"> <p class="p-top-2 p-left-2"><strong>.l-table</strong> Table</p>
	<div class="l-table-row bg-c-g300"><p class="p-left-2"><strong>.l-table-row</strong> Table Row</p>
		<div class="l-table-cell bg-c-g200 p-2"><strong>.l-table-cell</strong> Table Cell</div>
		<div class="l-table-cell bg-c-g200 p-2"><strong>.l-table-cell</strong> Table Cell</div>
		<div class="l-table-cell bg-c-g200 p-2"><strong>.l-table-cell</strong> Table Cell</div>
		<div class="l-table-cell bg-c-g200 p-2"><strong>.l-table-cell</strong> Table Cell</div>
	</div><!--Table Row-->
</div><!--Table-->

{% highlight html %}
<div class="l-table w-100">
	<div class="l-table-row">
		<div class="l-table-cell">Table Cell</div>
		<div class="l-table-cell">Table Cell</div>
		<div class="l-table-cell">Table Cell</div>
		<div class="l-table-cell">Table Cell</div>
	</div><!--Table Row-->
</div><!--Table-->
{% endhighlight %}


<hr />

## Positioning

These classes can be used for positioning specific elements in relation to their parents.

{% highlight html %}
<div class="l-pos-absolute">Absolute</div>
<div class="l-pos-relative">Relative</div>
<div class="l-pos-fixed">Fixed</div>
<div class="l-pos-static">Static</div>
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

<div class="l-pos-all">Position all corners</div>
{% endhighlight %}

<hr />

## Box Sizing

{% highlight html %}
<div class="l-border-box">Border Box</div>
<div class="l-content-box">Content Box</div>
{% endhighlight %}

<hr/>

## Responsive
All layout classes are responsive and can use the __m and __l modifier classes, e.g `l-block___m`.

<hr />

## Z-index
There are 5 levels of z-index that have classes for use, which correspond to z- variables in <a href="{{site.baseurl}}/utilities/sass/variables/">Variables</a>.

{% highlight html %}
.z-0 { z-index: $z-0; }
.z-1 { z-index: $z-1; }
.z-2 { z-index: $z-2; }
.z-3 { z-index: $z-3; }
.z-4 { z-index: $z-4; }
.z-5 { z-index: $z-5; }
{% endhighlight %}
