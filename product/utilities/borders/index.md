---
title: Borders
layout: page
---

<p class="t-4">Utilities for adding borders to components.</p>

<hr />

<div class="container-m">
		<div class="g-1_3__m p-4 m-bottom-4 border">
				<p>Default/Solid border</p>
		</div>

		<div class="g-1_3__m p-4 m-bottom-4 border border-dashed">
				<p>Dashed border</p>
		</div>

		<div class="g-1_3__m g-omega p-4 m-bottom-4 border border-dotted">
				<p>Dotted border</p>
		</div>
</div>

{% highlight html %}
	<div class="g-1_3 p-4 m-bottom-4 border">
			<p>Default/Solid border</p>
	</div>

	<div class="g-1_3 p-4 m-bottom-4 border border-dashed">
			<p>Dashed border</p>
	</div>

	<div class="g-1_3 g-omega p-4 m-bottom-4 border border-dotted">
			<p>Dotted border</p>
	</div>
{% endhighlight %}

<hr />

<div class="container-m">
		<div class="g-1_4__m p-4 m-bottom-4 border-top">
				<p>Top border</p>
		</div>

		<div class="g-1_4__m p-4 m-bottom-4 border-bottom">
				<p>Bottom border</p>
		</div>

		<div class="g-1_4__m p-4 m-bottom-4 border-left">
				<p>Left border</p>
		</div>

		<div class="g-1_4__m g-omega p-4 m-bottom-4 border-right">
				<p>Right border</p>
		</div>
</div>

{% highlight html %}
	<div class="g-1_4__m p-4 m-bottom-4 border-top">
			<p>Top border</p>
	</div>

	<div class="g-1_4__m p-4 m-bottom-4 border-bottom">
			<p>Bottom border</p>
	</div>

	<div class=" g-1_4__m p-4 m-bottom-4 border-left">
			<p>Left border</p>
	</div>

	<div class="g-1_4__m g-omega p-4 m-bottom-4 border-right">
			<p>Right border</p>
	</div>
{% endhighlight %}

<hr />

<h2 class="m-bottom-4">Border Sizes</h2>

<div class="container-m">
	<div class="g-1_3__m p-4 m-bottom-4 bg-c-g100 border border-0">
		<p>Border size 0</p>
	</div>
	<div class="g-1_3__m p-4 m-bottom-4 bg-c-g100 border border-1">
		<p>Border size 1</p>
	</div>
	<div class="g-1_3__m g-omega p-4 m-bottom-4 bg-c-g100 border border-2">
		<p>Border size 2</p>
	</div>
</div>

{% highlight html %}
	<div class="border border-0">
		<p>Border size 0</p>
	</div>

	<div class="border border-1">
		<p>Border size 1</p>
	</div>

	<div class="border border-2">
		<p>Border size 2</p>
	</div>
{% endhighlight %}

<hr />

<h2 class="m-bottom-4">Border Radius</h2>

<p class="t-4 m-bottom">You can specify each corner individually by using any <code>--x-y</code> combination, or <code>--top|bottom|left|right</code> respectively. All corners are specified by default.</p>

<div class="p-4 border u-border-radius m-bottom">
		<p>Border radius</p>
</div>
<div class="container-full-width">
	<div class="g-1_4__m p-4 border u-border-radius--top-left m-bottom">
		<p>Border radius <br /><strong>top left only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--top-right m-bottom">
		<p>Border radius <br /><strong>top right only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--bottom-right m-bottom">
		<p>Border radius <br /><strong>bottom right only</strong></p>
	</div>
		<div class="g-1_4__m p-4 border u-border-radius--bottom-left m-bottom">
		<p>Border radius <br /><strong>bottom left only</strong></p>
	</div>
</div>
<div class="container-full-width">
	<div class="g-1_4__m p-4 border u-border-radius--top m-bottom">
		<p>Border radius <br /><strong>top only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--right m-bottom">
		<p>Border radius <br /><strong>right only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--bottom m-bottom">
		<p>Border radius <br /><strong>bottom only</strong></p>
	</div>
	<div class="g-1_4__m p-4 border u-border-radius--left m-bottom">
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

