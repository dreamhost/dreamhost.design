---
title: Page Header
layout: page
---

<p class="t-4">The page header is the bar at the top of every DreamHost application that contains the logo and navigation</p>

<p class="alert alert--error">Watch out! The responsive part of the page header doesn't seem to work right now. Maybe it's <em>your</em> destiny to be the one to solve it. <a href="https://github.com/dreamhost/dreamhost.css/issues/73">Track issue.</a>

<hr />

<div class="PageHeader m-bottom-5">
	<div class="PageHeader__container">
		<a class="PageHeader__logo" href="//www.dreamhost.com"></a>
		<ul class="PageHeader__nav">
			<li><a class="PageHeader__nav-link is-active" href="#">Active link</a></li>
			<li><a class="PageHeader__nav-link" href="#">Other</a></li>
			<li class="Popover-container on-click">
				<button class="PageHeader__nav-link t-caret js-toggle-popover Button--unset">Dropdown</button>
				<div class="Popover Popover--1 Popover--bottom">
					<div class="Popover__section">
						<ul class="List List--padding List--small-bold">
							<li><a href="#">Menu One</a></li>
							<li><a href="#">Menu Two</a></li>
						</ul>
					</div>
				</div>
			</li>
		</ul>
		<ul class="PageHeader__subnav">
			<li>
				<button class="PageHeader__subnav-link">
					<span class="PageHeader__notification-amount">3</span>
					<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.3 21.4c0 1.4 1.1 2.6 2.5 2.6s2.5-1.1 2.5-2.6v-.1h-5v.1zM22.2 16.7V12c0-3.1-2.2-5.8-5.2-6.3.3-.1.4-.3.4-.5 0-.4-.7-.7-1.6-.7-.9 0-1.6.3-1.6.7 0 .2.2.4.4.5-2.9.5-5.1 3.1-5.1 6.3v4.7c0 1.1-.9 1.9-1.9 1.9v2.1H24v-2.1c-1 0-1.8-.8-1.8-1.9z" fill="#e0e4e8"/></svg>					</button>
			</li>
			<li class="Popover-container on-click">
				<button class="PageHeader__subnav-link t-caret js-toggle-popover">
					<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12c0 3.2 1.2 6.2 3.5 8.4C5.7 22.7 8.8 24 12 24s6.3-1.3 8.5-3.6S24 15.1 24 12c0-6.6-5.4-12-12-12zm8.1 19.4c-1.1-.6-2.6-1.2-4.3-1.8-.4-.2-.8-.3-1.3-.5v-1.7c2.1-.9 3.5-3 3.5-5.5 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.4 1.4 4.5 3.5 5.5v1.7c-.4.1-.8.3-1.2.4-1.6.6-3.3 1.2-4.4 1.9C2 17.4 1 14.8 1 12 1 5.9 5.9 1 12 1s11 4.9 11 11c0 2.8-1 5.4-2.9 7.4z" fill="#e0e4e8"/></svg>
				</button>
				<div class="Popover Popover--1 Popover--bottom Popover--flush-right">
					<div class="Popover__section">
						<ul class="List List--padding List--small-bold">
							<li><a href="#">Menu Section One</a></li>
						</ul>
						<ul class="List List--padding List--small-bold">
							<li><a href="#">Menu Section Two</a></li>
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>

<h2>Basic guidelines</h2>

<ul class="list list--disc m-bottom-5">
	<li><code>.PageHeader__nav</code> should contain the primary navigation</li>
	<li><code>.PageHeader__subnav`</code> is for all the secondary links we may need to provide</li>
	<li>Both nav and subnav supports lists within a <code>`.Popover`</code> as a dropdown</li>
</ul>

{% highlight html %}
<div class="PageHeader">
	<div class="PageHeader__container">
		<a class="PageHeader__logo" href="//www.dreamhost.com"></a>
		<ul class="PageHeader__nav">
			<li><a class="PageHeader__nav-link is-active" href="#">Active link</a></li>
			<li><a class="PageHeader__nav-link" href="#">Other</a></li>
			<li class="Popover-container on-click">
				<button class="PageHeader__nav-link t-caret js-toggle-popover Button--unset">Dropdown</button>
				<div class="Popover Popover--1 Popover--bottom">
					<div class="Popover__section">
						<ul class="List List--padding List--small-bold">
							<li><a href="#">Menu One</a></li>
							<li><a href="#">Menu Two</a></li>
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
{% endhighlight %}


