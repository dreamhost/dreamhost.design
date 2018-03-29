---
title: Sass variables
layout: page
---

<p class="t-4">Most interfaces can be created using css, but there are sass variables available for building custom elements or the framework itself.</p>

<hr />

## Colors

{% highlight css %}
//Backgrounds
$c-b700: #071c26; //midnight
$c-w100: #ffffff; //white

//Grayscale
$c-black: #000000; //black
$c-g500: #434F58; //metal
$c-g400: #677983; //galactic
$c-g300: #AFBFC9; //cloudy
$c-g200: #E0E4E8; //smoke
$c-g100: #F4F6F9; //offwhite

//Primary Accent
$c-b500: #1176A5; //royalblue
$c-b300: #00AFEF; //azure
$c-b100: #CCEFFF; //babyblue

// Checkout Accent
$c-o500: #664200; //autumn
$c-o300: #F59D00; //tangerine
$c-o100: #FFE0A6; //peach

// Positive Accent
$c-t500: #0D8288; //marina
$c-t300: #00CAAA; //turtle
$c-t100: #E5FEFF; //ice

// Neutral Accent
$c-y500: #6F5F1B; //leather
$c-y300: #FFDA00; //sunflower
$c-y100: #FFF4B6; //magnolia

// Negative Accent
$c-r500: #4F0703; //rust
$c-r300: #FF4A48; //coral
$c-r100: #FFCCCE; //rose

// Brand Colors

// Blues
$lightest-blue
$lighter-blue
$light-blue
$blue
$dark-blue
$darker-blue
$darkest-blue

// Teal
$lighter-teal
$light-teal
$teal
$dark-teal
$darker-teal

// Green
$lighter-green: #EEFDF1;
$light-green: #B0DBB9;
$green: #027F1B;
$dark-green: #074C15;
$darker-green: #072C0E;

// Yellow
$lighter-yellow: #FFF9CC;
$light-yellow: #F4E171;
$yellow: #FFDA00;
$dark-yellow: #C7A900;
$darker-yellow: #837000;

// Orange
$lighter-orange: #FFEECC;
$light-orange: #FFCA63;
$orange: #FFA700;
$dark-orange: #D78B00;
$darker-orange: #8A5900;

// Red
$lighter-red: #FFD6D4;
$light-red: #D45F59;
$red: #B80C03;
$dark-red: #8C0700;
$darker-red: #590400;

// Salmon
$lighter-salmon: #FFCCCE;
$light-salmon: #FC9A95;
$salmon: #F36058;
$dark-salmon: #C04740;
$darker-salmon: #853834;

// Greys
$white: #fff;
$lighter-grey: #F4F6F9;
$light-grey: #E0E4E8;
$grey: #AFBFCA;
$dark-grey: #5E6D78;
$darker-grey: #434F58;
$black: $darkest-blue;

{% endhighlight %}

{% highlight css %}
div {color: $black}
{% endhighlight %}

<hr />

## Spacing

Use the baseScale with convertScaleToRem() to ensure consistent margins.

{% highlight css %}
$baseScale: 8;
$maxSize: 16;
{% endhighlight %}

{% highlight css %}
div {margin-bottom: convertScaleToRem(2);}
{% endhighlight %}

<hr />

## Typography

### Fonts

{% highlight css %}
$body: 'Proxima Nova', sans-serif;
$heading: 'Ubuntu', sans-serif;
{% endhighlight %}

{% highlight css %}
div {font-family: $heading}
{% endhighlight %}

### Sizes

{% highlight css %}
$t-6: 2.5rem; // 40px
$t-5: 2rem; // 32px
$t-4: 1.5rem; // 24px
$t-3: 1rem; // 16px
$t-2: .875rem; // 14px - legibility at small sizes > adhering to scales
$t-1: .75em; // 12px
$t-0: .688em; //11px
{% endhighlight %}

{% highlight css %}
div {font-size: $t-4}
{% endhighlight %}

### Weights

{% highlight css %}
$t-lighter: 100;
$t-light: 300;
$t-regular: 500;
$t-bold: 600;
$t-extrabold: 900;
{% endhighlight %}

{% highlight css %}
div {font-weight: $t-light}
{% endhighlight %}

<hr />

## Borders

{% highlight css %}
$border-size-1: 1px;
$border-size-2: 2px;
$border-radius: 3px;
{% endhighlight %}

{% highlight css %}
div {border-radius: $border-radius}
{% endhighlight %}

<hr />

## Durations

### Animation Duration
{% highlight css %}
$a-5: 2s;
$a-4: 1.5s;
$a-3: 1s;
$a-2: .5s;
$a-1: .3s;
{% endhighlight %}

{% highlight css %}
div {animation-duration: $a-2;}
{% endhighlight %}

### Transition Duration
{% highlight css %}
$tr-5: .3s;
$tr-4: .2s;
$tr-3: .1s;
$tr-2: .07s;
$tr-1: .05s;
{% endhighlight %}

{% highlight css %}
div {transition-duration: $a-2;}
{% endhighlight %}

<hr />

## Scale

{% highlight css %}
$s-5: 1.02; //magnify
$s-4: 1.01;
$s-3: 1; //initial
$s-2: .99;
$s-1: .98; //shrink
{% endhighlight %}

{% highlight css %}
div {transform: scale($s-5);}
{% endhighlight %}

## Z-Index

{% highlight css %}
$z-0: -1;
$z-1: 1;
$z-2: 10;
$z-3: 100;
$z-4: 1000;
$z-5: 10000;
{% endhighlight %}

{% highlight css %}
div {position: relative; z-index: $z-4;}
{% endhighlight %}

<hr />

## Responsive

{% highlight css %}
$medium-breakpoint: 800px;
$large-breakpoint: 1040px;
{% endhighlight %}


{% highlight css %}
@media screen and (min-width: $large-breakpoint){};
{% endhighlight %}
