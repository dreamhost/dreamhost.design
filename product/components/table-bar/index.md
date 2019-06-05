---
title: Table — Bar
layout: page
---

<p class="t-l">Displays tabular information in a bar / card type of layout</p>
<p>The most common usecase for this component is to individually showcase a row of information that typically makes up a larger set of data. Generally, you would use a Bar component over a Table when you need extra functionality or interactivity for a single row item.</p>

<p>The Bar utilizes flexbox for layout. Each column in the Bar is created with a <code>.Bar__group</code> class. To keep the first and last columns aligned between individual bar components a <code>.Bar__group--start</code> or <code>.Bar__group--end</code> class plus a  width utility is required. A width utility class is not required if the child elements or content within <code>.Bar__group</code> sets a defined width.</p>

<p>For interactivity, the JavaScript function targets a class of <code>.js-bar</code> at the root of the component. An element with the <code>.js-drawer-on-click</code> class is used to reveal any information within the <code>.Bar__drawer</code> element. Additionally, an element with a class of <code>.js-delete-mode-on-click</code> will reveal a second drawer defined by the class <code>.Bar__delete</code></p>
<hr />

## Generic Bar Table

<div class="Bar js-bar m-top-8">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start w-25">
			First Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<hr class="m-0 border-c-g200 border-bottom-dashed l-block l-none__l">
		<div class="Bar__group Bar__group--end w-25">
			<div class="p-3 p-0__l u-ws-nowrap m-left-auto">
				<button class="js-drawer-on-click Button Button--dark bg-c-w100 t-c-g500 border-c-g300">Manage
					Files</button>
			</div>
		</div>
	</div>
	<div class="Bar__drawer p-3">
		<p>Hidden content</p>
	</div>
</div>

<div class="Bar js-bar m-bottom-8">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start w-25">
			First Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<div class="Bar__group Bar__group--mid">

		</div>
		<div class="Bar__group Bar__group--end w-25 l-none l-block__l"></div>
	</div>
	<div class="Bar__drawer p-3">
		<p>Hidden content</p>
	</div>
</div>


{% highlight html %}

<div class="Bar js-bar">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start w-25">
			First Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<hr class="m-0 border-c-g200 border-bottom-dashed l-block l-none__l">
		<div class="Bar__group Bar__group--end w-25">
			<div class="p-3 p-0__l u-ws-nowrap m-left-auto">
				<button class="js-drawer-on-click Button Button--dark bg-c-w100 t-c-g500 border-c-g300">Manage
					Files</button>
			</div>
		</div>
	</div>
	<div class="Bar__drawer p-3">
		<p>Hidden content</p>
	</div>
</div>

<div class="Bar js-bar">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start w-25">
			First Column
		</div>
		<div class="Bar__group Bar__group--mid">
			Middle Column
		</div>
		<div class="Bar__group Bar__group--mid">

		</div>
		<div class="Bar__group Bar__group--end w-25 l-none l-block__l"></div>
	</div>
	<div class="Bar__drawer p-3">
		<p>Hidden content</p>
	</div>
</div>

{% endhighlight %}

<hr />

## Bar Table Module w/ utilities
<p>The Bar component can be extended with additional components and utilities. Here we are using the chevron-down icon with a class of <code>.js-drawer-onclick</code> and the wastebin icon with a class of <code>.js-delete-mode-on-click</code> to trigger the drawers.
</p>


<div class="Bar js-bar m-bottom-8 m-top-4">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start p-bottom-0 p-bottom-3__l">
			<svg class="Bar__group-icon" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
				class="m-right-2">
				<g fill="#0073ec">
					<path
						d="m14 8a1.33 1.33 0 0 1 1.32 1.32v6a1.32 1.32 0 1 1 -2.64 0v-6a1.31 1.31 0 0 1 1.32-1.32zm0 12a1.32 1.32 0 1 1 1.32-1.32 1.32 1.32 0 0 1 -1.32 1.32z" />
					<path d="m14 28a14 14 0 1 1 14-14 14 14 0 0 1 -14 14zm0-25a11 11 0 1 0 11 11 11 11 0 0 0 -11-11z" />
				</g>
			</svg>
			Giannis FTP Access
		</div>
		<div class="Bar__group Bar__group--mid p-top-0 p-top-3__l p-left-9 p-left-3__l">
			giannis-website.com
		</div>
		<hr class="m-0 border-c-g200 border-bottom-dashed l-block l-none__l">
		<div class="Bar__group Bar__group--end">
			<div class="l-flex__l flex-align-center flex-justify-center w-100">
				<a href="javascript:;"
					class="l-block l-inline-block__l t-center t-left__l p-3 p-0__l t-bold t-dark-grey t-decoration-none js-drawer-on-click m-right-3__l">
					Show Credentials
					<svg class="chevron-down l-inline-block u-vertical-align-middle" width="8" viewBox="0 0 8 5.35"
						xmlns="http://www.w3.org/2000/svg">
						<path fill="currentColor" d="m1.22 0 2.78 2.57 2.77-2.57 1.23 1.65-4 3.7-4-3.7z" /></svg>
				</a>

				<button
					class="Button Button--dark bg-c-w100 t-c-g500 p-x-2 border-c-g200 l-none l-inline-block__l m-right-3">Manage
					Files</button>

				<a href="javascript:;" class="l-none l-inline-block__l js-delete-mode-on-click">
					<svg height="24" viewBox="0 0 62 82.5" xmlns="http://www.w3.org/2000/svg">
						<g fill="#5E6D78">
							<path
								d="m4.25 20h53.5v52.38a10.13 10.13 0 0 1 -10.12 10.12h-33.25a10.13 10.13 0 0 1 -10.13-10.12z" />
							<path d="m45.02 5.5-1.84-5.5h-24.36l-1.84 5.5h-16.98v8.5h62v-8.5z" />
						</g>
					</svg>
				</a>

			</div>
		</div>
	</div>

	<div class="Bar__drawer p-3">
		<div class="flex flex-start flex-column flex-row__l">
			<div class="m-top-0 m-right-4__l w-25__l">
				<label for="" class="Form__label">Host Name</label>
				<div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1">
					<input id="" type="text" class="Input border-0 m-top-0 bg-transparent" placeholder="Poopoo"
						disabled>
					<svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 53 51">
						<path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
						<path
							d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
						</svg>
				</div>
			</div>
			<div class="m-top-3 m-top-0__l m-right-4__l">
				<label for="" class="Form__label">Username</label>
				<div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1">
					<input id="" type="text" class="Input border-0 m-top-0 bg-transparent" placeholder="Poopoo"
						disabled>
					<svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 53 51">
						<path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
						<path
							d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
						</svg>
				</div>
			</div>
			<div class="m-top-3 m-top-0__l m-right-4__l">
				<label for="" class="Form__label">Password</label>
				<div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1">
					<input id="" type="text" class="Input border-0 m-top-0 bg-transparent" value="Poopoo" disabled>
					<svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 53 51">
						<path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
						<path
							d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
						</svg>
				</div>
			</div>
			<div class="m-top-3 m-top-0__l m-x-4__l flex flex-row flex-column__l flex-justify-between">
				<label for="" class="Form__label">Port</label>
				<div class="p-y-2__l">22</div>
			</div>
			<div
				class="m-top-3 m-top-0__l m-x-4__l flex flex-row flex-align-center flex-align-start__l flex-column__l flex-justify-between">
				<label for="" class="Form__label">SSH Protocol</label>
				<div class="Toggle m-bottom-1__l">
					<input class="Toggle__input" type="checkbox" id="UNIQUE-ID" />
					<label for="UNIQUE-ID" class="Toggle__label">
						<span class="Toggle__visible"></span>
					</label>
				</div>
			</div>
		</div>
		<div class="l-block l-none__l">
			<button class="Button Button--dark Button--block bg-c-w100 t-c-g500 p-x-3 border-c-g200 m-top-3">Manage
				Files</button>
			<button
				class="Button Button--danger Button--block bg-c-r300 t-c-w100 m-top-2 js-delete-mode-on-click">Delete
				User</button>
		</div>
	</div>

	<div
		class="Bar__delete no-gutters flex-justify-between flex-align-center p-3 border-top border-c-g200 flex-column flex-row__l">
		<div class="col-lg-7">
			<h3 class="m-top-0 m-bottom-3 t-body t-bold">Do you want to delete this user?</h3>
			<p class="m-bottom-3 m-bottom-0__l">Deleting this user will cause all of its associated data and settings to
				be <strong>permanently</strong> deleted and you will not be able to recreate a user with the same name.
				Are you sure?</p>
		</div>
		<div class="col-lg-4 offset-lg-1 flex flex-justify-end flex-column flex-row__l">
			<button class="Button Button--danger bg-c-r300 t-c-w100 p-x-3 m-right-2__l">Yes, delete user</button>
			<button
				class="Button Button--dark bg-c-w100 t-c-g500 border-c-g200 m-left-0 m-top-3 m-top-0__l js-delete-mode-on-click">Cancel</button>
		</div>
	</div>

</div>

{% highlight html %}

<section>
	<h1 class="t-bold t-body t-black m-0">Manage Users</h1>
</section>

<hr class="m-y-4">

<h3 class="t-body t-black t-medium m-bottom-3">Shared</h3>

<div class="Bar js-bar">
	<div class="Bar__row">
		<div class="Bar__group Bar__group--start p-bottom-0 p-bottom-3__l">
			<svg class="Bar__group-icon" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
				class="m-right-2">
				<g fill="#0073ec">
					<path
						d="m14 8a1.33 1.33 0 0 1 1.32 1.32v6a1.32 1.32 0 1 1 -2.64 0v-6a1.31 1.31 0 0 1 1.32-1.32zm0 12a1.32 1.32 0 1 1 1.32-1.32 1.32 1.32 0 0 1 -1.32 1.32z" />
					<path d="m14 28a14 14 0 1 1 14-14 14 14 0 0 1 -14 14zm0-25a11 11 0 1 0 11 11 11 11 0 0 0 -11-11z" />
				</g>
			</svg>
			Giannis FTP Access
		</div>
		<div class="Bar__group Bar__group--mid p-top-0 p-top-3__l p-left-9 p-left-3__l">
			giannis-website.com
		</div>
		<hr class="m-0 border-c-g200 border-bottom-dashed l-block l-none__l">
		<div class="Bar__group Bar__group--end">
			<div class="l-flex__l flex-align-center flex-justify-center w-100">
				<a href="javascript:;"
					class="l-block l-inline-block__l t-center t-left__l p-3 p-0__l t-bold t-dark-grey t-decoration-none js-drawer-on-click m-right-3__l">
					Show Credentials
					<svg class="chevron-down l-inline-block u-vertical-align-middle" width="8" viewBox="0 0 8 5.35"
						xmlns="http://www.w3.org/2000/svg">
						<path fill="currentColor" d="m1.22 0 2.78 2.57 2.77-2.57 1.23 1.65-4 3.7-4-3.7z" /></svg>
				</a>

				<button
					class="Button Button--dark bg-c-w100 t-c-g500 p-x-2 border-c-g200 l-none l-inline-block__l m-right-3">Manage
					Files</button>

				<a href="javascript:;" class="l-none l-inline-block__l js-delete-mode-on-click">
					<svg height="24" viewBox="0 0 62 82.5" xmlns="http://www.w3.org/2000/svg">
						<g fill="#5E6D78">
							<path
								d="m4.25 20h53.5v52.38a10.13 10.13 0 0 1 -10.12 10.12h-33.25a10.13 10.13 0 0 1 -10.13-10.12z" />
							<path d="m45.02 5.5-1.84-5.5h-24.36l-1.84 5.5h-16.98v8.5h62v-8.5z" />
						</g>
					</svg>
				</a>

			</div>
		</div>
	</div>

	<div class="Bar__drawer p-3">
		<div class="flex flex-start flex-column flex-row__l">
			<div class="m-top-0 m-right-4__l w-25__l">
				<label for="" class="Form__label">Host Name</label>
				<div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1">
					<input id="" type="text" class="Input border-0 m-top-0 bg-transparent" placeholder="Poopoo"
						disabled>
					<svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 53 51">
						<path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
						<path
							d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
						</svg>
				</div>
			</div>
			<div class="m-top-3 m-top-0__l m-right-4__l">
				<label for="" class="Form__label">Username</label>
				<div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1">
					<input id="" type="text" class="Input border-0 m-top-0 bg-transparent" placeholder="Poopoo"
						disabled>
					<svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 53 51">
						<path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
						<path
							d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
						</svg>
				</div>
			</div>
			<div class="m-top-3 m-top-0__l m-right-4__l">
				<label for="" class="Form__label">Password</label>
				<div class="flex flex-justify-between flex-align-center bg-c-b100 u-border-radius m-top-1">
					<input id="" type="text" class="Input border-0 m-top-0 bg-transparent" value="Poopoo" disabled>
					<svg title="Copy to clipboard" class="Icon Icon--size-2 m-x-1" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 53 51">
						<path d="M20.2 19.6h20.2v3.9H20.2zM20.2 27.5h20.2v3.9H20.2zM20.2 35.3h12.1v3.9H20.2z" />
						<path
							d="M44.5 7.9h-4V4c0-2.2-1.8-3.9-4-3.9H8.1C5.9.1 4 1.8 4 4v35.2c0 2.2 1.8 3.9 4 3.9h4V47c0 2.2 1.8 3.9 4 3.9h28.3c2.2 0 4-1.7 4-3.9V11.8c.2-2.1-1.6-3.9-3.8-3.9zm-32.4 3.9v27.4h-4V4h28.3v3.9H16.2c-2.3 0-4.1 1.8-4.1 3.9zM44.5 47H16.2V11.8h28.3V47z" />
						</svg>
				</div>
			</div>
			<div class="m-top-3 m-top-0__l m-x-4__l flex flex-row flex-column__l flex-justify-between">
				<label for="" class="Form__label">Port</label>
				<div class="p-y-2__l">22</div>
			</div>
			<div
				class="m-top-3 m-top-0__l m-x-4__l flex flex-row flex-align-center flex-align-start__l flex-column__l flex-justify-between">
				<label for="" class="Form__label">SSH Protocol</label>
				<div class="Toggle m-bottom-1__l">
					<input class="Toggle__input" type="checkbox" id="UNIQUE-ID" />
					<label for="UNIQUE-ID" class="Toggle__label">
						<span class="Toggle__visible"></span>
					</label>
				</div>
			</div>
		</div>
		<div class="l-block l-none__l">
			<button class="Button Button--dark Button--block bg-c-w100 t-c-g500 p-x-3 border-c-g200 m-top-3">Manage
				Files</button>
			<button
				class="Button Button--danger Button--block bg-c-r300 t-c-w100 m-top-2 js-delete-mode-on-click">Delete
				User</button>
		</div>
	</div>

	<div
		class="Bar__delete no-gutters flex-justify-between flex-align-center p-3 border-top border-c-g200 flex-column flex-row__l">
		<div class="col-lg-7">
			<h3 class="m-top-0 m-bottom-3 t-body t-bold">Do you want to delete this user?</h3>
			<p class="m-bottom-3 m-bottom-0__l">Deleting this user will cause all of its associated data and settings to
				be <strong>permanently</strong> deleted and you will not be able to recreate a user with the same name.
				Are you sure?</p>
		</div>
		<div class="col-lg-4 offset-lg-1 flex flex-justify-end flex-column flex-row__l">
			<button class="Button Button--danger bg-c-r300 t-c-w100 p-x-3 m-right-2__l">Yes, delete user</button>
			<button
				class="Button Button--dark bg-c-w100 t-c-g500 border-c-g200 m-left-0 m-top-3 m-top-0__l js-delete-mode-on-click">Cancel</button>
		</div>
	</div>

</div>

{% endhighlight %}
