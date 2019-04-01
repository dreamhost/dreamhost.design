---
title: Flexbox
layout: page
---

<p class="t-4">Flexbox utilities for commonly-used rules.</p>

<hr />

## Display Flex

#### Set the flex container.

<div class="m-bottom bg-c-g100 l-block">
	<p class="bg-c-g200 flex p-2 m-0"><strong>.flex, .l-flex</strong>&nbsp;Display Flex</p>
</div>

{% highlight html %}
<div class="flex">Flex</div>
{% endhighlight %}

#### Set horizonal positioning of items within the flex container.

<div class="flex flex-row m-bottom bg-c-g100">
	<div class="bg-c-g200 p-2"><strong>.flex-row</strong> Flex Row</div><div class="bg-c-g100 p-2">Row Item 1</div><div class="bg-c-g100 p-2">Row Item 2</div><div class="bg-c-g100 p-2">Row Item 3</div>
</div>
<div class="flex flex-row-reverse m-bottom bg-c-g100">
<div class="bg-c-g200 p-2"><strong>.flex-row-reverse</strong> Flex Row Reverse</div><div class="bg-c-g100 p-2">Row Item 1</div><div class="bg-c-g100 p-2">Row Item 2</div><div class="bg-c-g100 p-2">Row Item 3</div>
</div>

<div class="Grid--auto m-bottom">
<div class="flex flex-column bg-c-g100">
<div class="bg-c-g200 p-2"><strong>.flex-column</strong> Flex Column</div><div class="bg-c-g100 p-2">Column Item 1</div><div class="bg-c-g100 p-2">Column Item 2</div><div class="bg-c-g100 p-2">Column Item 3</div>
</div>
<div class="flex flex-column-reverse bg-c-g100">
<div class="bg-c-g200 p-2"><strong>.flex-column-reverse</strong> Flex Column Reverse</div><div class="bg-c-g100 p-2">Column Item 1</div><div class="bg-c-g100 p-2">Column Item 2</div><div class="bg-c-g100 p-2">Column Item 3</div>
</div>
</div><!--Grid-->

{% highlight html %}
<div class="flex flex-row">Flex Row</div>
<div class="flex flex-row-reverse">Flex Row Reverse</div>
<div class="flex flex-column">Flex Col</div>
<div class="flex flex-column-reverse">Flex Col Reverse</div>
{% endhighlight %}

#### force flex items to wrap. usually only needed when items used fixed size.
<div class="Grid--auto">
<div class="flex flex-wrap bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-wrap</strong> Flex Wrap</div><div class="bg-c-g100 p-2">Wrap Item 1</div><div class="bg-c-g100 p-2">Wrap Item 2</div><div class="bg-c-g100 p-2">Wrap Item 3</div>
</div>

<div class="flex flex-wrap-reverse bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-wrap-reverse</strong> Flex Wrap Reverse</div><div class="bg-c-g100 p-2">Wrap Reverse Item 1</div><div class="bg-c-g100 p-2">Wrap Reverse Item 2</div><div class="bg-c-g100 p-2">Wrap Reverse Item 3</div>
</div>
</div><!--Grid-->

<div class="flex flex-nowrap bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-nowrap</strong> Flex No Wrap</div><div class="bg-c-g100 p-2">No Wrap Item 1</div><div class="bg-c-g100 p-2">No Wrap Item 2</div><div class="bg-c-g100 p-2">No Wrap Item 3</div>
</div>

{% highlight html %}
<div class="flex flex-wrap">Flex Wrap</div>
<div class="flex flex-wrap-reverse">Flex Wrap Reverse</div>
<div class="flex flex-nowrap">Flex No Wrap</div>
{% endhighlight %}

#### Set **horizontal alignment of content** within the flex container.

<div class="flex flex-justify-start bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-justify-start</strong> Justify Flex Start</div>
</div>

<div class="flex flex-justify-end bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-justify-end</strong> Justify Flex End</div>
</div>

<div class="flex flex-justify-center bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-justify-center</strong> Justify Flex Center</div>
</div>

<div class="flex flex-justify-between bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-justify-between</strong> Justify Flex Space Between</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div></div>

<div class="flex flex-justify-around bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-justify-around</strong> Justify Flex Space Around</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div></div>

<div class="flex flex-justify-even bg-c-g100 m-bottom">
<div class="bg-c-g200 p-2"><strong>.flex-justify-even</strong> Justify Flex Space Evenly</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div></div>

{% highlight html %}
<div class="flex flex-justify-start">Flex X Start</div>
<div class="flex flex-justify-end">Flex X End</div>
<div class="flex flex-justify-center">Flex X Center</div>
<div class="flex flex-justify-between">Flex X Space Between</div>
<div class="flex flex-justify-around">Flex X Space Around</div>
<div class="flex flex-justify-even">Flex X Evenly Space</div>
{% endhighlight %}

#### Set **vertical alignment of content** within the flex container.

<div class="Grid--auto">
	<div class="flex flex-column flex-align-start bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.flex-align-even</strong> Flex Y Start</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
	<div class="flex flex-column flex-align-end bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.flex-align-even</strong> Flex Y End</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
	<div class="flex flex-column flex-align-center bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.flex-align-even</strong> Flex Y Center</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
</div>

<div class="Grid--auto">
	<div class="flex flex-column flex-align-baseline bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.flex-align-even</strong> Flex Y Baseline</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
	<div class="flex flex-column flex-align-stretch bg-c-g100 m-bottom">
		<div class="bg-c-g200 p-2"><strong>.flex-align-even</strong> Flex Y Stretch</div><div class="bg-c-g100 p-2">Item 1</div><div class="bg-c-g100 p-2">Item 2</div><div class="bg-c-g100 p-2">Item 3</div>
	</div>
</div>

{% highlight html %}
<div class="flex flex-align-start">Flex Y Start</div>
<div class="flex flex-align-end">Flex Y End</div>
<div class="flex flex-align-center">Flex Y Center</div>
<div class="flex flex-align-baseline">Flex Y Baseline</div>
<div class="flex flex-align-stretch">Flex Y Stretch</div>
{% endhighlight %}

#### Set **alignment of a single item** within the flex container.

<div class="flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 p-2">Item 1</div>
	<div class="bg-c-g200 p-2">Item 2</div>
	<div class="bg-c-g200 p-2">Item 3</div>
	<div class="bg-c-g200 flex-align-self-end p-2"><strong>.flex-align-self-end</strong> Item 4</div>
</div>

**Implementation example:**
{% highlight html %}
<div class="flex flex-column flex-align-start">
	<div>Item 1</div>
	<div class="flex-align-self-end">Item 2</div>
</div>
{% endhighlight %}

**Options:**
{% highlight html %}
<div class="flex-align-self-start"> Flex Align This Item Start</div>
<div class="flex-align-self-end"> Flex Align This Item End</div>
<div class="flex-align-self-center"> Flex Align This Item Center</div>
<div class="flex-align-self-stretch"> Flex Align This Item Stretch</div>
<div class="flex-align-self-between"> Flex Align This Item Space Between</div>
<div class="flex-align-self-around"> Flex Align This Item Space Around</div>
{% endhighlight %}

#### Manually set flex item sizing based on ratios
<p> <strong>e.g.</strong> 1-1-2 items will be a 25% 25% 50% row, 1-2 items a 33% 66% row, 1-3 25% 75%</p>


<div class="flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 flex-grow-0 p-2"><strong>.flex-grow-0</strong> Flex Grow 0</div>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 3</span>
</div>
<div class="flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 flex-grow-1 p-2"><strong>.flex-grow-1</strong> Flex Grow 1</div>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 3</span>
</div>
<div class="flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 flex-grow-2 p-2"><strong>.flex-grow-2</strong> Flex Grow 2</div>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 3</span>
</div>
<div class="flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 flex-grow-3 p-2"><strong>.flex-grow-3</strong> Flex Grow 3</div>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 3</span>
</div>
<div class="flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 flex-grow-4 p-2"><strong>.flex-grow-4</strong> Flex Grow 4</div>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 3</span>
</div>
<div class="flex bg-c-g100 m-bottom">
	<div class="bg-c-g200 flex-grow-6 p-2"><strong>.flex-grow-6</strong> Flex Grow 6</div>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 1</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 2</span>
	<span class="bg-c-g100 flex-grow-1 p-2">Item 3</span>
</div>

**Implementation example:**
{% highlight html %}
<div class="flex">
	<div class="flex-grow-1">Flex Grow 1</div>
</div>
{% endhighlight %}

**Options:**
{% highlight html %}
<div class="flex-grow-0">Flex Grow 0</div>
<div class="flex-grow-1">Flex Grow 1</div>
<div class="flex-grow-2">Flex Grow 2</div>
<div class="flex-grow-3">Flex Grow 3</div>
<div class="flex-grow-4">Flex Grow 4</div>
<div class="flex-grow-5">Flex Grow 5</div>
<div class="flex-grow-6">Flex Grow 6</div>
{% endhighlight %}
