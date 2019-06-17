---
title: Table — Bar
layout: page
---

<p class="t-5">Displays tabular information in a bar / card type of layout</p>
<p>The most common usecase for this component is to individually showcase a row of information that typically makes up a larger set of data. Generally, you would use a Bar component over a Table when you need extra functionality or interactivity for a single row item.</p>

<p>The Bar utilizes flexbox for layout. Each column in the Bar is created with a <code>.Bar__group</code> class. To keep the first and last columns aligned between individual bar components a <code>.Bar__group--start</code> or <code>.Bar__group--end</code> class plus a  width utility is required. A width utility class is not required if the child elements or content within <code>.Bar__group</code> sets a defined width.</p>

<p>For interactivity, the JavaScript function targets a class of <code>.js-bar</code> at the root of the component. An element with the <code>.js-drawer-on-click</code> class is used to reveal any information within the <code>.Bar__drawer</code> element. Additionally, an element with a class of <code>.js-delete-mode-on-click</code> will reveal a second drawer defined by the class <code>.Bar__delete</code></p>
<hr />

## Generic Bar Table

<div class="Bar js-bar m-top-8">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start w-25">
			First Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<hr class="m-0 border-c-g200 border-bottom-dashed l-block l-none__l">
		<div class="Bar__group Bar__group--end w-25">
			<div class="p-3 p-0__l u-ws-nowrap m-left-auto">
				<button class="js-drawer-on-click Button Button--dark bg-c-w100 t-c-g500 border-c-g300">Manage
					Files</button>
			</div>
		</div>
	</div>
	<div class="Bar__drawer p-3">
		<p>Hidden content</p>
	</div>
</div>

<div class="Bar js-bar m-bottom-8">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start w-25">
			First Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<div class="Bar__group Bar__group--mid">

		</div>
		<div class="Bar__group Bar__group--end w-25 l-none l-block__l"></div>
	</div>
	<div class="Bar__drawer p-3">
		<p>Hidden content</p>
	</div>
</div>


{% highlight html %}

<div class="Bar js-bar">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start w-25">
			First Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<hr class="m-0 border-c-g200 border-bottom-dashed l-block l-none__l">
		<div class="Bar__group Bar__group--end w-25">
			<div class="p-3 p-0__l u-ws-nowrap m-left-auto">
				<button class="js-drawer-on-click Button Button--dark bg-c-w100 t-c-g500 border-c-g300">Manage
					Files</button>
			</div>
		</div>
	</div>
	<div class="Bar__drawer p-3">
		<p>Hidden content</p>
	</div>
</div>

<div class="Bar js-bar">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start w-25">
			First Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<div class="Bar__group Bar__group--mid">

		</div>
		<div class="Bar__group Bar__group--end w-25 l-none l-block__l"></div>
	</div>
	<div class="Bar__drawer p-3">
		<p>Hidden content</p>
	</div>
</div>

{% endhighlight %}
