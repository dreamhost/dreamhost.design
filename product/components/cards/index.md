---
title: Cards
layout: page
---

<p class="t-4">Useful for displaying a heading, content, and call-to-action in a box.
	Optionally supports a label, and two different sized icons. Use with
	the <a href="{{site.baseurl}}/product/utilities/grid/">Grid</a> for positioning.</p> <p class="t-4">Cards can also use flexbox so that they all occupy the same vertical space. They must be wrapped by the <code>.Card__wrapper</code> class to flex correctly.</p>

<hr />

## Card
<div class="container-l m-bottom-5">
	<div class="Card g-1_3__m">
		<h4 class="Card__heading"><strong>Whatever</strong></h4>
		<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		<a href="#" class="Button">Go!</a>
	</div>
	<div class="Card g-1_3__m">
		<h4 class="Card__heading"><strong>Whatever</strong></h4>
		<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		<a href="#" class="Button">Go!</a>
	</div>
	<div class="Card g-1_3__m g-omega">
		<h4 class="Card__heading"><strong>Whatever</strong></h4>
		<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		<a href="#" class="Button">Go!</a>
	</div>
</div>

{% highlight html %}
<div class="Card g-1_3">
	<h4 class="Card__heading"><strong>Whatever</strong></h4>
	<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	<a href="#" class="Button">Go!</a>
</div>
{% endhighlight %}

<hr />

## Card With Icon
<div class="container-l m-bottom-5 u-clearfix">
	<div class="Card g-1_3__m">
		<svg class="Icon Icon--size-1 Card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.4 18.8l14-15.4c1.7-1.8 4.5-1.9 6.3-.1 1.7 1.7 1.8 4.5.2 6.3L14.3 27.9c-1.3 2.1-4 2.8-6.1 1.4-.4-.3-.8-.6-1.1-1l-5.8-6c-1.7-1.8-1.6-4.7.1-6.5 1.7-1.7 4.4-1.7 6.2 0l2.8 3z"></path></svg>
		<h4 class="Card__heading"><strong>Whatever</strong></h4>
		<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		<a href="#" class="Button Button--text">Go!</a>
	</div>
	<div class="Card g-1_3__m">
		<svg class="Icon Icon--size-1 Card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.4 18.8l14-15.4c1.7-1.8 4.5-1.9 6.3-.1 1.7 1.7 1.8 4.5.2 6.3L14.3 27.9c-1.3 2.1-4 2.8-6.1 1.4-.4-.3-.8-.6-1.1-1l-5.8-6c-1.7-1.8-1.6-4.7.1-6.5 1.7-1.7 4.4-1.7 6.2 0l2.8 3z"></path></svg>
		<h4 class="Card__heading"><strong>Whatever</strong></h4>
		<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		<a href="#" class="Button Button--text">Go!</a>
	</div>
	<div class="Card g-1_3__m g-omega">
		<svg class="Icon Icon--size-1 Card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.4 18.8l14-15.4c1.7-1.8 4.5-1.9 6.3-.1 1.7 1.7 1.8 4.5.2 6.3L14.3 27.9c-1.3 2.1-4 2.8-6.1 1.4-.4-.3-.8-.6-1.1-1l-5.8-6c-1.7-1.8-1.6-4.7.1-6.5 1.7-1.7 4.4-1.7 6.2 0l2.8 3z"></path></svg>
		<h4 class="Card__heading"><strong>Whatever</strong></h4>
		<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		<a href="#" class="Button Button--text">Go!</a>
	</div>
</div>

{% highlight html %}
<div class="Card g-1_3">
	<svg class="Icon Icon--size-1 Card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.4 18.8l14-15.4c1.7-1.8 4.5-1.9 6.3-.1 1.7 1.7 1.8 4.5.2 6.3L14.3 27.9c-1.3 2.1-4 2.8-6.1 1.4-.4-.3-.8-.6-1.1-1l-5.8-6c-1.7-1.8-1.6-4.7.1-6.5 1.7-1.7 4.4-1.7 6.2 0l2.8 3z"></path></svg>
	<h3 class="Card__heading">Whatever</h3>
	<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	<a href="#" class="Button Button--text">Go!</a>
</div>
{% endhighlight %}

<hr />

## Card With Large Icon
<div class="container-l m-bottom-5">
	<div class="Card g-1_3__m">
			<img src="{{site.baseurl}}/assets/images/icons/icon.hosting.svg" class="Card__large-icon" />
			<label class="Card__super">Superscript</label>
			<h3 class="Card__heading">Whatever</h3>
			<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<a href="#" class="Button">Go!</a>
	</div>
	<div class="Card g-1_3__m">
			<img src="{{site.baseurl}}/assets/images/icons/icon.billing.svg" class="Card__large-icon" />
			<label class="Card__super">Superscript</label>
			<h3 class="Card__heading">Whatever</h3>
			<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<a href="#" class="Button">Go!</a>
	</div>
	<div class="Card g-1_3__m g-omega">
			<img src="{{site.baseurl}}/assets/images/icons/icon.hosting.svg" class="Card__large-icon" />
			<label class="Card__super">Superscript</label>
			<h3 class="Card__heading">Whatever</h3>
			<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<a href="#" class="Button">Go!</a>
	</div>
</div>

{% highlight html %}
<div class="Card g-1_3">
	<img src="src/image.svg" class="Card__large-icon" />
	<label class="Card__super">Superscript</label>
	<h3 class="Card__heading">Whatever</h3>
	<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	<a href="#" class="Button">Go!</a>
</div>
{% endhighlight %}

<hr />

## Rating Card

<section class="container-l">
	<div class="Card Card__number g-1_2 g-1_4__m">
		<h1 class="Card__heading">9.9</h1>
		<hr>
		<p class="Card__content">Tech Support</p>
	</div>
	<div class="Card Card__number g-1_2 g-1_4__m g-omega">
		<h1 class="Card__heading">9.9</h1>
		<hr>
		<p class="Card__content">Tech Support</p>
	</div>
	<div class="Card Card__number g-1_2 g-1_4__m">
		<h1 class="Card__heading">9.9</h1>
		<hr>
		<p class="Card__content">Tech Support</p>
	</div>
	<div class="Card Card__number g-1_2 g-1_4__m g-omega">
			<h1 class="Card__heading">9.9</h1>
			<hr>
			<p class="Card__content">Tech Support</p>
	</div>
</section>

{% highlight html %}
<div class="Card Card__number g-1_4">
	<h1 class="Card__heading">9.9</h1>
	<hr>
	<p class="Card__content">Tech Support</p>
</div>
{% endhighlight %}

<hr />

## Featured Card

<section class="container-l">
	<div class="Card Card__featured g-1_2__m">
		<h4 class="Card__heading"><strong>Featured</strong></h4>
		<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a mauris in mauris maximus rhoncus vitae sed erat. Maecenas tristique purus nisl, ac ornare odio ultrices sit amet. Suspendisse iaculis sem et nibh condimentum, nec sollicitudin ipsum vehicula. Duis porta vitae tortor vel consequat. Phasellus posuere.</p>
		<a href="#" class="Button Button--primary">Go!</a>
	</div>
	<div class="Card Card__featured g-1_2__m">
		<h4 class="Card__heading"><strong>Featured</strong></h4>
		<p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a mauris in mauris maximus rhoncus vitae sed erat. Maecenas tristique purus nisl, ac ornare odio ultrices sit amet. Suspendisse iaculis sem et nibh condimentum, nec sollicitudin ipsum vehicula. Duis porta vitae tortor vel consequat. Phasellus posuere.</p>
		<a href="#" class="Button Button--primary">Go!</a>
	</div>
</section>

{% highlight html %}
<div class="Card Card__featured g-1_2">
	<h4 class="Card__heading"><strong>Header</strong></h4>
	<p class="Card__content">Content</p>
	<a href="#" class="Button Button--primary">Button</a>
</div>
{% endhighlight %}

<hr />

## Plan Card

<section class="container-l">
	<div class="Card Card__plan g-1_3__l">
		<h3 class="Card__heading">3 Years</h3>
		<p class="Card__subheading"><strong>(Billed every year at $119.40)</strong></p>
		<hr>
		<p class="Card__number">9.95/mo</p>
		<a href="#" class="Button Button--block Button--primary">Buy Now</a>
	</div>
	<div class="Card Card__plan--highlighted g-1_3__l">
		<span class="Tag Tag--orange Tag--square">Best Offer</span>
		<h3 class="Card__heading">3 Years</h3>
		<p class="Card__subheading"><strong>(Billed every year at $119.40)</strong></p>
		<hr>
		<p class="Card__number">9.95/mo</p>
		<a href="#" class="Button Button--block Button--primary">Buy Now</a>
	</div>
	<div class="Card Card__plan g-1_3__l">
		<h3 class="Card__heading">3 Years</h3>
		<p class="Card__subheading"><strong>(Billed every year at $119.40)</strong></p>
		<hr>
		<p class="Card__number">9.95/mo</p>
		<a href="#" class="Button Button--block Button--primary">Buy Now</a>
	</div>
</section>


{% highlight html %}
<div class="Card Card__featured g-1_2">
	<h4 class="Card__heading"><strong>Header</strong></h4>
	<p class="Card__content">Content</p>
	<a href="#" class="Button Button--primary">Button</a>
</div>
{% endhighlight %}

<hr />

## Extended Plan Card

<section class="container-l">
	<div class="Card Card__plan--extended g-1_3__l">
		<h3 class="Card__heading">Dedicated Hosting</h3>
		<p>The Holy Grail of hosting, a dedicated server is ideal for high traffic sites, apps, agencies, and resellers.</p>
		<hr>
		<p class="Card__subheading">Starting at just</p>
		<p class="Card__number">$169/mo</p>
		<ul class="List List--check List--double">
			<li>List Item (Double Spaced)</li>
			<li>List Item (Double Spaced)</li>
			<li>List Item (Double Spaced)</li>
		</ul>
		<a href="#" class="Button Button--block Button--primary">Buy Now</a>
	</div>
	<div class="Card Card__plan--extended g-1_3__l">
		<h3 class="Card__heading">Dedicated Hosting</h3>
		<p>The Holy Grail of hosting, a dedicated server is ideal for high traffic sites, apps, agencies, and resellers.</p>
		<hr>
		<p class="Card__subheading">Starting at just</p>
		<p class="Card__number">$169/mo</p>
		<ul class="List List--check List--double">
			<li>List Item (Double Spaced)</li>
			<li>List Item (Double Spaced)</li>
			<li>List Item (Double Spaced)</li>
		</ul>
		<a href="#" class="Button Button--block Button--primary">Buy Now</a>
	</div>
	<div class="Card Card__plan--extended g-1_3__l">
		<h3 class="Card__heading">Dedicated Hosting</h3>
		<p>The Holy Grail of hosting, a dedicated server is ideal for high traffic sites, apps, agencies, and resellers.</p>
		<hr>
		<p class="Card__subheading">Starting at just</p>
		<p class="Card__number">$169/mo</p>
		<ul class="List List--check List--double">
			<li>List Item (Double Spaced)</li>
			<li>List Item (Double Spaced)</li>
			<li>List Item (Double Spaced)</li>
		</ul>
		<a href="#" class="Button Button--block Button--primary">Buy Now</a>
	</div>
</section>

