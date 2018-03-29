---
title: Typography
layout: page
---

<p class="t-4">Typography utilities are prefixed with <strong>t-</strong>.</p>

<hr />

## Fonts
DreamHost uses Ubuntu for headings and Proxima Nova for body text.

<div>
	<p class="t-heading t-5"><strong>(.t-heading)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-body"><strong>(.t-body)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-mono"><strong>(.t-mono)</strong>The quick brown fox jumps over the lazy dog.</p>
</div>

{% highlight html %}
<p class="t-heading">The quick brown fox jumps over the lazy dog.</p>
<p class="t-body">The quick brown fox jumps over the lazy dog.</p>
<p class="t-mono">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}

<hr />

## Sizes

<div class="m-bottom-2">
	<p class="t-5 m-bottom-0"><strong>(.t-5)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">2rem, 32px</span>
</div>
<div class="m-bottom-2">
	<p class="t-4 m-bottom-0"><strong>(.t-4)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">1.5rem, 24px</span>
</div>
<div class="m-bottom-2">
	<p class="t-3 m-bottom-0"><strong>(.t-3 - default)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">1rem, 16px</span>
</div>
<div class="m-bottom-2">
	<p class="t-2 m-bottom-0"><strong>(.t-2)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">0.875rem, 14px</span>
</div>
<div class="m-bottom-2">
	<p class="t-1 m-bottom-0"><strong>(.t-1)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">0.75rem, 12px</span>
</div>

{% highlight html %}
<p class="t-5">The quick brown fox jumps over the lazy dog.</p>
<p class="t-4">The quick brown fox jumps over the lazy dog.</p>
<p class="t-3">The quick brown fox jumps over the lazy dog.</p>
<p class="t-2">The quick brown fox jumps over the lazy dog.</p>
<p class="t-1">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}

<hr />

## Alignment

<div>
	<p class="t-left p-1 bg-c-g100"><strong>(.t-left)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-right p-1 bg-c-g100"><strong>(.t-right)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-center p-1 bg-c-g100"><strong>(.t-center)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>


{% highlight html %}
<p class="t-left">The quick brown fox jumps over the lazy dog.</p>
<p class="t-right">The quick brown fox jumps over the lazy dog.</p>
<p class="t-center">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}

<hr />

## Weight

<div>
	<p class="t-bold"><strong>(.t-bold)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-regular">(.t-regular) The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-light">(.t-light) The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-lighter">(.t-lighter) The quick brown fox jumps over the lazy dog.</p>
</div>

{% highlight html %}
<p class="t-bold">The quick brown fox jumps over the lazy dog.</p>
<p class="t-regular">The quick brown fox jumps over the lazy dog.</p>
<p class="t-light">The quick brown fox jumps over the lazy dog.</p>
<p class="t-lighter">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}

<hr />

## White space
<div class="u-clearfix m-bottom-2">
	<div class="g-1_2__m bg-c-g100 p-2">
		<div class="g-1_2 bg-c-g200 u-ws-normal m-bottom-0 p-2">
			<strong>(.u-ws-normal)</strong> All work and no play makes Jack a dull boy.
		</div>
	</div>
	<div class="g-1_2__m bg-c-g100 p-2">
				<div class="g-1_2 bg-c-g200 u-ws-nowrap m-bottom-0 p-2">
						<strong>(.u-ws-nowrap)</strong> All work and no play makes Jack a dull boy.
				</div>
		</div>
</div>

{% highlight html %}
<div class="border u-ws-normal m-bottom">
		normal
</div>
<div class="border u-ws-nowrap m-bottom">
		nowrap
</div>
{% endhighlight %}

<hr />

## Wordbreak

<div class="u-clearfix">
	<div class="g-1_2__m bg-c-g100 p-2">
		<div class="bg-c-g200 g-1_2 p-2 u-wb-normal m-bottom-0 border-radius">
				<strong>(.u-wb-normal)</strong> j3894jrerwfv98cqh3x498ryq349fq38mrf9q3948rymx93q8yf9
		</div>
	</div>
	<div class="g-1_2__m bg-c-g100 p-2 m-bottom-2">
		<div class="bg-c-g200 g-1_2 p-2 u-wb-break-all m-bottom-0 border-radius">
				<strong>(.u-wb-break-all)</strong> j3894jrerwfv98cqh3x498ryq349fq38mrf9q3948rymx93q8yf9
		</div>
	</div>
</div>

{% highlight html %}
<div class="border u-wb-normal m-bottom">
	normal
</div>
<div class="border u-wb-break-all m-bottom">
	break-all
</div>
{% endhighlight %}

<hr />

## Text Caret

<div>
	<p class="t-caret"><strong>(.t-caret)</strong> This text has a caret.</p>
</div>

{% highlight html %}
<p class="t-caret">This text has a caret.</p>
{% endhighlight %}
