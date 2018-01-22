---
title: Cards
layout: page
---

<p class="t-4">Useful for displaying a heading, content, and call-to-action in a box.
    Optionally supports a label, and two different sized icons. Use with
    the <a href="{{site.baseurl}}/utilities/grid/">Grid</a> for positioning.</p> <p class="t-4">Cards can also use flexbox so that they all occupy the same vertical space. They must be wrapped by the <code>.Card__wrapper</code> class to flex correctly.</p>

<hr />

<h2>Card</h2>
<div class="container-m m-bottom-5">
    <div class="Card g-1_3">
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button">Go!</a>
    </div>
    <div class="Card g-1_3">
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button">Go!</a>
    </div>
    <div class="Card g-1_3">
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button">Go!</a>
    </div>
</div>

{% highlight html %}
<div class="Card g-1_3">
    <h3 class="Card__heading">Whatever</h3>
    <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href="#" class="Button">Go!</a>
</div>
{% endhighlight %}

<hr />

<h2>Card With Icon</h2>
<div class="container-m m-bottom-5 u-clearfix">
    <div class="Card g-1_3">
        <img src="{{site.baseurl}}/assets/images/icon.powercycle.svg" class="Card__icon" />
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button Button--text">Go!</a>
    </div>
    <div class="Card g-1_3">
        <img src="{{site.baseurl}}/assets/images/icon.reboot.svg" class="Card__icon" />
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button Button--text">Go!</a>
    </div>
    <div class="Card g-1_3">
        <img src="{{site.baseurl}}/assets/images/icon.restore.svg" class="Card__icon" />
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button Button--text">Go!</a>
    </div>
</div>

{% highlight html %}
<div class="Card g-1_3">
    <img src="src/image.svg" class="Card__icon" />
    <h3 class="Card__heading">Whatever</h3>
    <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href="#" class="Button Button--text">Go!</a>
</div>
{% endhighlight %}

<hr />

<h2>Card With Large Icon</h2>
<div class="container-m m-bottom-5">
    <div class="Card g-1_3">
        <img src="{{site.baseurl}}/assets/images/icon.hosting.svg" class="Card__large-icon" />
        <label class="Card__super">Superscript</label>
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button">Go!</a>
    </div>
    <div class="Card g-1_3">
        <img src="{{site.baseurl}}/assets/images/icon.billing.svg" class="Card__large-icon" />
        <label class="Card__super">Superscript</label>
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button">Go!</a>
    </div>
    <div class="Card g-1_3">
        <img src="{{site.baseurl}}/assets/images/icon.hosting.svg" class="Card__large-icon" />
        <label class="Card__super">Superscript</label>
        <h3 class="Card__heading">Whatever</h3>
        <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="Button">Go!</a>
    </div>
</div>

{% highlight html %}
<div class="Card g-1_3">
    <img src="src/image.svg" class="Card__large-icon" />
    <label class="Card__super">Superscript</label>
    <h3 class="Card__heading">Whatever</h3>
    <p class="Card__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href="#" class="Button">Go!</a>
</div>
{% endhighlight %}
