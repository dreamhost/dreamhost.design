---
title: Tabs
layout: app
---

<p class="t-4">Tabbed navigation is constructed of a wrapper with the <code>.Tabs</code> class and an unorderded list with a <code>.Tabs__nav-item</code> class on each list item. Tabs can also show corresponding data on click by adding the <code>data-tab="MyData"</code> tag on a list item.</p>

<hr />

## Tabbed Navigation

Primarily for page/view navigation areas.

<section class="Tabs m-top-5">
	<ul class="Tabs__nav">
		<li class="Tabs__nav-item is-active" data-tab="caching">Caching</li>
		<li class="Tabs__nav-item" data-tab="staging">Staging</li>
		<li class="Tabs__nav-item" data-tab="backup">Backup</li>
		<li class="Tabs__nav-item" data-tab="domain">Domain</li>
		<li class="Tabs__nav-item" data-tab="advanced">Advanced</li>
	</ul>
	<div class="Tab is-active t-center" data-tab="caching">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptate et quibusdam debitis saepe ab, ratione molestias! Error rem quos iure deserunt assumenda magni, veritatis tenetur, impedit repellat soluta numquam.</p>
	</div>
</section>


{% highlight html %}
<section class="Tabs">
	<ul class="Tabs__nav">
		<li class="Tabs__nav-item">Default Tab</li>
		<li class="Tabs__nav-item is-active">Active Tab</li>
		<li class="Tabs__nav-item" data-tab="MyData">Data Toggle</li>
	</ul>
	<div class="Tab" data-tab="MyData">
		<p>Lorem ipsum dolor sit amet.</p>
	</div>
</section>
{% endhighlight %}

<hr />

## Block Tabs

Primarily for use with tabbed areas with only **2** options.

<section class="Tabs Tabs--block">
	<ul class="Tabs__nav">
		<li class="Tabs__nav-item is-active" data-tab="One">One</li>
		<li class="Tabs__nav-item" data-tab="Two">Two</li>
	</ul>
	<div class="Tab is-active t-center" data-tab="One">
		<p>Tab One Content.</p>
	</div>
	<div class="Tab t-center" data-tab="Two">
		<p>Tab Two Content.</p>
	</div>
</section>

{% highlight html %}
<section class="Tabs Tabs--block">
	<ul class="Tabs__nav">
		<li class="Tabs__nav-item">Default Tab</li>
		<li class="Tabs__nav-item is-active">Active Tab</li>
		<li class="Tabs__nav-item" data-tab="MyData">Data Toggle</li>
	</ul>
	<div class="Tab" data-tab="MyData">
		<p>Lorem ipsum dolor sit amet.</p>
	</div>
</section>
{% endhighlight %}

<hr />

## Button Tabs

Primarily for use with tabbed areas with **3** or more options.

<section class="Tabs Tabs--button">
	<ul class="Tabs__nav">
		<li class="Tabs__nav-item is-active" data-tab="caching">Caching</li>
		<li class="Tabs__nav-item" data-tab="staging">Staging</li>
		<li class="Tabs__nav-item" data-tab="backup">Backup</li>
		<li class="Tabs__nav-item" data-tab="domain">Domain</li>
		<li class="Tabs__nav-item" data-tab="advanced">Advanced</li>
	</ul>
	<div class="Tab is-active" data-tab="caching">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptate et quibusdam debitis saepe ab, ratione molestias! Error rem quos iure deserunt assumenda magni, veritatis tenetur, impedit repellat soluta numquam.</p>
	</div>
</section>

{% highlight html %}
<section class="Tabs Tabs--button">
	<ul class="Tabs__nav">
		<li class="Tabs__nav-item">Default Tab</li>
		<li class="Tabs__nav-item is-active">Active Tab</li>
		<li class="Tabs__nav-item" data-tab="MyData">Data Toggle</li>
	</ul>
	<div class="Tab" data-tab="MyData">
		<p>Lorem ipsum dolor sit amet.</p>
	</div>
</section>
{% endhighlight %}