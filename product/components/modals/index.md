---
title: Modals
layout: app
---

<p class="t-4">DreamHost uses <a href="https://github.com/vodkabears/Remodal">remodal.js</a> with some custom styling for modals.</p>

<hr/>

Use `data-remodal-target` to call a `data-remodal-id`. Make sure to include both `remodal` and `modal` classes. The modal can be closed with `<data-remodal-action="close"`.

In order to add a blur to the content background when a modal is open, wrap the content with a container div `<div class="remodal-bg">...Page content...</div>`

<button class="Button m-bottom-2" data-remodal-target="modal">Open modal</button>
<div class="remodal Modal" data-remodal-id="modal">
	<h1 class="Modal__heading">I'm a modal</h1>
	<p class="Modal__introduction">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nemo praesentium aliquid optio labore qui, voluptate consequatur provident quos sed aperiam animi, placeat! Asperiores dicta, fuga modi temporibus laborum, culpa?</p>
	<button class="Button" data-remodal-action="close">Close</button>
</div>

{% highlight html %}
<!-- Blurred background -->
<div class="remodal-bg">...Page content...</div>

<!-- Call modal -->
<button class="Button" data-remodal-target="modal">Open modal</button>

<!-- Modal -->
<div class="remodal Modal" data-remodal-id="modal">
	<h1 class="modal__heading">I'm a modal</h1>
	<p class="modal__introduction">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nemo praesentium aliquid optio labore qui, voluptate consequatur provident quos sed aperiam animi, placeat! Asperiores dicta, fuga modi temporibus laborum, culpa?</p>
	<button class="Button" data-remodal-action="close">Close</button> // close
	</form>
</div>
{% endhighlight %}
