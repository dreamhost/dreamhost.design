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

  <H2>Basic Usage</h2>

  <p>
    Transitions trigger on hover. There are 2 pre-defined transition effects: <code>.scale-up-hover</code> and <code>.scale-down-hover</code>.
  </p>

  <div class="container u-clearfix bg-c-g100 p-2">

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

  <H2>Duration</h2>

  <p>
    There are 5 different, t-shirt sized transition durations. <code>.tr-duration-xs</code>, <code>.tr-duration-s</code>, <code>.tr-duration-m</code>, <code>.tr-duration-l</code>, and <code>.tr-duration-xl</code>.
  </p>
  <p>
    Use <code>.tr-duration-0</code> to reset duration to zero.
  </p>
  <p>
    <code>.tr-duration</code> can also be used as shorthand for <code>.tr-duration-m</code>.
  </p>

  <div class="container u-clearfix bg-c-g100 p-2">
    <p>
      <a class="Button t-center scale-up-hover tr-duration-xs">xs duration</a>
      <a class="Button t-center scale-up-hover tr-duration-s">s duration</a>
      <a class="Button t-center scale-up-hover tr-duration">m duration</a></p>
    <p>
      <a class="Button t-center scale-up-hover tr-duration-l">l duration</a>
      <a class="Button t-center scale-up-hover tr-duration-xl">xl duration</a>
      <a class="Button t-center scale-up-hover tr-duration-0">0 duration</a>
    </p>
  </div>

  {% highlight html %}
  <!-- Transition duration: xs -->
  <a class="Button scale-up-hover tr-duration-xs">Click Here</a>

  <!-- Transition duration: s -->
  <a class="Button scale-up-hover tr-duration-s">Click Here</a>

  <!-- Transition duration: m -->
  <a class="Button scale-up-hover tr-duration-m">Click Here</a>

  <!-- Transition duration: l -->
  <a class="Button scale-up-hover tr-duration-l">Click Here</a>

  <!-- Transition duration: xl -->
  <a class="Button scale-up-hover tr-duration-xl">Click Here</a>

  <!-- No transition duration -->
  <a class="Button scale-up-hover tr-duration-0">Click Here</a>
  {% endhighlight %}

</section>

<hr />

<section class="animations-easing">

  <h2>Easing</h2>

  <p>
    Easing defines the curve on which the transition takes place. Each of the 5 easing options provide a different feel to the transition.
  </p>

  <div class="container u-clearfix bg-c-g100 p-2">
    <a class="Button t-center scale-up-hover tr-duration-xl tr-easing-linear">Linear</a>
    <a class="Button t-center scale-up-hover tr-duration-xl tr-easing-ease">Ease</a>
    <a class="Button t-center scale-up-hover tr-duration-xl tr-easing-cb-scale-up">Scale Up</a>
    <a class="Button t-center scale-up-hover tr-duration-xl tr-easing-cb-scale-in">Scale In</a>
    <a class="Button t-center scale-up-hover tr-duration-xl tr-easing-cb-scale-out">Scale Out</a>
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
