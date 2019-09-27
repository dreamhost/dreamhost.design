---
title: Grid
layout: app
---

<p class="t-4">DreamHost has multiple options to achieve the layouts we need to create.</p>

<hr />

<h2>Auto grid</h2>

CSS Grid is used by the <code>.Grid--auto</code> class. It can be used to evenly distribute child <code><div></code> elements in a row &amp; is enacted at the <code>$medium-breakpoint</code>.

{% highlight html %}
<div class="Grid--auto">
	<div>1</div>
	<div>2</div>
</div><!--Grid-->
{% endhighlight %}

There are also 2 column layout modifiers for auto grid layouts. <code>.Grid-1-3</code> <em>(2 column left aligned)</em> <code>.Grid-3-1</code> <em>(2 column right aligned)</em>.

{% highlight html %}
<div class="Grid--auto .Grid-1-3">
	<div>1</div>
	<div>2</div>
</div><!--Grid-->
{% endhighlight %}

Auto CSS grid layouts can also be nested.

{% highlight html %}
<div class="Grid--auto Grid-1-3">
	<div>
		<div class="Grid--auto">
			<div>1</div>
			<div>2</div>
			<div>3</div>
		</div>
	</div>
	<div>2</div>
</div>
{% endhighlight %}

<hr />

<h2>12 column grid</h2>

For more specific grid requirements there is also a 12 column grid layout system.

<div class="Grid m-bottom-2">
	<div class="g-12-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-12-12</strong></div>
	<div class="g-6-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-6-12</strong></div>
	<div class="g-6-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-6-12</strong></div>
	<div class="g-3-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-3-12</strong></div>
	<div class="g-3-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-3-12</strong></div>
	<div class="g-3-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-3-12</strong></div>
	<div class="g-3-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-3-12</strong></div>
	<div class="g-2-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-2-12</strong></div>
	<div class="g-2-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-2-12</strong></div>
	<div class="g-2-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-2-12</strong></div>
	<div class="g-2-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-2-12</strong></div>
	<div class="g-2-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-2-12</strong></div>
	<div class="g-2-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-2-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
	<div class="g-1-12__m bg-c-g200 t-center p-2 u-border-radius"><strong>.g-1-12</strong></div>
</div><!--Grid-->

{% highlight html %}
<div class="Grid">
	<div class="g-6-12">1</div>
	<div class="g-6-12">2</div>
</div><!--Grid-->
{% endhighlight %}

<h2>12 column responsive modifiers</h2>

<code>__m</code> - $medium-breakpoint modifier
<code>__l</code> - $large-breakpoint modifier

{% highlight html %}
<div class="Grid">
	<div class="g-12-12 g-6-12__m g-1-12__l">1</div>
	<div class="g-12-12 g-6-12__m g-1-12__l">2</div>
</div><!--Grid-->
{% endhighlight %}

<hr />

<h2>Legacy grid</h2>

<p class="t-4">DreamHost legacy floated grid uses <a href="https://neat.bourbon.io/" target="_blank">Bourbon's Neat Sass grid</a> alongside some helper classes from the most common layouts we need to create.</p>

<p class="Alert"><strong>Please note:</strong> Each legacy grid row must have a wrapper with the <code>u-clearfix</code> class attached as it is based on a float model.</p>

<hr />

<div class="m-bottom">
	<div class="u-clearfix m-bottom-2">
		<div class="bg-c-g200 border-radius p-2 t-center g-1_2"><strong>.g-1_2</strong></div>
		<div class="bg-c-g200 border-radius p-2 t-center g-1_2"><strong>.g-1_2</strong></div>
	</div>
	<div class="u-clearfix m-bottom-2">
		<div class="bg-c-g200 border-radius p-2 t-center g-1_3"><strong>.g-1_3</strong></div>
		<div class="bg-c-g200 border-radius p-2 t-center g-2_3"><strong>.g-2_3</strong></div>
	</div>
	<div class="u-clearfix m-bottom-2">
		<div class="bg-c-g200 border-radius p-2 t-center g-1_4"><strong>.g-1_4</strong></div>
		<div class="bg-c-g200 border-radius p-2 t-center g-3_4"><strong>.g-3_4</strong></div>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="g-1_2">.g-1_2</div>
	<div class="g-1_2">.g-1_2</div>
</div>
<div class="u-clearfix">
	<div class="g-1_3">.g-1_3</div>
	<div class="g-2_3">.g-2_3</div>
</div>
<div class="u-clearfix">
	<div class="g-1_4">.g-1_4</div>
	<div class="g-3_4">.g-3_4</div>
</div>
{% endhighlight %}

{% highlight css %}
.g-1_6 {@include span-columns(2)}
.g-1_4 {@include span-columns(3)}
.g-1_3 {@include span-columns(4)}
.g-1_2 {@include span-columns(6)}
.g-2_3 {@include span-columns(8)}
.g-3_4 {@include span-columns(9)}
.g-omega {@include omega()}
.g-shift-1 {@include shift(1)}
.g-shift-2 {@include shift(2)}
.g-shift-3 {@include shift(3)}
.g-shift-4 {@include shift(4)}
.g-shift-5 {@include shift(5)}
.g-shift-6 {@include shift(6)}
.g-shift-7 {@include shift(7)}
.g-shift-8 {@include shift(8)}
.g-shift-9 {@include shift(9)}
.g-shift-10 {@include shift(10)}
.g-shift-11 {@include shift(11)}
{% endhighlight %}

<p>See <a href="http://neat.bourbon.io/">Neat docs</a> for more information on using Neat with Sass if the helper classes aren't enough for your interface.</p>

<hr />
## Responsive
All helper classes are mobile-first responsive and can be modified by adding `__m` or `__l` to the end of a class, e.g `.g-1_3__medium`.

For example, the following will only have columns on screens larger than 750px.

<div class="u-clearfix m-bottom">
	<div class="bg-c-g200 border-radius p-1 g-1_2__m"><strong>.g-1_2__m</strong> Responsive</div>
	<div class="bg-c-g200 border-radius p-1 g-1_2__m"><strong>.g-1_2__m</strong> Responsive</div>
</div>

{% highlight css %}
<div class="u-clearfix">
	<div class="g-1_2__m">Responsive</div>
	<div class="g-1_2__m">Responsive</div>
</div>
{% endhighlight %}
