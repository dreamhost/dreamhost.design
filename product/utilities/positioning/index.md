---
title: Positioning
layout: page
---

<p class="t-4">Positioning utilities determine where elements are located on the screen.</p>

<hr />

## Vertical Align

<div class="u-clearfix bg-lighter-grey t-center p-3">
    <div class="m-bottom g-1_2__m">
        <p class="m-bottom t-2 t-red t-bold">.u-vertical-align-top</p>
        <img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-top" style="height: 200px;" />
        <img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-top" style="height: 50px;" />
    </div>
    <div class="m-bottom g-1_2__m">
        <p class="m-bottom t-2 t-red t-bold">.u-vertical-align-middle</p>
        <img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-middle" style="height: 200px;" />
        <img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-middle" style="height: 50px;" />
    </div>
</div>
<div class="u-clearfix bg-lighter-grey t-center p-3">
    <div class="m-bottom g-1_2__m">
        <p class="m-bottom t-2 t-red t-bold">.u-vertical-align-bottom</p>
        <img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-bottom" style="height: 200px;" />
        <img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-bottom" style="height: 50px;" />
    </div>
    <div class="m-bottom g-1_2__m">
        <p class="m-bottom t-2 t-red t-bold">.u-vertical-align-text-bottom</p>
        <img src="https://www.dreamhost.com/assets/images/robot.presents.right.svg" class="u-vertical-align-text-bottom" style="height: 200px;" />
        <img src="https://www.dreamhost.com/assets/images/logo.symbol.svg" class="u-vertical-align-text-bottom" style="height: 50px;" />
    </div>
</div>

{% highlight html %}
<div>
    <h3>Top</h3>
    <img src="robot.svg" class="u-vertical-align-top" />
    <img src="moon.svg" class="u-vertical-align-top" />
</div>
<div>
    <h3>Middle</h3>
    <img src="robot.svg" class="u-vertical-align-middle" />
    <img src="moon.svg" class="u-vertical-align-middle" />
</div>
<div>
    <h3>Bottom</h3>
    <img src="robot.svg" class="u-vertical-align-bottom" />
    <img src="moon.svg" class="u-vertical-align-bottom" />
</div>
<div>
    <h3>Text Bottom</h3>
    <img src="robot.svg" class="u-vertical-align-text-bottom" />
    <img src="moon.svg" class="u-vertical-align-text-bottom" />
</div>
{% endhighlight %}

<hr />

## White space
<div class="u-clearfix">
    <div class="g-1_2__m">
        <p class="m-bottom-0 t-2 t-red t-bold">.u-ws-normal</p>
        <div class="border u-ws-normal m-bottom" style="width: 170px;">
            All work and no play makes Jack a dull boy.
        </div>
    </div>
    <div class="g-1_2__m">
        <p class="m-bottom-0 t-2 t-red t-bold">.u-ws-nowrap</p>
        <div class="border u-ws-nowrap m-bottom" style="width: 170px;">
            All work and no play makes Jack a dull boy.
        </div>
    </div>
</div>

{% highlight html %}
<div class="border u-ws-normal m-bottom">
    normal
</div>
<div class="border u-ws-nowrap m-bottom">
    nowrap
</div>
{% endhighlight %}

<hr />

## Wordbreak

<div class="u-clearfix">
    <div class="g-1_2__m">
        <p class="m-bottom-0 t-2 t-red t-bold">.u-wb-normal</p>
        <div class="border u-wb-normal m-bottom" style="width: 170px;">
            j3894jrerwfv98cqh3x498ryq349fq38mrf9q3948rymx93q8yf9
        </div>
    </div>
    <div class="g-1_2__m">
        <p class="m-bottom-0 t-2 t-red t-bold">.u-wb-break-all</p>
        <div class="border u-wb-break-all m-bottom" style="width: 170px;">
            j3894jrerwfv98cqh3x498ryq349fq38mrf9q3948rymx93q8yf9
        </div>
    </div>
</div>

{% highlight html %}
<div class="border u-wb-normal m-bottom">
    normal
</div>
<div class="border u-wb-break-all m-bottom">
    break-all
</div>
{% endhighlight %}

<hr />

## Z-index
There are 5 levels of z-index that have classes for use, which correspond to z- variables in <a href="{{site.baseurl}}/utilities/sass/variables/">Variables</a>.

{% highlight html %}
.z-0 { z-index: $z-0; }
.z-1 { z-index: $z-1; }
.z-2 { z-index: $z-2; }
.z-3 { z-index: $z-3; }
.z-4 { z-index: $z-4; }
.z-5 { z-index: $z-5; }
{% endhighlight %}
