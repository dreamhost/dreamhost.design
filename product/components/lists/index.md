---
title: Lists
layout: page
---

<!-- TO-DO: Document variations -->

<p class="t-4">Basic list styling, using BEM notation.</p>

<hr />

<ul class="List m-bottom">
	<li>list item</li>
	<li>list item</li>
</ul>

{% highlight html %}
<ul class="List">
	<li>list item</li>
	<li>list item</li>
</ul>
{% endhighlight%}

<hr />
## Bullets
<ul class="List List--disc m-bottom">
	<li>list item</li>
	<li>list item</li>
</ul>

{% highlight html %}
<ul class="List List--disc">
	<li>list item</li>
	<li>list item</li>
</ul>
{% endhighlight%}

<hr />
## Inline
<ul class="List List--inline m-bottom">
	<li>list item</li>
	<li>list item</li>
</ul>

{% highlight html %}
<ul class="List List--inline">
	<li>list item</li>
	<li>list item</li>
</ul>
{% endhighlight%}

<hr />

## Fluid Row
Displays list items in a row, with a specified primary row item which scales based on overall container width.
<div class="m-bottom">
	<ul class="Fluid-Row">
		<li class="Fluid-Row__item p-2 border">
			Row item
		</li>
		<li class="Fluid-Row__item Fluid-Row__item--primary p-2 border">
			Primary row item
		</li>
		<li class="Fluid-Row__item p-2 border">
			Row item
		</li>
	</ul>
</div>

{% highlight html %}
<ul class="Fluid-Row">
    <li class="Fluid-Row__item">
        Row item
    </li>
    <li class="Fluid-Row__item Fluid-Row__item--primary">
        Primary row item
    </li>
    <li class="Fluid-Row__item">
        Row item
    </li>
</ul>
{% endhighlight %}

<hr />

## Link lists

### Small bold
A slightly smaller and bolder list with no link underlines.
<ul class="List List--small-bold m-bottom">
	<li><a href="#">list item</a></li>
	<li><a href="#">list item</a></li>
</ul>

{% highlight html %}
<ul class="List List--small-bold">
	<li><a href="#">list item</a></li>
	<li><a href="#">list item</a></li>
</ul>
{% endhighlight%}

### Padding
Adds default padding around the list items for larger click areas.
<ul class="List List--padding m-bottom">
	<li><a href="#">list item</a></li>
	<li><a href="#">list item</a></li>
</ul>

{% highlight html %}
<ul class="List List--padding">
	<li><a href="#">list item</a></li>
	<li><a href="#">list item</a></li>
</ul>
{% endhighlight%}

### Menu
Adds default padding around the list items for larger click areas.
<ul class="List List__menu m-bottom">
	<li>
		<a href="#">
			<p class="List__menu--title">list item</p>
			<p class="List__menu--description">list item description</p>
		</a>
	</li>
	<li>
		<a href="#">
			<p class="List__menu--title">list item</p>
			<p class="List__menu--description">list item description</p>
		</a>
	</li>
</ul>

{% highlight html %}
<ul class="List List__menu">
	<li>
		<a href="#">
			<p class="List__menu--title">list item</p>
			<p class="List__menu--description">list item description</p>
		</a>
	</li>
	<li>
		<a href="#">
			<p class="List__menu--title">list item</p>
			<p class="List__menu--description">list item description</p>
		</a>
	</li>
</ul>
{% endhighlight%}

