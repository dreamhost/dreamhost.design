---
title: Miscellaneous
layout: page
---

<p class="t-4">A page dedicated to other various utility classes.</p>

<hr />

<h2 class="m-bottom-4">Border Radius</h2>

#### All corners are specified by default.

<div class="p-4 border u-border-radius m-bottom-4">
		<p>Border radius</p>
</div>

{% highlight html %}
	<div class="p-4 border u-border-radius">
		<p>Border radius</p>
	</div>
{% endhighlight %}


<hr />

<h2 class="m-bottom-4">Clearfix</h2>

#### The clearfix utility is used on elements that need to self-clear their child elements. Use <code>.u-clearfix</code> or <code>.u-cf</code> to prevent floated elements from overflowing.


<p class="Alert m-top-4">
<strong>Please Note:</strong> Don't forget to attach a wrapper with the <code>.u-clearfix</code> class to floats and legacy grids.</p>

<div class="bg-c-g200 border-radius p-2 m-bottom-4">
	<div class="u-clearfix m-top-2 m-bottom-2">
		<div class="bg-c-g100 border-radius p-4 l-float-left"><strong>.l-float-left</strong></div>
		<div class="bg-c-g100 border-radius p-4 l-float-right"><strong>.l-float-right</strong></div>
	</div>
	<div class="u-clearfix m-bottom-2">
		<div class="bg-c-g100 border-radius p-4 t-center g-1_3"><strong>.g-1_3</strong></div>
		<div class="bg-c-g100 border-radius p-4 t-center g-2_3"><strong>.g-2_3</strong></div>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="l-float-left">.l-float-left</div>
	<div class="l-float-right">.l-float-right</div>
</div>
<div class="u-clearfix">
	<div class="g-1_3">.g-1_3</div>
	<div class="g-2_3">.g-2_3</div>
</div>
{% endhighlight %}


<hr />

<h2 class="m-bottom-4">Overflow</h2>

#### The <code>overflow-x</code> specifies for content for a block-level element when it overflows at the left or right edges, and <code>overflow-y</code> specifies for top and bottom edges.