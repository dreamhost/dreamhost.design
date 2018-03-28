---
title: Typography
layout: page
---

<p class="t-4">Typography utilities are prefixed with <strong>t-</strong>.</p>

<hr />

## Fonts
DreamHost uses Ubuntu for headings and Proxima Nova for body text.

<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-heading</p>
	<p class="t-heading">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-body</p>
	<p class="t-body">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-mono</p>
	<p class="t-mono">The quick brown fox jumps over the lazy dog.</p>
</div>

{% highlight html %}
<p class="t-heading">The quick brown fox jumps over the lazy dog.</p>
<p class="t-body">The quick brown fox jumps over the lazy dog.</p>
<p class="t-mono">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}

<hr />

## Sizes

<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-5  <span class="p-left-s t-light t-c-g500">2rem, 32px</span></p>
	<p class="t-5">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-4  <span class="p-left-s t-light t-c-g500">1.5rem, 24px</span></p>
	<p class="t-4">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-g500">.t-3 (default)  <span class="p-left-s t-light t-c-g500">1rem, 16px</span></p>
	<p>The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-2 <span class="p-left-s t-light t-c-g500">0.875rem, 14px</span></p>
	<p class="t-2">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-1 <span class="p-left-s t-light t-c-g500">0.75rem, 12px</span></p>
	<p class="t-1">The quick brown fox jumps over the lazy dog.</p>
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
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-left</p>
	<p class="t-left p-1 border">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-right</p>
	<p class="t-right p-1 border">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-center</p>
	<p class="t-center p-1 border">The quick brown fox jumps over the lazy dog.</p>
</div>


{% highlight html %}
<p class="t-left">The quick brown fox jumps over the lazy dog.</p>
<p class="t-right">The quick brown fox jumps over the lazy dog.</p>
<p class="t-center">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}

<hr />

## Weight

<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-bold</p>
	<p class="t-bold">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-regular</p>
	<p class="t-regular">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-light</p>
	<p class="t-light">The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-lighter</p>
	<p class="t-lighter">The quick brown fox jumps over the lazy dog.</p>
</div>

{% highlight html %}
<p class="t-bold">The quick brown fox jumps over the lazy dog.</p>
<p class="t-regular">The quick brown fox jumps over the lazy dog.</p>
<p class="t-light">The quick brown fox jumps over the lazy dog.</p>
<p class="t-lighter">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}

<hr />

## White space
<div class="u-clearfix">
    <div class="g-1_2__m">
        <p class="m-bottom-0 t-2 t-red t-bold">.u-ws-normal</p>
        <div class="border u-ws-normal m-bottom" style="width: 170px;">
            All work and no play makes Jack a dull boy.
        </div>
    </div>
    <div class="g-1_2__m">
        <p class="m-bottom-0 t-2 t-red t-bold">.u-ws-nowrap</p>
        <div class="border u-ws-nowrap m-bottom" style="width: 170px;">
            All work and no play makes Jack a dull boy.
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
    <div class="g-1_2__m">
        <p class="m-bottom-0 t-2 t-red t-bold">.u-wb-normal</p>
        <div class="border u-wb-normal m-bottom" style="width: 170px;">
            j3894jrerwfv98cqh3x498ryq349fq38mrf9q3948rymx93q8yf9
        </div>
    </div>
    <div class="g-1_2__m">
        <p class="m-bottom-0 t-2 t-red t-bold">.u-wb-break-all</p>
        <div class="border u-wb-break-all m-bottom" style="width: 170px;">
            j3894jrerwfv98cqh3x498ryq349fq38mrf9q3948rymx93q8yf9
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
	<p class="m-bottom-0 t-2 t-c-r300 t-bold">.t-caret</p>
	<p class="t-caret">This text has a caret.</p>
</div>

{% highlight html %}
<p class="t-caret">This text has a caret.</p>
{% endhighlight %}
