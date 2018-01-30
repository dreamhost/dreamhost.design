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

<hr />

## Advanced Lists

### Item List
<div class="ItemList m-bottom">
	<h4 class="ItemList__heading">Item List</h4>
	<ul>
		<li class="ItemList__item">
			<div class="ItemList__item-desc">Item1</div>
			<div class="ItemList__item-btn">
				<button class="Button Button__tag Button__tag--positive" data-label="label">Button</button>
			</div>
		</li>
		<li class="ItemList__item">
			<div class="ItemList__item-desc">Item2</div>
			<div class="ItemList__item-btn">
				<button class="Button Button__tag Button__tag--positive" data-label="label">Button</button>
			</div>
		</li>
	</ul>
</div>

{% highlight html %}
<div class="ItemList">
	<h4 class="ItemList__heading">Item List</h4>
	<ul>
		<li class="ItemList__item">
			<div class="ItemList__item-desc">Item1</div>
			<div class="ItemList__item-btn">
				<button class="Button Button__tag Button__tag--positive" data-label="label">Button</button>
			</div>
		</li>
		<li class="ItemList__item">
			<div class="ItemList__item-desc">Item2</div>
			<div class="ItemList__item-btn">
				<button class="Button Button__tag Button__tag--positive" data-label="label">Button</button>
			</div>
		</li>
	</ul>
</div>
{% endhighlight%}

<hr />

### Item List (Responsive)
<div class="ItemList__m m-bottom">
	<h4 class="ItemList__heading">Item List</h4>
	<ul>
		<li class="ItemList__item">
			<div class="ItemList__item-desc">Item1</div>
			<div class="ItemList__item-btn">
				<button class="Button Button__tag Button__tag--positive" data-label="label">Button</button>
			</div>
		</li>
		<li class="ItemList__item">
			<div class="ItemList__item-desc">Item2</div>
			<div class="ItemList__item-btn">
				<button class="Button Button__tag Button__tag--positive" data-label="label">Button</button>
			</div>
		</li>
	</ul>
</div>

{% highlight html %}
<div class="ItemList__m">
	<h4 class="ItemList__heading">Item List</h4>
	<ul>
		<li class="ItemList__item">
			<div class="ItemList__item-desc">Item1</div>
			<div class="ItemList__item-btn">
				<button class="Button Button__tag Button__tag--positive" data-label="label">Button</button>
			</div>
		</li>
		<li class="ItemList__item">
			<div class="ItemList__item-desc">Item2</div>
			<div class="ItemList__item-btn">
				<button class="Button Button__tag Button__tag--positive" data-label="label">Button</button>
			</div>
		</li>
	</ul>
</div>
{% endhighlight%}

<hr />

### Settings List
<ul class="List__settings m-bottom-8">
	<li class="ItemList__item">
		<div class="ItemList__item-desc">Setting one <span>Description of setting one</span></div>
		<div class="ItemList__item-toggle">
			<div class="Toggle">
				<input class="Toggle__input" type="checkbox" id="toggle-one" />
				<label for="toggle-one" class="Toggle__label">
					<span class="Toggle__description">
						<span class="Toggle__checked">On</span>
						<span class="Toggle__unchecked">Off</span>
					</span>
					<span class="Toggle__visible"></span>
				</label>
			</div>
		</div>
	</li>
	<li class="ItemList__item">
		<div class="ItemList__item-desc">Setting two <span>Description of setting two</span></div>
		<div class="ItemList__item-toggle">
			<div class="Toggle">
				<input class="Toggle__input" type="checkbox" id="toggle-two" />
				<label for="toggle-two" class="Toggle__label">
					<span class="Toggle__description">
						<span class="Toggle__checked">On</span>
						<span class="Toggle__unchecked">Off</span>
					</span>
					<span class="Toggle__visible"></span>
				</label>
			</div>
		</div>
	</li>
</ul>

{% highlight html %}
<ul class="List__settings">
	<li class="ItemList__item">
		<div class="ItemList__item-desc">Setting one <span>Description of setting one</span></div>
		<div class="ItemList__item-toggle">
			<div class="Toggle">
				<input class="Toggle__input" type="checkbox" id="toggle-one" />
				<label for="toggle-one" class="Toggle__label">
					<span class="Toggle__description">
						<span class="Toggle__checked">On</span>
						<span class="Toggle__unchecked">Off</span>
					</span>
					<span class="Toggle__visible"></span>
				</label>
			</div>
		</div>
	</li>
	<li class="ItemList__item">
		<div class="ItemList__item-desc">Setting two <span>Description of setting two</span></div>
		<div class="ItemList__item-toggle">
			<div class="Toggle">
				<input class="Toggle__input" type="checkbox" id="toggle-two" />
				<label for="toggle-two" class="Toggle__label">
					<span class="Toggle__description">
						<span class="Toggle__checked">On</span>
						<span class="Toggle__unchecked">Off</span>
					</span>
					<span class="Toggle__visible"></span>
				</label>
			</div>
		</div>
	</li>
</ul>
{% endhighlight%}
