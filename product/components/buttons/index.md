---
title: Buttons
layout: app_new
---

<hr />

## Styles
<div class="m-bottom-3">
	<span role="button" class="m-0 t-center m-right-2__m m-bottom-2 Button">Default Button</span>
	<span role="button" class="m-0 t-center m-right-2__m m-bottom-2 Button Button--primary">Primary Button</span>
	<span role="button" class="m-0 t-center m-right-2__m m-bottom-2 Button Button--danger">Danger</span>
	<span role="button" class="m-0 t-center m-bottom-2 Button Button--disabled">Disabled</span>
</div>

{% highlight html %}<span role="button" class="Button">Default Button</span>
<span role="button" class="Button Button--primary">Primary Button</span>
<span role="button" class="Button Button--danger">Danger</span>
<span role="button" class="Button Button--disabled">Disabled</span>
{% endhighlight %}

<div class="Grid--auto m-bottom-5 m-top-3">
	<div class="p-2 u-border-radius border border-c-g200 t-center">
		<span role="button" class="Button Button--dark">Dark Button</span>
	</div>
		<div class="p-2 u-border-radius bg-c-b700 t-center">
			<span role="button" class="Button m-0 Button--light">Light Button</span>
	</div>
</div>

{% highlight html %}
<span role="button" class="Button Button--dark">Dark</span>
<span role="button" class="Button Button--light">Light</span>
{% endhighlight %}

<hr />
## Tags

<div class="m-bottom-3 t-center t-left__m">
	<span role="button" class="m-0 m-left-4__m m-right-5__m m-bottom-2 Button Button__tag Button__tag" data-label="label">Positive Tag Button</span>
	<span role="button" class="m-0 m-bottom-2 Button Button__tag Button__tag--negative" data-label="label">Negative Tag Button</span>
</div>

{% highlight html %}
<span role="button" class="Button Button__tag Button__tag">Positive Tag Button</span>
<span role="button" class="Button Button__tag Button__tag--negative">Negative Tag Button</span>
{% endhighlight %}

<hr />
## Sizes

<div class="m-bottom-3 u-clearfix">
		<span role="button" class="m-0 m-right-2__m m-bottom-2 Button Button--hero">Hero Size</span>
		<span role="button" class="m-0 m-right-2__m m-bottom-2 Button">Default Size</span>
		<span role="button" class="m-0 m-bottom-2 Button Button--compact">Compact Size</span>
</div>

{% highlight html %}
<span role="button" class="m-bottom-2 Button Button--hero">Hero Size</span>
<span role="button" class="Button">Default Size</span>
<span role="button" class="Button Button--compact">Compact Size</span>
{% endhighlight %}

<hr />
## Shapes

<div class="m-bottom-5">
	<span role="button" class="m-bottom-2 Button">Default Shape</span>
	<span role="button" class=" m-bottom-2 Button Button--text">Text Shape</span>
</div>

{% highlight html %}
<span role="button" class="Button">Default Shape</span>
<span role="button" class="Button Button--text">Text Shape</span>
{% endhighlight %}

<hr />
## Widths

<div class="m-bottom-5">
	<span role="button" class="m-bottom-2 Button">Default Width</span>
	<span role="button" class="m-bottom-2 Button Button--block">Block Width</span>
</div>

{% highlight html %}
<span role="button" class="Button">Default Width</span>
<span role="button" class="Button Button--block">Block Width</span>
{% endhighlight %}
