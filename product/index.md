---
title: DreamHost.css
layout: page
---

<div class="u-clearfix m-bottom-2">
	<div class="g-3_4__m">
		<p class="t-4">Heavily influenced by functional css frameworks like <a class="t-4" href="http://basscss.com/">BaseCSS</a>, <a class="t-4" href="http://tachyons.io">Tachyons</a> and <a class="t-4" href="http://solid.buzzfeed.com">Buzzfeed Solid</a>, DreamHost.css consists of a collection of single-purpose utility classes alongside DreamHost's branding and some common design patterns.</p>
	</div>
	<div class="g-1_4__m p bg-c-g100">
		<h2 class="m-bottom-3"><a class="t-4" href="https://github.com/dreamhost/dreamhost.css">v 0.3.11</a></h2>
		<ul class="List List--small-bold">
			<li><a href="https://github.com/dreamhost/dreamhost.css">Source files</a></li> <!-- this should be a github release -->
			<li><a href="https://github.com/dreamhost/dreamhost.css/blob/master/dist/latest/dreamhost.css">Compiled CSS</a></li>
			<li><a href="https://github.com/dreamhost/dreamhost.css/blob/master/dist/latest/dreamhost.min.css">Minified CSS</a></li>
		</ul>
	</div>
</div>

<hr />

<h2 class="m-bottom-4">Including in your project</h2>
<p>There are two ways to use DreamHost.css. The fastest way is to just download and link to the <a href="https://github.com/dreamhost/dreamhost.css/blob/master/dist/latest/dreamhost.min.css" target="_blank">compiled css</a>. This will give you access to all the utilities and components necessary to create a DreamHost application.</p>

{% highlight html %}
<link rel="stylesheet" type="text/css" href="dreamhost.min.css">
{% endhighlight %}

<p>If you need more control and want access to the sass, you can download <a href="https://github.com/dreamhost/dreamhost.css" target="_blank">all the source files</a> or use the <a href="http://npmjs.com/package/dreamhost-css" target="_blank">node package</a>. You can then import this into your application however makes sense.</p>

{% highlight bash %}
npm install dreamhost-css
{% endhighlight %}

<p class="m-bottom-0 t-style-italic">Track issues, view the source and make pull requests on <a href="https://github.com/dreamhost/dreamhost.css" target="_blank">GitHub</a>.</p>

