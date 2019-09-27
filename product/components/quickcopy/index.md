---
title: Quickcopy
layout: app
---

<p class="t-4">Quick copy code component. To assist users in copying information more effienciently than traditional keyboard copy and paste shortcuts.</p>

<hr />

<div class="Panel__code Quickcopy js-quickcopy m-bottom-4">
	<div class="Quickcopy__text js-quickcopy-text">
		<code>This is an example of a quickcopy code component</code>
		<svg title="Copy to clipboard" class="Icon Icon--size-1 m-x-1 Quickcopy__btn js-quickcopy-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51"><path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z"/><path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z"/></svg>
	</div><!--Quickcopy__text-->
	<div class="Quickcopy__message">Copied!
		<svg class="Icon Icon--size-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.4 18.8l14-15.4c1.7-1.8 4.5-1.9 6.3-.1 1.7 1.7 1.8 4.5.2 6.3L14.3 27.9c-1.3 2.1-4 2.8-6.1 1.4-.4-.3-.8-.6-1.1-1l-5.8-6c-1.7-1.8-1.6-4.7.1-6.5 1.7-1.7 4.4-1.7 6.2 0l2.8 3z"/></svg>
	</div><!--Copied-->
</div><!--Panel__code-->


{% highlight html %}
<div class="Panel__code Quickcopy js-quickcopy">
	<div class="Quickcopy__text js-quickcopy-text">
		<code>This is an example of a quickcopy code component</code>
		<svg title="Copy to clipboard" class="Icon Icon--size-1 m-x-1 Quickcopy__btn js-quickcopy-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 51"><path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z"/><path d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z"/></svg>
	</div><!--Quickcopy__text-->
	<div class="Quickcopy__message">Copied!
		<svg class="Icon Icon--size-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.4 18.8l14-15.4c1.7-1.8 4.5-1.9 6.3-.1 1.7 1.7 1.8 4.5.2 6.3L14.3 27.9c-1.3 2.1-4 2.8-6.1 1.4-.4-.3-.8-.6-1.1-1l-5.8-6c-1.7-1.8-1.6-4.7.1-6.5 1.7-1.7 4.4-1.7 6.2 0l2.8 3z"/></svg>
	</div><!--Copied-->
</div><!--Panel__code-->
{% endhighlight %}