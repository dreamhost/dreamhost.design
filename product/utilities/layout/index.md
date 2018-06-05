---
title: Layout
layout: page
---

<p class="t-4">Layout utilities are prefixed with <code>l-</code> and control the positioning of elements.</p>

<hr />

## Floats

<p class="Alert">
<strong>Please Note:</strong> Floats must have a wrapper with the <code>u-clearfix</code> class attached so they avoid breaking layouts.</p>

<div class="bg-c-g100 m-bottom">
	<div class="u-clearfix">
		<p class="bg-c-g200 p-2 m-bottom-0 l-float-left t-c-g500"><strong>.l-float-left</strong> Float Left</p>
	</div>
</div>
<div class="bg-c-g100 m-bottom">
	<div class="u-clearfix">
		<p class="bg-c-g200 p-2 m-bottom-0 l-float-right t-c-g500"><strong>.l-float-right</strong> Float Right</p>
	</div>
</div>
<div class="bg-c-g100 m-bottom">
	<div class="u-clearfix">
		<p class="bg-c-g200 p-2 m-bottom-0 l-float-none t-c-g500"><strong>.l-float-none</strong> Float None</p>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="l-float-left">Left</div>
	<div class="l-float-right">Right</div>
	<div class="l-float-none">Right</div>
</div>
{% endhighlight %}

<hr />

## Display

<div class="m-bottom bg-c-g100 p-2 l-block">
	<p class="bg-c-g200 l-inline m-0"><strong>.l-inline</strong> Display Inline</p>
</div>
<div class="m-bottom bg-c-g100 l-block">
	<p class="bg-c-g200 l-inline-block p-2 m-0"><strong>.l-inline-block</strong> Display Inline</p>
</div>
<div class="m-bottom bg-c-g100 l-block">
	<p class="bg-c-g200 l-block p-2 m-0"><strong>.l-block</strong> Display Block</p>
</div>

{% highlight html %}
<p class="l-inline">Inline</p>
<p class="l-inline-block">Inline-block</p>
<p class="l-block">Block</p>
<p class="l-none">None</p>
{% endhighlight %}

<hr />

## Display Table

<div class="l-table bg-c-g100 w-100 m-top-4 m-bottom"> <p class="p-top-2 p-left-2"><strong>.l-table</strong> Table</p>
	<div class="l-table-row bg-c-g300"><p class="p-left-2"><strong>.l-table-row</strong> Table Row</p>
		<div class="l-table-cell bg-c-g200 p-2"><strong>.l-table-cell</strong> Table Cell</div>
		<div class="l-table-cell bg-c-g200 p-2"><strong>.l-table-cell</strong> Table Cell</div>
		<div class="l-table-cell bg-c-g200 p-2"><strong>.l-table-cell</strong> Table Cell</div>
		<div class="l-table-cell bg-c-g200 p-2"><strong>.l-table-cell</strong> Table Cell</div>
	</div><!--Table Row-->
</div><!--Table-->

{% highlight html %}
<div class="l-table w-100">
	<div class="l-table-row">
		<div class="l-table-cell">Table Cell</div>
		<div class="l-table-cell">Table Cell</div>
		<div class="l-table-cell">Table Cell</div>
		<div class="l-table-cell">Table Cell</div>
	</div><!--Table Row-->
</div><!--Table-->
{% endhighlight %}

<hr />

## Display Flex

#### Set the flex container.

<div class="m-bottom bg-c-g100 l-block">
	<p class="bg-c-g200 l-flex p-2 m-0"><strong>.l-flex</strong>&nbsp;Display Flex</p>
</div>

{% highlight html %}
<div class="l-flex">Flex</div>
{% endhighlight %}

#### Set horizonal positioning of items within the flex container.

<div class="l-flex l-flex-row m-bottom bg-c-g100">
	<div class="bg-c-g200 p-2"><strong>.l-flex-row</strong> Flex Row</div><div class="bg-c-g100 p-2">Row Item 1</div><div class="bg-c-g100 p-2">Row Item 2</div><div class="bg-c-g100 p-2">Row Item 3</div>
</div>
<div class="l-flex l-flex-row-reverse m-bottom bg-c-g100">
<div class="bg-c-g200 p-2"><strong>.l-flex-row-reverse</strong> Flex Row Reverse</div><div class="bg-c-g100 p-2">Row Item 1</div><div class="bg-c-g100 p-2">Row Item 2</div><div class="bg-c-g100 p-2">Row Item 3</div>
</div>

<div class="Grid--auto m-bottom">
<div class="l-flex l-flex-col bg-c-g100">
<div class="bg-c-g200 p-2"><strong>.l-flex-col</strong> Flex Column</div><div class="bg-c-g100 p-2">Column Item 1</div><div class="bg-c-g100 p-2">Column Item 2</div><div class="bg-c-g100 p-2">Column Item 3</div>
</div>
<div class="l-flex l-flex-col-reverse bg-c-g100">
<div class="bg-c-g200 p-2"><strong>.l-flex-col-reverse</strong> Flex Column Reverse</div><div class="bg-c-g100 p-2">Column Item 1</div><div class="bg-c-g100 p-2">Column Item 2</div><div class="bg-c-g100 p-2">Column Item 3</div>
</div>
</div><!--Grid-->

{% highlight html %}
<div class="l-flex l-flex-row">Flex Row</div>
<div class="l-flex l-flex-row-reverse">Flex Row Reverse</div>
<div class="l-flex l-flex-col">Flex Col</div>
<div class="l-flex l-flex-col-reverse">Flex Col Reverse</div>
{% endhighlight %}

#### force flex items to wrap. usually only needed when items used fixed size.
<div class="Grid--auto">
<div class="l-flex l-flex-wrap bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-wrap</strong> Flex Wrap</div><div class="bg-c-g100 p-2">Wrap Item 1</div><div class="bg-c-g100 p-2">Wrap Item 2</div><div class="bg-c-g100 p-2">Wrap Item 3</div>
</div>

<div class="l-flex l-flex-wrap-reverse bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-wrap-reverse</strong> Flex Wrap Reverse</div><div class="bg-c-g100 p-2">Wrap Reverse Item 1</div><div class="bg-c-g100 p-2">Wrap Reverse Item 2</div><div class="bg-c-g100 p-2">Wrap Reverse Item 3</div>
</div>
</div><!--Grid-->

<div class="l-flex l-flex-nowrap bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-nowrap</strong> Flex No Wrap</div><div class="bg-c-g100 p-2">No Wrap Item 1</div><div class="bg-c-g100 p-2">No Wrap Item 2</div><div class="bg-c-g100 p-2">No Wrap Item 3</div>
</div>

{% highlight html %}
<div class="l-flex l-flex-wrap">Flex Wrap</div>
<div class="l-flex l-flex-wrap-reverse">Flex Wrap Reverse</div>
<div class="l-flex l-flex-nowrap">Flex No Wrap</div>
{% endhighlight %}

#### Set horizontal spacing of individual flex items.

<div class="l-flex l-flex-x-start bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-x-start</strong> Justify Flex Start</div>
</div>

<div class="l-flex l-flex-x-end bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-x-end</strong> Justify Flex End</div>
</div>

<div class="l-flex l-flex-x-center bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-x-center</strong> Justify Flex Center</div>
</div>

<div class="l-flex l-flex-x-between bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-x-between</strong> Justify Flex Space Between</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div></div>

<div class="l-flex l-flex-x-around bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-x-around</strong> Justify Flex Space Around</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div></div>

<div class="l-flex l-flex-x-even bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.l-flex-x-even</strong> Justify Flex Space Evenly</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div></div>

{% highlight html %}
<div class="l-flex l-flex-x-start">Flex X Start</div>
<div class="l-flex l-flex-x-end">Flex X End</div>
<div class="l-flex l-flex-x-center">Flex X Center</div>
<div class="l-flex l-flex-x-between">Flex X Space Between</div>
<div class="l-flex l-flex-x-around">Flex X Space Around</div>
<div class="l-flex l-flex-x-even">Flex X Evenly Space</div>
{% endhighlight %}

#### Set vertical alignment of content within each item.

<div class="Grid--auto">
	<div class="l-flex l-flex-col l-flex-y-start bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.l-flex-y-even</strong> Flex Y Start</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
	<div class="l-flex l-flex-col l-flex-y-end bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.l-flex-y-even</strong> Flex Y End</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
	<div class="l-flex l-flex-col l-flex-y-center bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.l-flex-y-even</strong> Flex Y Center</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
</div>

<div class="Grid--auto">
	<div class="l-flex l-flex-col l-flex-y-baseline bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.l-flex-y-even</strong> Flex Y Baseline</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
	<div class="l-flex l-flex-col l-flex-y-stretch bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.l-flex-y-even</strong> Flex Y Stretch</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
</div>

{% highlight html %}
<div class="l-flex l-flex-y-start">Flex Y Start</div>
<div class="l-flex l-flex-y-end">Flex Y End</div>
<div class="l-flex l-flex-y-center">Flex Y Center</div>
<div class="l-flex l-flex-y-baseline">Flex Y Baseline</div>
<div class="l-flex l-flex-y-stretch">Flex Y Stretch</div>
{% endhighlight %}

#### Set vertical alignment of **all items as a single unit** within the flex container.

<div class="l-flex l-flex-col l-flex-y-end bg-c-g100 m-bottom">
	<div class="bg-c-g200 p-2"><strong>.l-flex-end</strong> Flex Align End</div>
	<div class="bg-c-g100 p-2 l-flex-center">Item 1</div>
	<div class="bg-c-g300 p-2">Item 2</div>
	<div class="bg-c-g400 p-2"><strong>.l-flex-end</strong> Flex Align End</div>
</div>

**Implementation example:**
{% highlight html %}
<div class="l-flex l-flex-col l-flex-y-start">
	<div>Item 1</div>
	<div class="l-flex-end">Item 2</div>
</div>
{% endhighlight %}

**Options:**
{% highlight html %}
<div class="l-flex-start"> Flex Align This Item Start</div>
<div class="l-flex-end"> Flex Align This Item End</div>
<div class="l-flex-center"> Flex Align This Item Center</div>
<div class="l-flex-stretch"> Flex Align This Item Stretch</div>
<div class="l-flex-between"> Flex Align This Item Space Between</div>
<div class="l-flex-around"> Flex Align This Item Space Around</div>
{% endhighlight %}

#### Manually set flex item sizing based on ratios
<p> <strong>e.g.</strong> 1-1-2 items will be a 25% 25% 50% row, 1-2 items a 33% 66% row, 1-3 25% 75%</p>


<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-0 p-2"><strong>.l-flex-grow-0</strong> Flex Grow 0</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-1 p-2"><strong>.l-flex-grow-1</strong> Flex Grow 1</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-2 p-2"><strong>.l-flex-grow-2</strong> Flex Grow 2</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-3 p-2"><strong>.l-flex-grow-3</strong> Flex Grow 3</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-4 p-2"><strong>.l-flex-grow-4</strong> Flex Grow 4</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-5 p-2"><strong>.l-flex-grow-5</strong> Flex Grow 5</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-6 p-2"><strong>.l-flex-grow-6</strong> Flex Grow 6</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-7 p-2"><strong>.l-flex-grow-7</strong> Flex Grow 7</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200  l-flex-grow-8 p-2"><strong>.l-flex-grow-8</strong> Flex Grow 8</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-9 p-2"><strong>.l-flex-grow-9</strong> Flex Grow 9</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>
<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-10 p-2"><strong>.l-flex-grow-10</strong> Flex Grow 10</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>

<div class="l-flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 l-flex-grow-11 p-2"><strong>.l-flex-grow-11</strong> Flex Grow 11</div>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 l-flex-grow-1 p-2">Item 3</span>
</div>

**Implementation example:**
{% highlight html %}
<div class="l-flex">
	<div class="l-flex-grow-1">Flex Grow 1</div>
</div>
{% endhighlight %}

**Options:**
{% highlight html %}
<div class="l-flex-grow-0">Flex Grow 0</div>
<div class="l-flex-grow-1">Flex Grow 1</div>
<div class="l-flex-grow-2">Flex Grow 2</div>
<div class="l-flex-grow-3">Flex Grow 3</div>
<div class="l-flex-grow-4">Flex Grow 4</div>
<div class="l-flex-grow-5">Flex Grow 5</div>
<div class="l-flex-grow-6">Flex Grow 6</div>
<div class="l-flex-grow-7">Flex Grow 7</div>
<div class="l-flex-grow-8">Flex Grow 8</div>
<div class="l-flex-grow-9">Flex Grow 9</div>
<div class="l-flex-grow-10">Flex Grow 10</div>
<div class="l-flex-grow-11">Flex Grow 11</div>
{% endhighlight %}

<hr />

## Positioning

These classes can be used for positioning specific elements in relation to their parents.

{% highlight html %}
<div class="l-pos-absolute">Absolute</div>
<div class="l-pos-relative">Relative</div>
<div class="l-pos-fixed">Fixed</div>
<div class="l-pos-static">Static</div>
{% endhighlight %}

{% highlight html %}
<div class="l-pos-top">Top</div>
<div class="l-pos-right">Right</div>
<div class="l-pos-bottom">Bottom</div>
<div class="l-pos-left">Left</div>

<div class="l-pos-top-left">Top left</div>
<div class="l-pos-top-right">Top right</div>
<div class="l-pos-bottom-left">Bottom left</div>
<div class="l-pos-bottom-right">Bottom right</div>

<div class="l-pos-all">Position all corners</div>
{% endhighlight %}

<hr />

## Box Sizing

{% highlight html %}
<div class="l-border-box">Border Box</div>
<div class="l-content-box">Content Box</div>
{% endhighlight %}

<hr/>

## Responsive
All layout classes are responsive and can use the __m and __l modifier classes, e.g `l-block___m`.

<hr />
## Vertical Align

<div class="u-clearfix bg-c-g100 t-center p-3 m-bottom-2">
		<div class="g-1_4__m border p-2 t-c-g200">
				<p class="t-2 t-c-g500"><strong>.u-vertical-align-top</strong></p>
				<img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-top" style="height: 200px;" />
				<img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-top" style="height: 50px;" />
		</div>
		<div class="g-1_4__m border p-2 t-c-g200">
				<p class="t-2 t-c-g500"><strong>.u-vertical-align-middle</strong></p>
				<img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-middle" style="height: 200px;" />
				<img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-middle" style="height: 50px;" />
		</div>
		<div class="g-1_4__m border p-2 t-c-g200">
				<p class="t-2 t-c-g500"><strong>.u-vertical-align-bottom</strong></p>
				<img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-bottom" style="height: 200px;" />
				<img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-bottom" style="height: 50px;" />
		</div>
		<div class="g-1_4__m border p-2 t-c-g200">
				<p class="t-2 t-c-g500"><strong>.u-vertical-align-text-bottom</strong></p>
				<img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-text-bottom" style="height: 200px;" />
				<img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-text-bottom" style="height: 50px;" />
		</div>
</div>

{% highlight html %}
<div>
	<h3>Top</h3>
	<img src="robot.svg" class="u-vertical-align-top" />
	<img src="moon.svg" class="u-vertical-align-top" />
</div>
<div>
	<h3>Middle</h3>
	<img src="robot.svg" class="u-vertical-align-middle" />
	<img src="moon.svg" class="u-vertical-align-middle" />
</div>
<div>
	<h3>Bottom</h3>
	<img src="robot.svg" class="u-vertical-align-bottom" />
	<img src="moon.svg" class="u-vertical-align-bottom" />
</div>
<div>
	<h3>Text Bottom</h3>
	<img src="robot.svg" class="u-vertical-align-text-bottom" />
	<img src="moon.svg" class="u-vertical-align-text-bottom" />
</div>
{% endhighlight %}

<hr />

## Z-index
There are 5 levels of z-index that have classes for use, which correspond to z- variables in <a href="{{site.baseurl}}/utilities/sass/variables/">Variables</a>.

{% highlight html %}
.z-0 { z-index: $z-0; }
.z-1 { z-index: $z-1; }
.z-2 { z-index: $z-2; }
.z-3 { z-index: $z-3; }
.z-4 { z-index: $z-4; }
.z-5 { z-index: $z-5; }
{% endhighlight %}