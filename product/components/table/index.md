---
title: Table
layout: app
---

<p class="t-5">A basic table style, including headings and zebra striping.</p>

<hr />

## Responsive Table
<table class="Table__m">
	<thead>
		<th class="w-50">Name</th>
		<th>Location</th>
		<th>IP Address</th>
		<th />
	</thead>
	<tbody>
		<tr class="Table__row--parent">
			<td><a href="#">Server Name</a></td>
			<td data-title="Location:"> US East-2</td>
			<td data-title="IP Address:"> 208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right__m">Manage</button>
			</td>
		</tr>
		<tr class="Table__row--child">
			<td><a href="#">Server Name</a></td>
			<td data-title="Location:"> US East-2</td>
			<td data-title="IP Address:"> 208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right__m">Manage</button>
			</td>
		</tr>
		<tr class="Table__row">
			<td><a href="#">Server Name</a></td>
			<td data-title="Location:"> US East-2</td>
			<td data-title="IP Address:"> 208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right__m">Manage</button>
			</td>
		</tr>
	</tbody>
</table>

{% highlight html %}
<table class="Table__m">
	<thead>
		<th class="w-50">Name</th>
		<th>Location</th>
		<th>IP Address</th>
		<th />
	</thead>
	<tbody>
		<tr class="Table__row--parent">
			<td><a href="#">Server Name</a></td>
			<td data-title="Location:"> US East-2</td>
			<td data-title="IP Address:"> 208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right__m">Manage</button>
			</td>
		</tr>
		<tr class="Table__row--child">
			<td><a href="#">Server Name</a></td>
			<td data-title="Location:"> US East-2</td>
			<td data-title="IP Address:"> 208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right__m">Manage</button>
			</td>
		</tr>
		<tr class="Table__row">
			<td><a href="#">Server Name</a></td>
			<td data-title="Location:"> US East-2</td>
			<td data-title="IP Address:"> 208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right__m">Manage</button>
			</td>
		</tr>
	</tbody>
</table>
{% endhighlight %}

<hr />

## Table Condensed with zebra striping
<table class="Table Table--striped Table--condensed">
	<thead>
		<th class="w-50">Name</th>
		<th>Location</th>
		<th>IP Address</th>
		<th />
	</thead>
	<tbody>
		<tr>
			<td><a href="#">Server Name</a></td>
			<td> US East-2</td>
			<td>208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right">Manage</button>
			</td>
		</tr>
		<tr>
			<td><a href="#">Server Name</a></td>
			<td> US East-2</td>
			<td>208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right">Manage</button>
			</td>
		</tr>
		<tr>
			<td><a href="#">Server Name</a></td>
			<td> US East-2</td>
			<td>208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right">Manage</button>
			</td>
		</tr>
	</tbody>
</table>

{% highlight html %}
<table class="Table Table--striped Table--condensed">
	<thead>
		<th class="w-50">Name</th>
		<th>Location</th>
		<th>IP Address</th>
		<th />
	</thead>
	<tbody>
		<tr>
			<td><a href="#">Server Name</a></td>
			<td> US East-2</td>
			<td>208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right">Manage</button>
			</td>
		</tr>
		<tr>
			<td><a href="#">Server Name</a></td>
			<td> US East-2</td>
			<td>208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right">Manage</button>
			</td>
		</tr>
		<tr>
			<td><a href="#">Server Name</a></td>
			<td> US East-2</td>
			<td>208.123.123.123</td>
			<td>
				<button class="Button Button--compact l-float-right">Manage</button>
			</td>
		</tr>
	</tbody>
</table>
{% endhighlight %}
