---
title: Sass variables
layout: app_new
---

<p class="t-4">Most interfaces can be created using css, but there are sass variables available for building custom elements or the framework itself.</p>

<hr />

## Colors

{% highlight css %}
// Primary Palette
$c-b700: #071c26; // midnight
$c-b300: #0073EC; // azure
$c-p300: #A644E5; // prince
$c-w100: #FFFFFF; // white

// Secondary Palette
$c-t300: #00CAAA; // turtle
$c-r300: #FF4A48; // coral
$c-o300: #F59D00; // tangerine
$c-y300: #FFDA00; // sunflower

// Grayscale
$c-g500: #434F58; // metal
$c-g400: #677983; // galactic
$c-g300: #AFBFC9; // cloudy
$c-g200: #E0E4E8; // smoke
$c-g100: #F4F6F9; // offwhite

//Extended Palette
$c-b500: #1176A5; // royalblue
$c-b100: #CCEFFF; // babyblue
$c-t500: #0D8288; // marina
$c-t100: #E5FEFF; // ice
$c-o500: #664200; // autumn
$c-o100: #FFE0A6; // peach
$c-y500: #6F5F1B; // leather
$c-y100: #FFF4B6; // magnolia
$c-r500: #4F0703; // rust
$c-r100: #FFCCCE; // rose

// Additional
$c-black: #000000; // black
{% endhighlight %}

<hr />

## Typography

### Families

{% highlight css %}
$body: 'Proxima Nova', sans-serif;
$heading: 'Ubuntu', sans-serif;
{% endhighlight %}

### Sizes

{% highlight css %}
$t-6: 2.5rem; // 40px
$t-5: 2.5rem; // 40px
$t-4: 2rem; // 32px
$t-3: 1.5rem; //24px
$t-2: 1.25rem; //20px
$t-1: 1rem; //16px
$t-0: 0.875rem; //14px
{% endhighlight %}

### Line Height

{% highlight css %}
$t-h-5: 3rem; // 48px;
$t-h-4: 2.5rem; // 40px;
$t-h-3: 2rem; // 32px
$t-h-2: 1.5rem; //24px
$t-h-1: 1rem; //16px
$t-h-single: 1; //Current font size
$t-h-double: 2; //Double current font size
{% endhighlight %}

### Weights

{% highlight css %}
$t-lighter: 100;
$t-light: 300;
$t-regular: 500;
$t-bold: 600;
$t-extrabold: 900;
{% endhighlight %}

<hr />

## Borders

{% highlight css %}
$border-size-1: 1px;
$border-size-2: 2px;
$border-radius: 3px;
{% endhighlight %}

<hr />

## Z-Index

{% highlight css %}
$z-0: -1;
$z-1: 1;
$z-2: 10;
$z-3: 100;
$z-4: 1000;
$z-5: 10000;
{% endhighlight %}

<hr />

## Breakpoints

{% highlight css %}
$medium-breakpoint: 750px;
$large-breakpoint: 1050px;
{% endhighlight %}
