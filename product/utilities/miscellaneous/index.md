---
title: Miscellaneous
layout: page
---

<p class="t-4">A page dedicated to other various utility classes.</p>

<hr />

<h2 class="m-bottom-4">Border Radius</h2>

#### All corners are specified by default.

<div class="p-4 border u-border-radius m-bottom-4">
		<p class ="m-0">Border radius</p>
</div>

{% highlight html %}
	<div class="p-4 border u-border-radius">
		<p>Border radius</p>
	</div>
{% endhighlight %}


<hr />

<h2 class="m-bottom-4">Clearfix</h2>

#### The clearfix utility is used on elements that need to self-clear their child elements. Use <code>.u-clearfix</code> or <code>.u-cf</code> to prevent floated elements from overflowing.


<p class="Alert m-top-4">
<strong>Please Note:</strong> Don't forget to attach a wrapper with the <code>.u-clearfix</code> class to floats and legacy grids.</p>

<div class="bg-c-g200 border-radius p-2 m-bottom-4">
	<div class="u-clearfix m-top-2 m-bottom-2">
		<div class="bg-c-g100 border-radius p-4 l-float-left"><strong>.l-float-left</strong></div>
		<div class="bg-c-g100 border-radius p-4 l-float-right"><strong>.l-float-right</strong></div>
	</div>
	<div class="u-clearfix m-bottom-2">
		<div class="bg-c-g100 border-radius p-4 t-center g-1_3"><strong>.g-1_3</strong></div>
		<div class="bg-c-g100 border-radius p-4 t-center g-2_3"><strong>.g-2_3</strong></div>
	</div>
</div>

{% highlight html %}
<div class="u-clearfix">
	<div class="l-float-left">.l-float-left</div>
	<div class="l-float-right">.l-float-right</div>
</div>
<div class="u-clearfix">
	<div class="g-1_3">.g-1_3</div>
	<div class="g-2_3">.g-2_3</div>
</div>
{% endhighlight %}

{% highlight html %}
.u-clearfix {@include clearfix;}
{% endhighlight %}



<hr />

<h2 class="m-bottom-4">Overflow</h2>

#### The <code>overflow-x</code> specifies for overflows at the left or right edges, and <code>overflow-y</code> specifies for top and bottom edges.

<div class="Grid--auto m-bottom-6">
<div class="bg-c-g200 p-2 m-bottom-2 u-border-radius u-overflow-visible" style="height:150px">
	<code class="m-0">.u-overflow-visible</code>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab.</p>
</div>
<div class="bg-c-g200 p-2 m-bottom-2 u-border-radius u-overflow-hidden" style="height:150px">
	<code class="m-0">.u-overflow-hidden</code>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab.</p>
</div>
<div class="bg-c-g200 p-2 m-bottom-2 u-border-radius u-overflow-scroll" style="height:150px">
	<code class="m-0">.u-overflow-scroll</code>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab.</p>
</div>
</div><!--Grid-->

{% highlight html %}
<div class="u-overflow-visible">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="u-overflow-hidden">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="u-overflow-scroll">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="u-overflow-x-visible">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="u-overflow-x-hidden">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="u-overflow-x-scroll">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="u-overflow-y-visible">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="u-overflow-y-hidden">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="u-overflow-y-scroll">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>

{% endhighlight %}


<hr />

<h2 class="m-bottom-4">Vertical Align</h2>

#### The <code>vertical-align</code> property controls how how row elements are aligned. Use <code>text-bottom</code> to align to the bottom of element's font.

<div class="Grid--auto bg-c-g100 t-center p-3 m-bottom-2">
		<div class="border p-2 t-c-g200">
				<p class="t-2 t-c-g500"><strong>.u-vertical-align-top</strong></p>
				<img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-top" style="height: 100px;" />
				<img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-top" style="height: 50px;" />
		</div>
		<div class="border p-2 t-c-g200">
				<p class="t-2 t-c-g500"><strong>.u-vertical-align-middle</strong></p>
				<img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-middle" style="height: 100px;" />
				<img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-middle" style="height: 50px;" />
		</div>
		<div class="border p-2 t-c-g200">
				<p class="t-2 t-c-g500"><strong>.u-vertical-align-bottom</strong></p>
				<img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-bottom" style="height: 100px;" />
				<img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-bottom" style="height: 50px;" />
		</div>
		<div class="border p-2 t-c-g200">
				<p class="t-2 t-c-g500"><strong>.u-vertical-align-text-bottom</strong></p>
				<img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-text-bottom" style="height: 100px;" />
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

<h2 class="m-bottom-4">White space</h2>

#### This sets how white space inside an element is rendered.

<div class="Grid--auto m-bottom-2">
	<div class="bg-c-g100 p-2">
		<div class="g-1_2 bg-c-g200 u-ws-normal m-bottom-0 p-2">
			<p class="t-2 t-c-g500"><strong>.u-ws-normal</strong></p> All work and no play makes Jack a dull boy.
		</div>
	</div>
	<div class="bg-c-g100 p-2">
			<div class="g-1_2 bg-c-g200 u-ws-nowrap m-bottom-0 p-2">
				<p class="t-2 t-c-g500"><strong>.u-ws-nowrap</strong></p>All work and no play makes Jack a dull boy.
			</div>
	</div>
</div>

{% highlight html %}
<div class="border u-ws-normal m-bottom">
	<p>.u-ws-normal</p>
</div>
<div class="border u-ws-nowrap m-bottom">
	<p>.u-ws-nowrap</p>
</div>
{% endhighlight %}


<hr />

<h2 class="m-bottom-4">Wordbreak</h2>

#### You can specify words to be broken and wrapped onto the next line.

<div class="Grid--auto m-bottom-2">
	<div class="bg-c-g100 p-2">
		<div class="bg-c-g200 g-1_2 p-2 u-wb-normal m-bottom-0 border-radius">
				<p class="t-2 t-c-g500"><strong>.u-wb-normal</strong></p>j3894jrerwfv98cqh3x498ryq349fq38mrf9q3948rymx93q8yf9
		</div>
	</div>
	<div class="bg-c-g100 p-2">
		<div class="bg-c-g200 g-1_2 p-2 u-wb-break-all m-bottom-0 border-radius">
				<p class="t-2 t-c-g500"><strong>.u-wb-break-all</strong></p> j3894jrerwfv98cqh3x498ryq349fq38mrf9q3948rymx93q8yf9
		</div>
	</div>
</div>

{% highlight html %}
<div class="border u-wb-normal m-bottom">
	<p>.u-wb-normal</p>
</div>
<div class="border u-wb-break-all m-bottom">
	<p>.u-wb-break-all</p>
</div>
{% endhighlight %}