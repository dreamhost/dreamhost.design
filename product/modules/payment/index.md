---
title: Payment Module
layout: app
---

<p class="t-4">Useful for selecting payment options. Makes use of the <a href="{{site.baseurl}}/components/choice-box/">Choice Box</a> component.</p>

<hr />

<p><code>.Payment</code> options live in a <code>.Payment-container</code>. Add <code>.Payment--autopay</code> to <code>.Payment</code> to include the <span class="t-c-o300 t-bold">(Autopay)</span> callout.</p>

<p>Use <code>.Payment__actions--primary</code>, <code>.Payment__actions--secondary</code>, or <code>.Payment__actions--danger</code> for payment actions, accordingly.</p>

<div class="Payment-container m-bottom-5">
	<ul>
		<li class="Payment Payment--autopay ChoiceBox">
			<input type="radio" class="ChoiceBox__radio"
				name="example" id="example" value="example" />
			<label for="example" class="ChoiceBox__label">
				<div class="ChoiceBox__title">
					Example Title
				</div>
				<div class="ChoiceBox__content">
					This is one of two choice boxes that appear
					next to each other.
					<div class="Payment__actions">
						<button class="Button Button--text Payment__actions--primary" data-remodal-target="test-modal">Edit</button>
					</div>
				</div>
			</label>
		</li>
		<li class="Payment ChoiceBox">
			<input type="radio" class="ChoiceBox__radio"
				name="example" id="example2" value="example" />
			<label for="example2" class="ChoiceBox__label">
				<div class="ChoiceBox__title">
					Example Title
				</div>
				<div class="ChoiceBox__content">
					This is one of two choice boxes that appear
					next to each other.
					<div class="Payment__actions">
						<a href="javascript:void(0)" class="Button Button--text Payment__actions--primary">Set as Autopay</a><br />
						<a href="javascript:void(0)" class="Button Button--text Payment__actions--danger">Delete</a>
					</div>
				</div>
			</label>
		</li>
	</ul>
	<button class="Button Button--block">Add Payment Option</button>
</div>

{% highlight html %}
<div class="Payment-container">
	<ul>
		<li class="Payment Payment--autopay ChoiceBox">
			<input type="radio" class="ChoiceBox__radio"
				name="example" id="example" value="example" />
			<label for="example" class="ChoiceBox__label">
				<div class="ChoiceBox__title">
					Example Title
				</div>
				<div class="ChoiceBox__content">
					This is one of two choice boxes that appear
					next to each other.
					<div class="Payment__actions">
						<button class="Button Button--text Payment__actions--primary" data-remodal-target="test-modal">Edit</button>
					</div>
				</div>
			</label>
		</li>
	</ul>
</div>
{% endhighlight %}
