---
title: Choice Boxes
layout: app
---

<p class="t-4">Choice Boxes can add visual emphasis to radio buttons and checkboxes. <br />
Use along with the <a href="{{site.baseurl}}/product/utilities/grid/">grid</a> for positioning.</p>

<hr />

<h2>Choice Boxes As Radio Buttons</h2>
<div class="container-full-width">
    <ul class="u-clearfix">
        <li class="ChoiceBox g-1_2__m">
            <input type="radio" class="ChoiceBox__radio hidden" name="example" id="example" value="example">
            <label for="example" class="ChoiceBox__label">
                <div class="ChoiceBox__title">
                    Example Title
                </div>
                <div class="ChoiceBox__content">
                    Example Content
                </div>
            </label>
        </li>
        <li class="ChoiceBox g-1_2__m">
            <input type="radio" class="ChoiceBox__radio hidden" name="example" id="example2" value="example2">
            <label for="example2" class="ChoiceBox__label">
                <div class="ChoiceBox__title">
                    Example Title 2
                </div>
                <div class="ChoiceBox__content">
                    Example Content 2
                </div>
            </label>
        </li>
    </ul>
</div>

{% highlight html %}
<div class="container-full-width">
    <ul class="u-clearfix">
        <li class="ChoiceBox g-1_2__m">
            <input type="radio" class="ChoiceBox__radio hidden" name="example" id="example" value="example">
            <label for="example" class="ChoiceBox__label">
                <div class="ChoiceBox__title">
                    Example Title
                </div>
                <div class="ChoiceBox__content">
                    Example Content
                </div>
            </label>
        </li>
        <li class="ChoiceBox g-1_2__m">
            <input type="radio" class="ChoiceBox__radio hidden" name="example" id="example2" value="example2">
            <label for="example2" class="ChoiceBox__label">
                <div class="ChoiceBox__title">
                    Example Title 2
                </div>
                <div class="ChoiceBox__content">
                    Example Content 2
                </div>
            </label>
        </li>
    </ul>
</div>
{% endhighlight %}

<hr />

<h2>Choice Boxes As Checkboxes</h2>
<div class="container-full-width">
    <ul class="u-clearfix">
        <li class="ChoiceBox g-1_2__m">
            <input type="checkbox" class="ChoiceBox__radio hidden" name="example" id="example3" value="example">
            <label for="example3" class="ChoiceBox__label">
                <div class="ChoiceBox__title">
                    Example Title
                </div>
                <div class="ChoiceBox__content">
                    Example Content
                </div>
            </label>
        </li>
        <li class="ChoiceBox g-1_2__m">
            <input type="checkbox" class="ChoiceBox__radio hidden" name="example" id="example4" value="example2">
            <label for="example4" class="ChoiceBox__label">
                <div class="ChoiceBox__title">
                    Example Title 2
                </div>
                <div class="ChoiceBox__content">
                    Example Content 2
                </div>
            </label>
        </li>
    </ul>
</div>

{% highlight html %}
<div class="container-full-width">
    <ul class="u-clearfix">
        <li class="ChoiceBox g-1_2__m">
            <input type="checkbox" class="ChoiceBox__radio hidden" name="example" id="example3" value="example">
            <label for="example3" class="ChoiceBox__label">
                <div class="ChoiceBox__title">
                    Example Title
                </div>
                <div class="ChoiceBox__content">
                    Example Content
                </div>
            </label>
        </li>
        <li class="ChoiceBox g-1_2__m">
            <input type="checkbox" class="ChoiceBox__radio hidden" name="example" id="example4" value="example2">
            <label for="example4" class="ChoiceBox__label">
                <div class="ChoiceBox__title">
                    Example Title 2
                </div>
                <div class="ChoiceBox__content">
                    Example Content 2
                </div>
            </label>
        </li>
    </ul>
</div>
{% endhighlight %}
