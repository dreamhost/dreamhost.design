---
title: Toggle Switch
layout: page
---

<p class="t-4">A two state toggle switch, for use when there is a definitive choice between two options. Each toggle switch must have a unique input <code>id</code> &amp; corresponding <code>for</code> attribute to function independently.</p>

<hr />

<div class="Toggle m-bottom-4">
	<input class="Toggle__input" type="checkbox" id="toggleff" />
	<label for="toggleff" class="Toggle__label">
		<span class="Toggle__description">
			<span class="Toggle__checked">On</span>
			<span class="Toggle__unchecked">Off</span>
		</span>
		<span class="Toggle__visible"></span>
	</label>
</div>

{% highlight html %}
<div class="Toggle">
	<input class="Toggle__input" type="checkbox" id="UNIQUE-ID" />
	<label for="UNIQUE-ID" class="Toggle__label">
		<span class="Toggle__description">
			<span class="Toggle__checked">On</span>
			<span class="Toggle__unchecked">Off</span>
		</span>
		<span class="Toggle__visible"></span>
	</label>
</div>
{% endhighlight%}