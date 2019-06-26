---
title: Miscellaneous
layout: page
---

<p class="t-4">A page dedicated to other various utility classes.</p>

<hr />

<h2 class="m-bottom-4">Border Radius</h2>

### You can specify each corner individually by using any <code>--x-y</code> combination, or <code>--top|bottom|left|right</code> respectively. All corners are specified by default.

<div class="p-4 border u-border-radius m-bottom-4">
		<p>Border radius</p>
</div>
<div class="container-full-width">
	<div class="g-1_4__m p-4 border u-border-radius--top-left m-bottom-4">
		<p>Border radius <br /><strong>top left only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--top-right m-bottom-4">
		<p>Border radius <br /><strong>top right only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--bottom-right m-bottom-4">
		<p>Border radius <br /><strong>bottom right only</strong></p>
	</div>
		<div class="g-1_4__m p-4 border u-border-radius--bottom-left m-bottom-4">
		<p>Border radius <br /><strong>bottom left only</strong></p>
	</div>
</div>
<div class="container-full-width">
	<div class="g-1_4__m p-4 border u-border-radius--top m-bottom-4">
		<p>Border radius <br /><strong>top only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--right m-bottom-4">
		<p>Border radius <br /><strong>right only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--bottom m-bottom-4">
		<p>Border radius <br /><strong>bottom only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--left m-bottom-4">
		<p>Border radius <br /><strong>left only</strong></p>
	</div>
</div>

{% highlight html %}
	<div class="p-4 border u-border-radius">
		<p>Border radius</p>
	</div>

	<div class="p-4 border u-border-radius--top-left">
		<p>Border radius top left</p>
	</div>

	<div class="p-4 border u-border-radius--top-right">
		<p>Border radius top right</p>
	</div>

	<div class="p-4 border u-border-radius--bottom-right">
		<p>Border radius bottom right</p>
	</div>

	<div class="p-4 border u-border-radius--bottom-left">
		<p>Border radius bottom left</p>
	</div>

	<div class="p-4 border u-border-radius--top">
		<p>Border radius top </p>
	</div>

	<div class="p-4 border u-border-radius--right">
		<p>Border radius right</p>
	</div>

	<div class="p-4 border u-border-radius--bottom">
		<p>Border radius bottom </p>
	</div>

	<div class="p-4 border u-border-radius--left">
		<p>Border radius left</p>
	</div>
{% endhighlight %}
