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

<h2 class="m-bottom-4">Defaults</h2>

<div>
	<h1>H1 - Ubuntu Regular <span class="t-light">- 2.5rem / 40px / 48px</span></h1>
	<h2>H2 - Ubuntu Regular <span class="t-light">- 2rem / 32px / 40px</span></h2>
	<h3>H3 - Ubuntu Regular <span class="t-light">- 1.5rem / 24px / 32px</span></h3>
	<h4>H4 - Ubuntu Regular <span class="t-light">- 1.25rem / 20px / 32px</span></h4>
</div>

<div>
	<p>Paragraph text - Promixa Nova <span class="t-light">- 1rem / 16px / 24px</span></p>
	<p><strong>Strong text - Promixa Nova <span class="t-light">- 1rem / 16px / 24px</span></strong></p>
	<p><a href="#"> A Link text - Promixa Nova <span class="t-light">- 1rem / 16px / 24px</span></a></p>
	<p><label>Label text</label> - Promixa Nova <span class="t-light">- 1rem / 16px / 24px</span></p>
	<p><code>Code text</code> - Monospace <span class="t-light">- 1rem / 16px / 16px</span></p>
</div>

{% highlight html %}
<h1>Heading One</h1>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
<h4>Heading Four</h4>
<p>Paragraph text</p>
<p><strong>Strong paragraph text</strong></p>
<a href="#">Link text</a>
<code>Code text</code>
<label>Label text</label>
{% endhighlight %}

<hr />

## Custom Sizes

<div class="m-bottom-2">
	<p class="t-5 m-bottom-0"><strong>(.t-5)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">2.5rem, 40px</span>
</div>
<div class="m-bottom-2">
	<p class="t-4 m-bottom-0"><strong>(.t-4)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">2rem, 32px</span>
</div>
<div class="m-bottom-2">
	<p class="t-3 m-bottom-0"><strong>(.t-3)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">1.5rem, 24px</span>
</div>
<div class="m-bottom-2">
	<p class="t-2 m-bottom-0"><strong>(.t-2)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">1.25rem, 20px</span>
</div>
<div class="m-bottom-2">
	<p class="t-1 m-bottom-0"><strong>(.t-1)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">1rem, 16px</span>
</div>
<div class="m-bottom-2">
	<p class="t-0 m-bottom-0"><strong>(.t-0)</strong> The quick brown fox jumps over the lazy dog.</p>
	<span class="t-light t-c-g500">0.875rem, 14px</span>
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

## Styles

<div>
	<p class="t-decoration-underline"><strong>(.t-decoration-underline)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-decoration-none"><strong>(.t-decoration-none)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-style-italic"><strong>(.t-style-italic)</strong> The quick brown fox jumps over the lazy dog.</p>
</div>

{% highlight html %}
<p class="t-decoration-underline">The quick brown fox jumps over the lazy dog.</p>
<p class="t-decoration-none">The quick brown fox jumps over the lazy dog.</p>
<p class="t-style-italic">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}


<hr />

## Transform
<div>
	<p><strong>(.t-transform-uppercase)</strong> <span class="t-transform-uppercase">The quick brown fox jumps over the lazy dog.</span></p>
</div>
<div>
	<p><strong>(.t-transform-capitalize)</strong> <span class="t-transform-capitalize">The quick brown fox jumps over the lazy dog.</span></p>
</div>
<div>
	<p class="t-transform-lowercase"><strong>(.t-transform-lowercase)</strong>  The quick brown fox jumps over the lazy dog.</p>
</div>
<div>
	<p class="t-transform-none"><strong>(.t-transform-none)</strong>  The quick brown fox jumps over the lazy dog.</p>
</div>

{% highlight html %}
<p class="t-transform-uppercase">The quick brown fox jumps over the lazy dog.</p>
<p class="t-transform-capitalize">The quick brown fox jumps over the lazy dog.</p>
<p class="t-transform-lowercase">The quick brown fox jumps over the lazy dog.</p>
<p class="t-transform-none">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}

<hr />

## Line Heights

<p class="m-bottom-4">Default line heights are set to align with our 8px baseline grid. An optional <strong>1-5</strong> value line height is available for use to override defaults.</p>

<p class="t-5 m-bottom-4 t-line-height-5"><strong>.t-line-height-5 / 3rem, 48px</strong> - The quick brown fox jumps over the lazy dog.</p>
<p class="t-4 m-bottom-4 t-line-height-4"><strong>.t-line-height-4 / 2.5rem, 40px</strong> - The quick brown fox jumps over the lazy dog.</p>
<p class="t-3 m-bottom-4 t-line-height-3"><strong>.t-line-height-3 / 2rem, 32px</strong> - The quick brown fox jumps over the lazy dog and feels as if he were in the seventh heaven of typography together with Hermann Zapf.</p>
<p class="t-2 m-bottom-4 t-line-height-2"><strong>.t-line-height-2 / 1.5rem, 24px</strong> - The quick brown fox jumps over the lazy dog and feels as if he were in the seventh heaven of typography together with Hermann Zapf.</p>
<p class="t-1 m-bottom-4 t-line-height-1"><strong>.t-line-height-1 / 1rem, 16px</strong> - The quick brown fox jumps over the lazy dog and feels as if he were in the seventh heaven of typography together with Hermann Zapf.</p>

{% highlight html %}
<p class="t-line-height-1">The quick brown fox jumps over the lazy dog.</p>
{% endhighlight %}


<hr />

## Text Caret

<div>
	<p class="t-caret"><strong>(.t-caret)</strong> This text has a caret.</p>
</div>

{% highlight html %}
<p class="t-caret">This text has a caret.</p>
{% endhighlight %}
