---
title: Checkboxes
layout: page
---

<p class="t-4">Checkboxes allow users to easily select one or more of several options.</p>

<hr />

<div class="container-full-width">
	<div class="Form__group g-1_2__m">
		<label class="Form__label">Checkbox label</label>
		<label class="Choice">
			<input type="checkbox" name="check1" checked>
			<span class="Choice__label">Example checkbox label</span>
		</label>
		<label class="Choice">
			<input type="checkbox" name="check1">
			<span class="Choice__label">Example checkbox label</span>
		</label>
		<label class="Choice">
			<input type="checkbox" name="check1">
			<span class="Choice__label">Example checkbox label</span>
		</label>
		<label class="Choice">
			<input type="checkbox" name="check1">
			<span class="Choice__label">Example checkbox label</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="Form__group g-1_2">
	<label class="Form__label">Checkbox label</label>
	<label class="Choice">
		<input type="checkbox" name="check1" checked>
		<span class="Choice__label">Example checkbox label</span>
	</label>
	<label class="Choice">
		<input type="checkbox" name="check1">
		<span class="Choice__label">Example checkbox label</span>
	</label>
</div>
{% endhighlight %}

<hr />
## Checkboxes With Descriptions
<div class="container-full-width">
	<div class="Form__group">
		<label class="Form__label">Checkbox label</label>
		<label class="Choice">
			<input type="checkbox" name="check1" checked>
			<span class="Choice__label">Example checkbox label that is really long and probably wraps really awkwardly</span>
			<span class="Choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
		<label class="Choice">
			<input type="checkbox" name="check1">
			<span class="Choice__label">Example checkbox label that is really long and probably wraps really awkwardly</span>
			<span class="Choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
		</label>
	</div>
</div>

{% highlight html %}
<div class="Form__group">
	<label class="Form__label">Checkbox label</label>
	<label class="Choice">
		<input type="checkbox" name="check1" checked>
		<span class="Choice__label">Example checkbox label that is really long and probably wraps really awkwardly</span>
		<span class="Choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
	<label class="Choice">
		<input type="checkbox" name="check1">
		<span class="Choice__label">Example checkbox label that is really long and probably wraps really awkwardly</span>
		<span class="Choice__description">Help explain what this choice is in more text than should be necessary to see how text wraps</span>
	</label>
</div>
{% endhighlight %}

<hr />

## Checkbox as a toggle

<div class="Toggle m-bottom-5">
	<input class="Toggle__input" type="checkbox" id="toggle" />
	<label for="toggle" class="Toggle__label">
		<span class="Toggle__description">
			<span class="Toggle__checked">On</span>
			<span class="Toggle__unchecked">Off</span>
		</span>
		<span class="Toggle__visible"></span>
	</label>
</div>

{% highlight html %}
<div class="Toggle">
	<input class="Toggle__input" type="checkbox" id="toggle" />
	<label for="toggle" class="Toggle__label">
		<span class="Toggle__description">
			<span class="Toggle__checked">On</span>
			<span class="Toggle__unchecked">Off</span>
        </span>
		<span class="Toggle__visible"></span>
	</label>
</div>
{% endhighlight %}
