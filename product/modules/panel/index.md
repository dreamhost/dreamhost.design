---
title: Panel Module
layout: page
---

<p class="t-4">Useful for displaying login credentials to users. Makes use of the <a href="{{site.baseurl}}/components/tags/">Tags</a> and <a href="{{site.baseurl}}/components/buttons/">Buttons</a> components.</p>

<hr />

<h2>Single Panel</h2>

<div class="w-50__m m-bottom-7">
	<div class="Panel w-100">
		<h3 class="Panel__heading">File Upload</h3>
		<div class="Panel__tags">
			<span class="Tag Tag--blue">Shell</span>
			<span class="Tag Tag--blue">SFTP</span>
			<span class="Tag Tag--blue">FTP</span>
		</div>
		<div class="m-bottom-2">
			<span class="Panel__label">User</span>
			<span class="Panel__code"><code>example</code></span>
		</div>
		<div class="m-bottom-4">
			<span class="Panel__label">Server</span>
			<span class="Panel__code"><code>example.server.com</code></span>
		</div>
		<a role="button" href="#" class="Button Button--text t-2">Call to action</a>
	</div>
</div>

{% highlight html %}
<div class="w-50__m m-bottom-7">
	<div class="Panel w-100">
		<h3 class="Panel__heading">File Upload</h3>
		<div class="Panel__tags">
			<span class="Tag Tag--blue">Shell</span>
			<span class="Tag Tag--blue">SFTP</span>
			<span class="Tag Tag--blue">FTP</span>
		</div>
		<div class="m-bottom-2">
			<span class="Panel__label">User</span>
			<span class="Panel__code"><code>example</code></span>
		</div>
		<div class="m-bottom-4">
			<span class="Panel__label">Server</span>
			<span class="Panel__code"><code>example.server.com</code></span>
		</div>
		<a role="button" href="#" class="Button Button--text t-2">Call to action</a>
	</div>
</div>
{% endhighlight %}

<hr />

<h2>Dual Panel</h2>

<div class="w-75__m m-bottom-7">
	<div class="Panel--double w-100">
		<div class="Panel__section">
			<h3 class="Panel__heading">File Upload</h3>
			<div class="Panel__tags">
				<span class="Tag Tag--blue">Shell</span>
				<span class="Tag Tag--blue">SFTP</span>
				<span class="Tag Tag--blue">FTP</span>
			</div>
			<div class="m-bottom-2">
				<span class="Panel__label">User</span>
				<span class="Panel__code"><code>example</code></span>
			</div>
			<div class="m-bottom-4">
				<span class="Panel__label">Server</span>
				<span class="Panel__code"><code>example.server.com</code></span>
			</div>
			<a role="button" href="#" class="Button Button--text t-2">Call to action</a>
		</div>
		<div class="Panel__section">
			<h3 class="Panel__heading">Database (MySQL)</h3>
			<div class="m-bottom-2">
				<span class="Panel__label">User</span>
				<span class="Panel__code"><code>example</code></span>
			</div>
			<div class="m-bottom-4">
				<span class="Panel__label">Server</span>
				<span class="Panel__code"><code>example.server.com</code></span>
			</div>
			<a role="button" href="#" class="Button Button--text t-2">Call to action</a>
		</div>
	</div>
</div>

{% highlight html %}
<div class="w-75__m m-bottom-7">
	<div class="Panel--double w-100">
		<div class="Panel__section">
			<h3 class="Panel__heading">File Upload</h3>
			<div class="Panel__tags">
				<span class="Tag Tag--blue">Shell</span>
				<span class="Tag Tag--blue">SFTP</span>
				<span class="Tag Tag--blue">FTP</span>
			</div>
			<div class="m-bottom-2">
				<span class="Panel__label">User</span>
				<span class="Panel__code"><code>example</code></span>
			</div>
			<div class="m-bottom-4">
				<span class="Panel__label">Server</span>
				<span class="Panel__code"><code>example.server.com</code></span>
			</div>
			<a role="button" href="#" class="Button Button--text t-2">Call to action</a>
		</div>
		<div class="Panel__section">
			<h3 class="Panel__heading">Database (MySQL)</h3>
			<div class="m-bottom-2">
				<span class="Panel__label">User</span>
				<span class="Panel__code"><code>example</code></span>
			</div>
			<div class="m-bottom-4">
				<span class="Panel__label">Server</span>
				<span class="Panel__code"><code>example.server.com</code></span>
			</div>
			<a role="button" href="#" class="Button Button--text t-2">Call to action</a>
		</div>
	</div>
</div>
{% endhighlight %}
