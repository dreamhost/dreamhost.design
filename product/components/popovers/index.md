---
title: Popovers
layout: app
---
<div class="u-overflow-hidden">
<p class="bg-c-w100">
<p class="t-l">
	Popovers are used for any contextual content that shouldn't block the the user. Some common uses are dropdown link menus, hovercards, complex tooltips, etc. Below are some guidelines for usage and structure.
</p>
</p>

<hr />

<section class="Popover-position p-bottom-7">

<h2>Basic Usage</h2>
<p>
	A popover, in its most basic form, looks like this.
</p>

{% highlight html %}
<!-- A basic popover -->
<div class="Popover-container on-click">
	<div class="Popover">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

<p>
	Broken down; the first line creates the popover container. This is where the triggering method must also be declared: <code>click</code> or <code>hover</code>. In this example, it is declared as <code>click</code>.
</p>

{% highlight html %}
<div class="Popover-container on-click">
{% endhighlight %}

<p>
	The next line creates the popover. This is where any optional popover paramaters can be declared. Details on the available popover parameters are provided in the sections below.
</p>

{% highlight html %}
<div class="Popover">
{% endhighlight %}

<p>
	Next, the popover wrapper is created. This wrapper class allows optional max-height to be set on popovers. This is especially useful for popovers that function as dropdown menus.
</p>

{% highlight html %}
<div class="Popover__wrapper">
{% endhighlight %}

<p>
	Popovers don't have any padding by default, however padding can be set by nesting a divider inside of the <code>Popover__wrapper</code>. The contents of the popover are contained within the divider as well.
</p>

{% highlight html %}
<div class="p-2">...</div>
{% endhighlight %}

<p>
	The <code>js-toggle-popover</code> class must be included on the element that will trigger the popover. In this case, it is an anchor tag.
</p>

{% highlight html %}
<a class="js-toggle-popover">Click here</a>
{% endhighlight %}

</section>

<hr />

<section class="Popover-hover p-bottom-7">

<H2>Triggering</h2>

<p>
	Popovers can be triggered two ways: on click or hover. Click events require JavaScript. To enable click popovers, append <code>.on-click</code> to the <code>.Popover-container</code>. For hover popovers, append <code>.on-hover</code> instead.
</p>

<div class="container u-clearfix bg-c-g100 p-3 t-center">

	<div class="Popover-container on-click g-1_2">
		<div class="Popover has-caret">
			<div class="p-2">
				This popover only activates on click.
			</div>
		</div>
		<a class="Button js-toggle-popover t-center w-100">Click popover</a>
		<p class="m-top-1 m-bottom-0 w-100 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.on-click</p>
	</div>

	<div class="Popover-container on-hover g-1_2">
		<div class="Popover has-caret">
			<div class="p-2">
				This popover only activates on hover.
			</div>
		</div>
		<a class="Button t-center w-100">Hover popover</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.on-hover</p>
	</div>

</div>

{% highlight html %}
<!-- Click popover -->
<div class="Popover-container on-click">
	<div class="Popover">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Hover popover -->
<div class="Popover-container on-hover">
	<div class="Popover">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

</section>

<hr />

<section class="Popover-caret">

<h2>Caret</h2>

<p>
	The popover caret it optional. Append <code>.has-caret</code> accordingly. Generally, carets should only be used when the triggering element (ex: the yellow button below) does not also use a caret. That will protect against potential caret alignment issues.
</p>

<div class="container u-clearfix bg-c-g100 t-center p-2">

	<div class="Popover-container on-click g-1_2 m-bottom-2">
		<div class="Popover">
			<div class="p-2">
				This popover does not have a caret.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Popover Without Caret</a>
	</div>

	<div class="Popover-container on-click g-1_2">
		<div class="Popover has-caret">
			<div class="p-2">
				This popover has a caret.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Popover With Caret</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center t-c-g500">.has-caret</p>
	</div>

</div>

{% highlight html %}
<!-- Popover with caret -->
<div class="Popover-container on-click">
	<div class="Popover has-caret">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

</section>

<hr />

<section class="Popover-position p-bottom-7">

<h2>Alignment &amp; Positioning</h2>
<p>
	Popovers can be aligned top, right, bottom, or left. By default, they are top aligned.
</p>

<p class="t-c-r300 t-bold m-bottom-0">Popover Alignment</p>

<div class="container u-clearfix bg-c-g100 p-2 t-center">
	<div class="Popover-container on-click g-1_2 g-1_4__m">
		<div class="Popover has-caret">
			<div class="p-1">
				This is a top aligned popover with a caret.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center m-bottom-2 m-bottom-0__m">Top Aligned</a>
	</div>
	<div class="Popover-container on-click g-1_2 g-1_4__m g-omega">
		<div class="Popover Popover--right has-caret">
			<div class="p-1">
				This is a right aligned popover with a caret.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Right Aligned</a>
		<p class="m-top-1 m-bottom-2 m-bottom-0__m t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--right</p>
	</div>
	<div class="Popover-container on-click g-1_2 g-1_4__m">
		<div class="Popover Popover--bottom has-caret">
			<div class="p-1">
				This is a bottom aligned popover with a caret.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Bottom Aligned</a>
		<p class="m-top-1 m-bottom-2 m-bottom-0__m t-0 t-mon w-100 t-center bg-c-g100 t-c-g500">.Popover--bottom</p>
	</div>
	<div class="Popover-container on-click g-1_2 g-1_4__m">
		<div class="Popover Popover--left has-caret">
			<div class="p-1">
				This is a left aligned popover with a caret.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Left Aligned</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mon t-center bg-c-g100 t-c-g500 w-100">.Popover--left</p>
	</div>
</div>

{% highlight html %}
<!-- Right aligned popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--right">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Bottom aligned popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--bottom">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Left aligned popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--left">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

</section>

<section class="Popover-alignment p-bottom-7">

<p class="t-c-r300 t-bold m-bottom-0">Popover Positioning</p>

<p>
	There are left and right positioning classes for popovers that are top and bottom aligned. Adding a class <code>Popover--flush-left</code> or <code>Popover--flush-right</code> will adjust the popover's positioning and transform origin accordingly. By default, popovers are center positioned.
</p>

<div class="container u-clearfix bg-c-g100 p-2">

	<div class="Popover-container on-click g-1_2">
		<div class="Popover Popover--flush-left has-caret">
			<div class="p-2">
				This is a top aligned popover that is flushed left with the clicked element.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Flush Left</a>
		<p class="m-top-1 m-bottom-0 t-0 w-100 t-center bg-c-g100 t-c-g500 t-mono">.Popover--flush-left</p>
	</div>

	<div class="Popover-container on-click g-1_2 p-bottom-5">
		<div class="Popover Popover--flush-right has-caret">
			<div class="p-2">
				This is a top aligned popover that is flushed right with the clicked element.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Flush Right</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--flush-right</p>
	</div>

</div>

{% highlight html %}
<!-- Flushed left popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--flush-left">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Flushed right popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--flush-right">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

<p>
	There are also top and bottom positioning classes for popover that are left or right aligned. Adding classes <code>Popover--flush-top</code> or <code>Popover--flush-bottom</code> will adjust the popover's positioning and transform origin accordingly. By default, popovers are middle positioned.
</p>

<div class="container u-clearfix bg-c-g100 p-2">

	<div class="Popover-container on-click g-1_2">
		<div class="Popover Popover--left Popover--flush-top has-caret">
			<div class="p-2">
				This is a left aligned popover that is flushed top with the clicked element.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Flush Top</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--flush-top</p>
	</div>

	<div class="Popover-container on-click g-1_2">
		<div class="Popover Popover--left Popover--flush-bottom has-caret">
			<div class="p-2">
				This is a left aligned popover that is flushed bottom with the clicked element.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Flush Bottom</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--flush-bottom</p>
	</div>

</div>

{% highlight html %}
<!-- Flushed top popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--left Popover--flush-top">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Flushed bottom popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--left Popover--flush-bottom">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

</section>

<hr />

<section class="Popover-themes p-bottom-7">

<h2>Themes</h2>

<p>
	There are 4 popover themes: default (light), dark, error, and success. Apply <code>.Popover--dark</code>, <code>.Popover--error</code>, or <code>.Popover--success</code> accordingly. Omit all of the above to use the default theme.
</p>

<div class="container u-clearfix bg-c-g100 p-2">

	<div class="Popover-container on-click g-1_2 g-1_4__m">
		<div class="Popover has-caret">
			<div class="p-2">
				This is a popover using the default theme.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Default</a>
	</div>

	<div class="Popover-container on-click g-1_2 g-1_4__m g-omega">
		<div class="Popover Popover--dark has-caret">
			<div class="p-2">
				This is a popover using the dark theme.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Dark</a>
		<p class="m-top-1 m-bottom-2 m-bottom-0__m t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--dark</p>
	</div>

	<div class="Popover-container on-click g-1_2 g-1_4__m">
		<div class="Popover Popover--error has-caret">
			<div class="p-2">
				This is a popover using the error theme.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Error</a>
		<p class="m-top-1 m-bottom-2 m-bottom-0__m t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--error</p>
	</div>

	<div class="Popover-container on-click g-1_2 g-1_4__m">
		<div class="Popover Popover--success has-caret">
			<div class="p-2">
				This is a popover using the success theme.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Success</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--success</p>
	</div>

</div>

{% highlight html %}
<!-- Dark theme popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--dark">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Error theme popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--error">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Success theme popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--success">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

</section>

<hr />

<section class="Popover-sizes p-bottom-7">

<h2>Sizes</h2>

<p>
	There are 5 popover sizes, numbered 1 - 5 in order of smallest to largest. They don't apply inner padding, but instead change the width of the overall popover. Apply <code>.Popover--1</code>, <code>.Popover--2</code>, etc.
</p>

<div class="container u-clearfix bg-c-g100 p-3 p-bottom-0">
	<div class="Popover-container on-click g-1_3">
		<div class="Popover Popover--1 has-caret">
			<div class="p-2">
				This is a size 1 popover.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Size 1</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--1</p>
	</div>
	<div class="Popover-container on-click g-1_3">
		<div class="Popover Popover--2 has-caret">
			<div class="p-2">
				This is a size 2 (default) popover.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Size 2</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--2</p>
	</div>
	<div class="Popover-container on-click g-1_3">
		<div class="Popover has-caret">
			<div class="p-2">
				This is a size 3 popover.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Size 3</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--3</p>
	</div>
</div>
<div class="container u-clearfix bg-c-g100 p-3">
	<div class="Popover-container on-click g-1_2">
		<div class="Popover Popover--4 has-caret">
			<div class="p-2">
				This is a size 4 popover.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Size 4</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--4</p>
	</div>
	<div class="Popover-container on-click g-1_2">
		<div class="Popover Popover--5 has-caret">
			<div class="p-2">
				This is a size 5 popover.
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Size 5</a>
		<p class="m-top-1 m-bottom-0 t-0 t-mono w-100 t-center bg-c-g100 t-c-g500">.Popover--5</p>
	</div>
</div>

{% highlight html %}
<!-- Size 1 popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--1">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Size 2 popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--2">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Size 3 popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--3">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Size 4 popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--4">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Size 5 popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--5">
		<div class="Popover__wrapper">
			<div class="p-2">...</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

</section>

<hr />

<section class="Popover-dropdowns p-bottom-7">

<h2>Dropdown Menus</h2>

<p>
	Dropdown menus leverage the <a href="{{site.baseurl}}/components/lists">lists component</a> to create a simple menu with links, possibly used for header nav menus, filters, etc. Horizontal rules can be created within dropdowns by distributing links between multiple <code>Popover__section</code> dividers.
</p>

<p class="m-bottom-7">
	Note that <code>Popover__section</code> dividers are only required for dropdown menu Popovers.
</p>

<h3>Basic Dropdown Menu</h3>

<div class="container u-clearfix bg-c-g100 p-2">
	<div class="Popover-container on-click w-100">
		<div class="Popover Popover--bottom has-caret">
			<div class="Popover__wrapper">
				<div class="Popover__section">
					<ul class="List List--padding">
						<li><a href="#">Twitter</a></li>
						<li><a href="#">Facebook</a></li>
						<li><a href="#">Google</a></li>
						<li><a href="#">Dedicated Hosting</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>
				</div>
			</div>
		</div>
		<a class="Button js-toggle-popover w-100 t-center">Basic Dropdown</a>
	</div>
</div>

{% highlight html %}
<!-- Basic dropdown menu popover -->
<div class="Popover-container on-click">
	<div class="Popover Popover--bottom">
		<div class="Popover__wrapper">
			<div class="Popover__section">
				<ul class="List List--padding">
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Facebook</a></li>
					<li><a href="#">Google</a></li>
					<li><a href="#">Dedicated Hosting</a></li>
					<li><a href="#">Contact us</a></li>
				</ul>
			</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

<h3 class="m-top">Dropdown Menu With Separator</h3>
<div class="container u-clearfix bg-c-g100 p-2">
	<div class="g-1_2">
		<div class="Popover-container on-click w-100">
			<div class="Popover Popover--bottom Popover--max-height has-caret">
				<div class="Popover__wrapper">
					<div class="Popover__section">
						<ul class="List List--padding">
							<li><a href="/dreamhost.css/components/animations">Animations</a></li>
							<li><a href="/dreamhost.css/components/alerts">Alerts</a></li>
							<li><a href="/dreamhost.css/components/buttons">Buttons</a></li>
							<li><a href="/dreamhost.css/components/form">Forms</a></li>
							<li><a href="/dreamhost.css/components/table">Table</a></li>
							<li><a href="/dreamhost.css/components/header">Header</a></li>
							<li><a href="/dreamhost.css/components/lists">Lists</a></li>
							<li><a href="/dreamhost.css/components/modals">Modals</a></li>
							<li><a href="/dreamhost.css/components/popovers">Popovers</a></li>
							<li><a href="/dreamhost.css/components/transitions">Transitions</a></li>
							<li><a href="/dreamhost.css/components/animations">Animations</a></li>
							<li><a href="/dreamhost.css/components/alerts">Alerts</a></li>
							<li><a href="/dreamhost.css/components/buttons">Buttons</a></li>
							<li><a href="/dreamhost.css/components/form">Forms</a></li>
							<li><a href="/dreamhost.css/components/table">Table</a></li>
							<li><a href="/dreamhost.css/components/header">Header</a></li>
							<li><a href="/dreamhost.css/components/lists">Lists</a></li>
							<li><a href="/dreamhost.css/components/modals">Modals</a></li>
							<li><a href="/dreamhost.css/components/popovers">Popovers</a></li>
							<li><a href="/dreamhost.css/components/transitions">Transitions</a></li>
						</ul>
					</div>
					<div class="Popover__section Popover__section--separator">
						<ul class="List List--padding">
							<li><a href="#">Contact us</a></li>
						</ul>
					</div>
				</div>
			</div>
			<a class="Button js-toggle-popover w-100 t-center">Dropdown with Separator</a>
		</div>
	</div>

	<div class="g-1_2">
		<div class="Popover-container on-click w-100">
			<div class="Popover Popover--bottom Popover--max-height has-caret">
				<div class="Popover__wrapper">
					<div class="Popover__section">
						<ul class="List List--padding">
							<li><a href="/dreamhost.css/components/animations">Animations</a></li>
							<li><a href="/dreamhost.css/components/alerts">Alerts</a></li>
							<li><a href="/dreamhost.css/components/buttons">Buttons</a></li>
							<li><a href="/dreamhost.css/components/form">Forms</a></li>
							<li><a href="/dreamhost.css/components/table">Table</a></li>
							<li><a href="/dreamhost.css/components/header">Header</a></li>
							<li><a href="/dreamhost.css/components/lists">Lists</a></li>
							<li><a href="/dreamhost.css/components/modals">Modals</a></li>
							<li><a href="/dreamhost.css/components/popovers">Popovers</a></li>
							<li><a href="/dreamhost.css/components/transitions">Transitions</a></li>
							<li><a href="/dreamhost.css/components/animations">Animations</a></li>
							<li><a href="/dreamhost.css/components/alerts">Alerts</a></li>
							<li><a href="/dreamhost.css/components/buttons">Buttons</a></li>
							<li><a href="/dreamhost.css/components/form">Forms</a></li>
							<li><a href="/dreamhost.css/components/table">Table</a></li>
							<li><a href="/dreamhost.css/components/header">Header</a></li>
							<li><a href="/dreamhost.css/components/lists">Lists</a></li>
							<li><a href="/dreamhost.css/components/modals">Modals</a></li>
							<li><a href="/dreamhost.css/components/popovers">Popovers</a></li>
							<li><a href="/dreamhost.css/components/transitions">Transitions</a></li>
						</ul>
					</div>
				</div>
				<div class="Popover__section Popover__section--separator">
					<ul class="List List--padding">
						<li><a href="#">Contact us</a></li>
					</ul>
				</div>
			</div>
			<a class="Button js-toggle-popover w-100">Dropdown with fixed separator</a>
		</div>
	</div>
</div>

{% highlight html %}
<!-- Dropdown menu popover with a separator -->
<div class="Popover-container on-click">
	<div class="Popover Popover--bottom">
		<div class="Popover__wrapper">
			<div class="Popover__section">
				<ul class="List List--padding">
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Facebook</a></li>
					<li><a href="#">Google</a></li>
					<li><a href="#">Dedicated Hosting</a></li>
				</ul>
			</div>
			<div class="Popover__section Popover__section--separator">
				<ul class="List List--padding">
					<li><a href="#">Contact us</a></li>
				</ul>
			</div>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>

<!-- Dropdown menu popover with a fixed separator -->
<div class="Popover-container on-click">
	<div class="Popover Popover--bottom">
		<div class="Popover__wrapper">
			<div class="Popover__section">
				<ul class="List List--padding">
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Facebook</a></li>
					<li><a href="#">Google</a></li>
					<li><a href="#">Dedicated Hosting</a></li>
				</ul>
			</div>
		</div>
		<div class="Popover__section Popover__section--separator">
			<ul class="List List--padding">
				<li><a href="#">Contact us</a></li>
			</ul>
		</div>
	</div>
	<a class="Button js-toggle-popover">Click here</a>
</div>
{% endhighlight %}

<h3 class="m-top">Product Menu</h3>

<div class="container u-clearfix bg-c-g100 p-2">
	<div class="Popover-container on-click w-100">
		<div class="Popover Popover--bottom Popover--5 Popover--flush-right">
			<div class="Popover__wrapper">
				<div class="Popover__section">
					<ul class="List List__menu List--50 List--padding">
						<li>
							<a href="#">
								<p class="List__menu--title">Register Domains</p>
								<p class="List__menu--description">Register one or more domains.</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="List__menu--title">Malware Remover</p>
								<p class="List__menu--description">Scrubs your website for malware.</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="List__menu--title">Add Hosting</p>
								<p class="List__menu--description">Shared, VPS, Dedicated, Cloud, etc.</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="List__menu--title">Add Security With SSL</p>
								<p class="List__menu--description">Protect your website from nasties.</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="List__menu--title">Transfer Domains</p>
								<p class="List__menu--description">Transfer domains to DreamHost.</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="List__menu--title">Add MySQL</p>
								<p class="List__menu--description">Need a database? Sure you do.</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="List__menu--title">Install WordPress</p>
								<p class="List__menu--description">Quick, easy, 1-click WordPress.</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="List__menu--title">Add Remixer</p>
								<p class="List__menu--description">This won't play your MP3s.</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<a class="Button js-toggle-popover has-text-caret w-100">Product Menu</a>
	</div>
</div>

{% highlight html %}
<!-- Product menu -->
<div class="Popover-container on-click">
		<div class="Popover Popover--bottom Popover--5 Popover--flush-right">
			<div class="Popover__wrapper">
				<div class="Popover__section">
					<ul class="List List__menu List--50 List--padding">
						<li>
							<a href="#">
								<p class="List__menu--title">Product</p>
								<p class="List__menu--description">Product description.</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="List__menu--title">Product</p>
								<p class="List__menu--description">Product description.</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<a class="Button js-toggle-popover has-text-caret">Product Menu</a>
	</div>
</div>
{% endhighlight %}

</section>
</div>
