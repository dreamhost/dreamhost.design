---
title: Transitions
layout: page
---

<p class="bg-c-w100">
	<p class="t-4">
		Transitions are mainly used to provide additional context for the hover states of interactive elements like buttons, links, and inputs.
	</p>
</p>

<hr />

<section class="animations p-bottom-5">

<h2>Basic Usage</h2>

<p>
	Transitions trigger on hover. There are 2 pre-defined transition effects: <code>.scale-up-hover</code> and <code>.scale-down-hover</code>.
</p>

<div class="container u-clearfix m-y-4">
	<a class="Button t-center scale-up-hover">Scale up</a>
	<a class="Button t-center scale-down-hover">Scale down</a>
</div>

{% highlight html %}
<!-- Transition: scale up -->
<a class="scale-up-hover">Click here</a>

<!-- Transition: scale down -->
<a class="scale-down-hover">Click here</a>
{% endhighlight %}

</section>

<hr />

<section class="animations-duration p-bottom-5">

<h2>Duration</h2>

<p>
	There are 6 different, transition durations. (1-5) <code>.tr-duration-1</code>. Use <code>.tr-duration-0</code> to reset duration to zero. <code>.tr-duration</code> can also be used as shorthand for <code>.tr-duration-m</code>.
</p>

<div class="container u-clearfix m-y-4">
	<a class="Button t-center scale-up-hover tr-duration-0">0 duration</a>
	<a class="Button t-center scale-up-hover tr-duration-1">1 duration</a>
	<a class="Button t-center scale-up-hover tr-duration-2">2 duration</a>
	<a class="Button t-center scale-up-hover tr-duration-3">3 duration</a>
	<a class="Button t-center scale-up-hover tr-duration-4">4 duration</a>
	<a class="Button t-center scale-up-hover tr-duration-5">5 duration</a>
</div>

{% highlight html %}
<!-- No transition duration -->
<a class="Button scale-up-hover tr-duration-0">Click Here</a>

<!-- Transition duration: 1 -->
<a class="Button scale-up-hover tr-duration-1">Click Here</a>

<!-- Transition duration: 2 -->
<a class="Button scale-up-hover tr-duration-2">Click Here</a>

<!-- Transition duration: 3 -->
<a class="Button scale-up-hover tr-duration-3">Click Here</a>

<!-- Transition duration: 4 -->
<a class="Button scale-up-hover tr-duration-4">Click Here</a>

<!-- Transition duration: 5 -->
<a class="Button scale-up-hover tr-duration-5">Click Here</a>

{% endhighlight %}

</section>

<hr />

<section class="animations-easing">

<h2>Easing</h2>

<p>
	Easing defines the curve on which the transition takes place. Each of the 5 easing options provide a different feel to the transition.
</p>

<div class="container u-clearfix m-y-4">
	<a class="Button t-center scale-up-hover tr-duration-5 tr-easing-linear">Linear</a>
	<a class="Button t-center scale-up-hover tr-duration-5 tr-easing-ease">Ease</a>
	<a class="Button t-center scale-up-hover tr-duration-5 tr-easing-cb-scale-up">Scale Up</a>
	<a class="Button t-center scale-up-hover tr-duration-5 tr-easing-cb-scale-in">Scale In</a>
	<a class="Button t-center scale-up-hover tr-duration-5 tr-easing-cb-scale-out">Scale Out</a>
</div>

{% highlight html %}
<!-- Transition easing: linear -->
<a class="Button scale-up-hover tr-easing-linear">Click Here</a>

<!-- Transition easing: ease -->
<a class="Button scale-up-hover tr-easing-ease">Click Here</a>

<!-- Transition easing: cubic bezier scale-up -->
<a class="Button scale-up-hover tr-easing-cb-scale-up">Click Here</a>

<!-- Transition easing: cubic bezier scale-in -->
<a class="Button scale-up-hover tr-easing-cb-scale-in">Click Here</a>

<!-- Transition easing: cubic bezier scale-out -->
<a class="Button scale-up-hover tr-easing-cb-scale-out">Click Here</a>
{% endhighlight %}

</section>

<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="{{site.baseurl}}/assets/js/scripts.js"></script>
