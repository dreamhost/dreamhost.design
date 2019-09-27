---
title: Lists
layout: app
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
## Numbered
<ol class="List List--dec m-bottom">
	<li>list item</li>
	<li>list item</li>
</ol>

{% highlight html %}
<ol class="List List--dec">
	<li>list item</li>
	<li>list item</li>
</ol>
{% endhighlight%}

<hr />
## Check
<ol class="List List--check m-bottom">
	<li>list item</li>
	<li>list item</li>
</ol>

{% highlight html %}
<ol class="List List--check">
	<li>list item</li>
	<li>list item</li>
</ol>
{% endhighlight%}

<hr />
## Double Space
<ol class="List List--double m-bottom">
	<li>list item</li>
	<li>list item</li>
</ol>

{% highlight html %}
<ol class="List List--double">
	<li>list item</li>
	<li>list item</li>
</ol>
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
