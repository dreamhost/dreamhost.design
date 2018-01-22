---
title: Shopping Cart Module
layout: page
---

<p class="t-4">The cart module consists of a <strong>header</strong> <code>Cart__header</code> <strong>footer</strong> <code>Cart__footer</code> &amp; <strong>steps</strong> <code>Cart__step</code> with various states <code>Cart__step--next</code> <code>Cart__step--complete</code> <code>Cart__step--incomplete</code> some of which can contain price and payment frequency as HTML.</p>

<hr />

<div class="w-50 m-bottom-7">

<div class="Cart__wrapper">
    <div class="Cart__header">
        <h3>CART HEADER</h3>
        <p>Cart Description</p>
    </div><!--Cart__header-->
    <div class="Cart__step Cart__step--complete">
        <div class="Cart__actions">
            <p class="Cart__heading">Cart step (Complete)</p>
            <a href="#">Step Button</a><a href="#">Step Button</a>
        </div><!--Cart__actions--><p class="Cart__step-price">$0.00 <span>Frequency</span></p>
    </div><!--Cart__step-->
    <div class="Cart__step">
        <div class="Cart__actions">
            <p class="Cart__heading">Cart step (Active)</p>
            <a href="#">Step Button</a>
        </div><!--Cart__actions--><p class="Cart__step-price">$0.00 <span>Frequency</span></p>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--next">
            <p class="Cart__heading">Cart step (Next)</p>
            <span>Description</span>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--incomplete">
            <p class="Cart__heading">Cart step (Incomplete)</p>
    </div><!--Cart__step-->
    <div class="Cart__footer">
        <div class="Cart__total-price"><p>Total amount due</p><span>$0.00</span></div>
    </div><!--Cart__footer-->
</div><!--Cart__wrapper-->

</div>

{% highlight html %}
<div class="Cart__wrapper">
    <div class="Cart__header">
        <h3>CART HEADER</h3>
        <p>Cart Description</p>
    </div><!--Cart__header-->
    <div class="Cart__step Cart__step--complete">
        <div class="Cart__actions">
            <p class="Cart__heading">Cart step (Complete)</p>
            <a href="#">Step Button</a><a href="#">Step Button</a>
        </div><!--Cart__actions--><p class="Cart__step-price">$0.00 <span>Frequency</span></p>
    </div><!--Cart__step-->
    <div class="Cart__step">
        <div class="Cart__actions">
            <p class="Cart__heading">Cart step (Active)</p>
            <a href="#">Step Button</a>
        </div><!--Cart__actions--><p class="Cart__step-price">$0.00 <span>Frequency</span></p>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--next">
            <p class="Cart__heading">Cart step (Next)</p>
            <span>Description</span>
    </div><!--Cart__step-->
    <div class="Cart__step Cart__step--incomplete">
            <p class="Cart__heading">Cart step (Incomplete)</p>
    </div><!--Cart__step-->
    <div class="Cart__footer">
        <div class="Cart__total-price"><p>Total amount due</p><span>$0.00</span></div>
    </div><!--Cart__footer-->
</div><!--Cart__wrapper-->
{% endhighlight%}