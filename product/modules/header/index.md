---
title: Page Header
layout: app
toc: false
---

<p class="t-4">The responsive page header is the bar at the top of every DreamHost property.</p>

<hr />

<div class="PageHeader m-bottom">
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
			<div class="Popover-container on-click">
				<a class="Button js-toggle-popover t-caret Button Button--compact Button--light">Login</a>
				<div class="Popover Popover--1 Popover--flush-right Popover--bottom">
					<div class="Popover__section">
						<ul class="List List--padding List--small-bold">
							<li class="l-block"><a href="#">Web Hosting CP</a></li>
							<li class="l-block"><a href="#">DreamCompute CP</a></li>
							<li class="l-block"><a href="#">Remixer</a></li>
							<li class="l-block"><a href="#">Webmail</a></li>
						</ul>
					</div>
				</div>
			</div>
		</li>
		<li><div class="Menu-toggle js-menu-toggle"><span class="Menu-toggle__inner"></span></div></li>
	</ul>
</div>
</div>

<div class="PageHeader m-bottom">
<div class="PageHeader__container">
<a class="PageHeader__logo PageHeader__logo--internal" href="//www.dreamhost.com"></a>
<ul class="PageHeader__nav">
	<li><a class="PageHeader__nav-link is-active" href="/">Dashboard</a></li>
	<li><a class="PageHeader__nav-link" href="/">Billing</a></li>
	<li class="Popover-container on-click">
		<button class="PageHeader__nav-link t-caret js-toggle-popover Button--unset">Support</button>
		<div class="Popover Popover--1 Popover--bottom">
			<div class="Popover__section">
				<ul class="List List--padding List--small-bold">
					<li><a href="#">Knowledge Base</a></li>
					<li><a href="#">Community Forums</a></li>
					<li><a href="#">Support Tickets</a></li>
					<li><a href="#">Email Support</a></li>
				</ul>
			</div>
		</div>
	</li>
</ul>
<ul class="PageHeader__subnav">
		<li>
			<button class="PageHeader__subnav-link">
				<span class="PageHeader__notification-amount">1</span>
				<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.3 21.4c0 1.4 1.1 2.6 2.5 2.6s2.5-1.1 2.5-2.6v-.1h-5v.1zM22.2 16.7V12c0-3.1-2.2-5.8-5.2-6.3.3-.1.4-.3.4-.5 0-.4-.7-.7-1.6-.7-.9 0-1.6.3-1.6.7 0 .2.2.4.4.5-2.9.5-5.1 3.1-5.1 6.3v4.7c0 1.1-.9 1.9-1.9 1.9v2.1H24v-2.1c-1 0-1.8-.8-1.8-1.9z" fill="#e0e4e8"></path></svg>
			</button>
		</li>
		<li class="Popover-container on-click">
			<button class="PageHeader__subnav-link t-caret js-toggle-popover">
				<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12c0 3.2 1.2 6.2 3.5 8.4C5.7 22.7 8.8 24 12 24s6.3-1.3 8.5-3.6S24 15.1 24 12c0-6.6-5.4-12-12-12zm8.1 19.4c-1.1-.6-2.6-1.2-4.3-1.8-.4-.2-.8-.3-1.3-.5v-1.7c2.1-.9 3.5-3 3.5-5.5 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.4 1.4 4.5 3.5 5.5v1.7c-.4.1-.8.3-1.2.4-1.6.6-3.3 1.2-4.4 1.9C2 17.4 1 14.8 1 12 1 5.9 5.9 1 12 1s11 4.9 11 11c0 2.8-1 5.4-2.9 7.4z" fill="#e0e4e8"></path></svg>
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
		<li><div class="Menu-toggle js-menu-toggle"><span class="Menu-toggle__inner"></span></div></li>
	</ul>
</div>
</div>

<div class="PageHeader PageHeader--light m-bottom">
<div class="PageHeader__container">
<a class="PageHeader__logo" href="//www.dreamhost.com"></a>
<ul class="PageHeader__nav">
	<li><a class="PageHeader__nav-link is-active" href="/">Dashboard</a></li>
	<li><a class="PageHeader__nav-link" href="/">Billing</a></li>
	<li class="Popover-container on-click">
		<button class="PageHeader__nav-link t-caret js-toggle-popover Button--unset">Support</button>
		<div class="Popover Popover--1 Popover--bottom">
			<div class="Popover__section">
				<ul class="List List--padding List--small-bold">
					<li><a href="#">Knowledge Base</a></li>
					<li><a href="#">Community Forums</a></li>
					<li><a href="#">Support Tickets</a></li>
					<li><a href="#">Email Support</a></li>
				</ul>
			</div>
		</div>
	</li>
</ul>
<ul class="PageHeader__subnav">
	<li>
	<div class="Popover-container on-click">
		<div class="Popover Popover--1 Popover--flush-right Popover--bottom">
			<div class="Popover__section">
				<ul class="List List--padding List--small-bold">
					<li class="l-block"><a href="#">Web Hosting CP</a></li>
					<li class="l-block"><a href="#">DreamCompute CP</a></li>
					<li class="l-block"><a href="#">Remixer</a></li>
					<li class="l-block"><a href="#">Webmail</a></li>
				</ul>
		</div>
		</div>
		<a class="Button js-toggle-popover t-caret Button Button--compact Button--dark">Login</a>
	</div>
	</li>
	<li><div class="PageHeader__menu-toggle js-toggle-mobile-menu"><span class="PageHeader__menu-toggle__inner"></span></div></li>
</ul>
</div>
</div>

<div class="PageHeader PageHeader--light m-bottom">
<div class="PageHeader__container">
	<a class="PageHeader__logo PageHeader__logo--internal" href="//www.dreamhost.com"></a>
	<ul class="PageHeader__nav">
		<li><a class="PageHeader__nav-link is-active" href="/">Dashboard</a></li>
		<li><a class="PageHeader__nav-link" href="/">Billing</a></li>
		<li class="Popover-container on-click">
			<button class="PageHeader__nav-link t-caret js-toggle-popover Button--unset">Support</button>
			<div class="Popover Popover--1 Popover--bottom">
				<div class="Popover__section">
					<ul class="List List--padding List--small-bold">
						<li><a href="#">Knowledge Base</a></li>
						<li><a href="#">Community Forums</a></li>
						<li><a href="#">Support Tickets</a></li>
						<li><a href="#">Email Support</a></li>
					</ul>
				</div>
			</div>
		</li>
	</ul>
	<ul class="PageHeader__subnav">
		<li>
			<button class="PageHeader__subnav-link">
				<span class="PageHeader__notification-amount">1</span>
				<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.3 21.4c0 1.4 1.1 2.6 2.5 2.6s2.5-1.1 2.5-2.6v-.1h-5v.1zM22.2 16.7V12c0-3.1-2.2-5.8-5.2-6.3.3-.1.4-.3.4-.5 0-.4-.7-.7-1.6-.7-.9 0-1.6.3-1.6.7 0 .2.2.4.4.5-2.9.5-5.1 3.1-5.1 6.3v4.7c0 1.1-.9 1.9-1.9 1.9v2.1H24v-2.1c-1 0-1.8-.8-1.8-1.9z" fill="#e0e4e8"></path></svg>					</button>
		</li>
		<li class="Popover-container on-click">
			<button class="PageHeader__subnav-link t-caret js-toggle-popover">
				<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12c0 3.2 1.2 6.2 3.5 8.4C5.7 22.7 8.8 24 12 24s6.3-1.3 8.5-3.6S24 15.1 24 12c0-6.6-5.4-12-12-12zm8.1 19.4c-1.1-.6-2.6-1.2-4.3-1.8-.4-.2-.8-.3-1.3-.5v-1.7c2.1-.9 3.5-3 3.5-5.5 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.4 1.4 4.5 3.5 5.5v1.7c-.4.1-.8.3-1.2.4-1.6.6-3.3 1.2-4.4 1.9C2 17.4 1 14.8 1 12 1 5.9 5.9 1 12 1s11 4.9 11 11c0 2.8-1 5.4-2.9 7.4z" fill="#e0e4e8"></path></svg>
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
		<li><div class="Menu-toggle js-menu-toggle"><span class="Menu-toggle__inner"></span></div></li>
	</ul>
</div>
</div>

<div class="PageHeader PageHeader--transparent m-bottom" style="background-image:url(https://www.dreamhost.com/assets/i/bg_hero_dpo.png);">
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
				<div class="Popover-container on-click">
					<a class="Button js-toggle-popover t-caret Button Button--compact Button--light">Login</a>
					<div class="Popover Popover--1 Popover--flush-right Popover--bottom">
						<div class="Popover__section">
							<ul class="List List--padding List--small-bold">
								<li class="l-block"><a href="#">Web Hosting CP</a></li>
								<li class="l-block"><a href="#">DreamCompute CP</a></li>
								<li class="l-block"><a href="#">Remixer</a></li>
								<li class="l-block"><a href="#">Webmail</a></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<li><div class="Menu-toggle js-menu-toggle"><span class="Menu-toggle__inner"></span></div></li>
		</ul>
	</div>
</div>

<h2>Basic guidelines</h2>

<ul class="t-2 List List--disc m-bottom">
	<li><code>.PageHeader__nav</code> should contain the primary navigation</li>
	<li><code>.PageHeader__subnav</code> is for all the secondary links we may need to provide</li>
	<li>Both nav and subnav supports lists within a <a href="{{site.baseurl}}/product/components/popovers/"><code>.Popover</code></a> as a dropdown</li>
</ul>

<p class="t-2 m-bottom">Add <code>.PageHeader__logo--internal</code> to <code>.PageHeader__logo</code> for internal facing pages or when a user is logged into any Dreamhost system. Add <code>.PageHeader--light</code> to <code>.PageHeader</code> for a white background header &amp; <code>.PageHeader--transparent</code> for a transparent background, so that the header may be overlayed on top of an image or gradient.</p>

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
		<ul class="PageHeader__subnav">
			<li>
				<div class="Popover-container on-click">
					<a class="Button js-toggle-popover t-caret Button Button--compact Button--light">Login</a>
					<div class="Popover Popover--1 Popover--flush-right Popover--bottom">
						<div class="Popover__section">
							<ul class="List List--padding List--small-bold">
								<li class="l-block"><a href="#">Menu One</a></li>
								<li class="l-block"><a href="#">Menu Two</a></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<li><div class="Menu-toggle js-menu-toggle"><span class="Menu-toggle__inner"></span></div></li>
		</ul>
	</div>
</div>
{% endhighlight %}


