---
title: Alerts
layout: page
---

<p class="t-4">Alerts! For good things, bad things and neutral things.</p>

<hr />

<h2 class="m-bottom-1">Banner Alerts</h2>
<p class="m-bottom-7">Useful for global errors, system statuses, promotions, etc. All banner alerts include a primary action, with an optional secondary action.</p>

<div class="Alert">
	<p class="Alert__heading">Neutral alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--success">
	<p class="Alert__heading">Happy alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--error">
	<p class="Alert__heading">Scary alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>

{% highlight html %}
<div class="Alert">
	<p class="Alert__heading">Neutral alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--success">
	<p class="Alert__heading">Happy alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
<div class="Alert Alert--error">
	<p class="Alert__heading">Scary alert</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quia recusandae dolorum sunt quisquam perspiciatis ipsam delectus voluptas laborum autem quae placeat atque officia a officiis fugiat repellendus, ab. Ducimus.</p>
</div>
{% endhighlight%}

<hr />

<h2 class="m-bottom-1">Toaster Alerts</h2>
<p class="m-bottom-7">Useful for in-the-moment contextual notification, such as successful form submission, feature turned on/off, momentary errors, new messages recieved, etc. By default, toasters animate in, and disappear after 3 seconds. They can be made persistent by adding <code>.Toaster--persistent</code>.</p>

<div class="w-50__m m-bottom-7">
<div class="Toaster Toaster--persistent">
	<div class="Toaster__type"><svg class="icon--size-2 i-c-y500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15.8 28.7c7 0 12.7-5.7 12.7-12.7S22.8 3.3 15.8 3.3 3.1 9 3.1 16s5.7 12.7 12.7 12.7zM16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16z"/><path d="M16 19.8l-3.3 3.1.3-4.5-4.5-.7 3.8-2.6-2.3-3.9 4.3 1.3L16 8.3l1.7 4.2 4.3-1.3-2.3 3.9 3.8 2.6-4.5.7.3 4.5z"/></svg></div>
	<p class="Toaster__heading">Neutral toaster notification<span>Click for more details</span></p>
</div><!--Toaster-->
<div class="Toaster Toaster--persistent Toaster--positive">
	<div class="Toaster__type"><svg class="icon--size-2 i-c-t100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M20.2 9.7l-7 7.6-1.5-1.5c-.9-.9-2.2-.9-3.1 0-.9.9-.9 2.3 0 3.1l2.7 2.8.4.4c1.7 1.5 3.2-.2 3.4-.4.1-.1 2.8-3 8.3-9 .8-.9.8-2.3-.1-3.1-.9-.8-2.3-.8-3.1.1z"/><path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-.2 28.7C8.8 28.7 3.1 23 3.1 16S8.8 3.3 15.8 3.3c7 0 12.7 5.7 12.7 12.7s-5.7 12.7-12.7 12.7z"/></svg></div>
	<p class="Toaster__heading">Positive toaster notification<span>Click for more details</span></p>
</div><!--Toaster-->
<div class="Toaster Toaster--persistent Toaster--negative">
	<div class="Toaster__type"><svg class="icon--size-2 i-c-r100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><path d="M15.9 28.5c7 0 12.6-5.6 12.6-12.6S22.9 3.3 15.9 3.3 3.3 9 3.3 15.9s5.6 12.6 12.6 12.6zm0 3.4C7.1 31.9 0 24.7 0 15.9S7.1 0 15.9 0s15.9 7.1 15.9 15.9-7.1 16-15.9 16z"/><path d="M16 7c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2z"/><circle class="i-c-r100" cx="16" cy="23" r="2"/></g></svg></div>
	<p class="Toaster__heading">Negative toaster notification<span>Click for more details</span></p>
</div><!--Toaster-->
</div><!--example-->
{% highlight html %}
<div class="Toaster-container w-25">
	<div class="Toaster">
		<div class="Toaster__type"><svg class="icon--size-2 i-c-y500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15.8 28.7c7 0 12.7-5.7 12.7-12.7S22.8 3.3 15.8 3.3 3.1 9 3.1 16s5.7 12.7 12.7 12.7zM16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16z"/><path d="M16 19.8l-3.3 3.1.3-4.5-4.5-.7 3.8-2.6-2.3-3.9 4.3 1.3L16 8.3l1.7 4.2 4.3-1.3-2.3 3.9 3.8 2.6-4.5.7.3 4.5z"/></svg></div>
		<p class="Toaster__heading">Neutral toaster notification<span>Click for more details</span></p>
	</div><!--Toaster-->
	<div class="Toaster Toaster--positive">
		<div class="Toaster__type"><svg class="icon--size-2 i-c-t100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M20.2 9.7l-7 7.6-1.5-1.5c-.9-.9-2.2-.9-3.1 0-.9.9-.9 2.3 0 3.1l2.7 2.8.4.4c1.7 1.5 3.2-.2 3.4-.4.1-.1 2.8-3 8.3-9 .8-.9.8-2.3-.1-3.1-.9-.8-2.3-.8-3.1.1z"/><path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-.2 28.7C8.8 28.7 3.1 23 3.1 16S8.8 3.3 15.8 3.3c7 0 12.7 5.7 12.7 12.7s-5.7 12.7-12.7 12.7z"/></svg></div>
		<p class="Toaster__heading">Positive toaster notification<span>Click for more details</span></p>
	</div><!--Toaster-->
	<div class="Toaster Toaster--negative">
		<div class="Toaster__type"><svg class="icon--size-2 i-c-r100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><path d="M15.9 28.5c7 0 12.6-5.6 12.6-12.6S22.9 3.3 15.9 3.3 3.3 9 3.3 15.9s5.6 12.6 12.6 12.6zm0 3.4C7.1 31.9 0 24.7 0 15.9S7.1 0 15.9 0s15.9 7.1 15.9 15.9-7.1 16-15.9 16z"/><path d="M16 7c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2z"/><circle class="i-c-r100" cx="16" cy="23" r="2"/></g></svg></div>
		<p class="Toaster__heading">Negative toaster notification<span>Click for more details</span></p>
	</div><!--Toaster-->
</div><!--Toaster-container-->
{% endhighlight%}
