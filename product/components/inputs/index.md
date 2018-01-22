---
title: Inputs & Select
layout: page
---

<p class="t-4">Mix and match inputs to create your own Forms.</p>

<hr />
## Block inputs

<div class="Form__group">
	<label for="input1" class="Form__label">Text label</label>
	<input id="input1" type="text" class="Input" placeholder="Example placeholder content">
</div>

{% highlight html %}
<div class="Form__group">
	<label for="input1" class="Form__label">Text label</label>
	<input id="input1" type="text" class="Input" placeholder="Example placeholder content">
</div>
{% endhighlight %}

<hr />
## Inline-block inputs

<div class="Form__inline">
	<div class="Form__inline-grid">
		<div class="Form__inline-row">
			<div class="Form__group">
				<label for="input2" class="Form__label">Half label</label>
				<input id="input2" type="text" class="Input" placeholder="Example placeholder content">
			</div>
			<div class="Form__group">
				<label for="input3" class="Form__label">Half label</label>
				<input id="input3" type="text" class="Input" placeholder="Example placeholder content">
			</div>
		</div>
	</div>
</div>

{% highlight html %}
<div class="Form__inline">
	<div class="Form__inline-grid">
		<div class="Form__inline-row">
			<div class="Form__group">
				<label for="input2" class="Form__label">Half label</label>
				<input id="input2" type="text" class="Input" placeholder="Example placeholder content">
			</div>
			<div class="Form__group">
				<label for="input3" class="Form__label">Half label</label>
				<input id="input3" type="text" class="Input" placeholder="Example placeholder content">
			</div>
		</div>
	</div>
</div>
{% endhighlight %}

<hr />
## Textareas

<div class="Form__group">
	<label for="textarea1" class="Form__label">Text label</label>
	<p class="Form__description">This caption supports a <strong>non-ludicrous</strong> amount of text. <a href="#">Learn more.</a></p>
	<textarea id="textarea1" class="Input" placeholder="Example placeholder content"></textarea>
</div>

{% highlight html %}
<div class="Form__group">
	<label for="textarea1" class="Form__label">Text label</label>
	<p class="Form__description">This caption supports a <strong>non-ludicrous</strong> amount of text. <a href="#">Learn more.</a></p>
	<textarea id="textarea1" class="Input" placeholder="Example placeholder content"></textarea>
</div>
{% endhighlight %}

<hr />
## Select menus

<div class="Form__group Form__group--select">
	<label for="select1" class="Form__label">Select label</label>
	<select id="select1" class="Select">
		<option>Option 1</option>
		<option>Option 2</option>
		<option>Option 3</option>
		<option>Option 4</option>
		<option>Option 5</option>
	</select>
</div>

{% highlight html %}
<div class="Form__group Form__group--select">
	<label for="select1" class="Form__label">Select label</label>
	<select id="select1" class="Select">
		<option>Option 1</option>
		<option>Option 2</option>
		<option>Option 3</option>
		<option>Option 4</option>
		<option>Option 5</option>
	</select>
</div>
{% endhighlight %}
