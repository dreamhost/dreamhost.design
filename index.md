---
title: DreamHost Design System
layout: app
toc: false
---

<p class="t-4">Welcome to the DreamHost design system guidelines. This documentation offers the design specification and components to implement our communications and products. Please consider these guidelines a living document that will evolve as we continue to develop our design language &amp; culture.</p>

<hr />

<h3 class="m-bottom-4">Getting Started</h3>

<p>Our design system consists of three key properties that are useful for both designers &amp; developers working with Dreamhost.</p>

<div class="Card__wrapper Grid--auto">
	<div class="Card bg-c-g100 p-4 u-border-radius m-bottom-0">
	<svg class="Icon Icon--size-4 w-100 t-center m-bottom-4 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M20.2 9.7l-7 7.6-1.5-1.5c-.9-.9-2.2-.9-3.1 0-.9.9-.9 2.3 0 3.1l2.7 2.8.4.4c1.7 1.5 3.2-.2 3.4-.4.1-.1 2.8-3 8.3-9 .8-.9.8-2.3-.1-3.1-.9-.8-2.3-.8-3.1.1z"></path><path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-.2 28.7C8.8 28.7 3.1 23 3.1 16S8.8 3.3 15.8 3.3c7 0 12.7 5.7 12.7 12.7s-5.7 12.7-12.7 12.7z"></path></svg>
		<h3 class="m-bottom-2"><a href="{{site.baseurl}}/design/guidelines">Design Principles</a></h3>
		How we think about, discuss &amp; justify our design process.
	</div>
	<div class="Card bg-c-g100 p-4 u-border-radius m-bottom-0">
		<svg style="height:64px;" class="w-100 t-center m-bottom-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 209"><style>.st0{fill:#ffae00}</style><path class="st0" d="M115.5 209L0 74.8 50 7l65.5-7L181 7l50 67.8L115.5 209z"/><path d="M115.5 209L0 74.8h231L115.5 209z" fill="#ec6c00"/><path class="st0" d="M115.5 209L46.8 74.8h137.5L115.5 209z"/><path d="M115.5 0L46.8 74.8h137.5L115.5 0z" fill="#ffefb4"/><path class="st0" d="M50 7L24.3 41.1 0 74.8h47.2L50 7zm131 0l25.7 34.1L231 74.8h-47.2L1817z"/><path d="M50 7l-3.3 67.8L115.5 0 50 7zm131 0l3.3 67.8L115.5 0 181 7z" fill="#fed305"/></svg>
		<h3 class="m-bottom-2"><a href="{{site.baseurl}}/sketch">Sketch Library</a></h3>
		<p>Assets for rapid hi-fi mockups. The <a href="https://blog.goabstract.com/sketch-libraries-abstract-linked-libraries-4c73c10750d0" target="_blank">shared Sketch library</a> is version controlled through <a href="https://www.goabstract.com/" target="_blank">Abstract</a>.</p>
	</div>
	<div class="Card bg-c-g100 p-4 u-border-radius m-bottom-0">
	<svg class="Icon Icon--size-4 w-100 t-center m-bottom-4 t-c-b300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><defs><filter id="a" filterUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32" id="b"><path fill="#fff" d="M0 0h32v32H0z" filter="url(#a)"></path></mask><path d="M16 28.7c-.6 0-1.1 0-1.7-.1 0-.1-.1-.2-.1-.3-1.1-2-2-3.9-2.5-5.8 1.4.1 2.8.2 4.4.2 5 0 8.8-.7 11.7-2-1.9 4.7-6.5 8-11.8 8m-11.8-8c1.1.5 2.4.9 3.8 1.3.4 1.7.9 3.3 1.7 5-2.5-1.4-4.4-3.7-5.5-6.3m7.3-6.8c.2-.8.5-1.6.9-2.3 1.1.1 2.3.1 3.7.1 5.2 0 8.8-.7 10.8-2.2 1.1 1.9 1.8 4.1 1.8 6.5-2 2.2-6.2 3.4-12.6 3.4-1.9 0-3.6-.1-5.1-.3-.1-1.9 0-3.6.5-5.2m-1-6c-1.6-.3-2.6-.7-3.2-1.1 1.9-1.8 4.4-3 7.1-3.4-1.3 1.2-2.7 2.7-3.9 4.5m14.2-1.1c-1 .7-3.4 1.5-8.7 1.5h-1.6c2.1-2.6 4.5-4.1 5.1-4.4 2 .5 3.8 1.6 5.2 2.9M3.3 15.9c0-2.4.7-4.6 1.8-6.5.9.7 2.2 1.2 3.7 1.6-.2.6-.5 1.2-.7 1.9-.5 1.8-.7 3.6-.7 5.4-1.7-.6-3.1-1.3-4.1-2.4M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0" mask="url(#b)">&lt;/svg&gt;
</path></svg>
		<h3 class="m-bottom-2"><a href="{{site.baseurl}}/product">DreamHost.css</a></h3>
		<p>DreamHost.css is our bespoke library of reusable utilities &amp; components.</p>
	</div>
</div>

<hr />

<h3 class="m-bottom-4">Contributing to the design system</h3>

<p>How to work collaboratively with the framework</p>

<ol class="m-bottom-3">
	<li>Design a product or page using the existing Sketch pattern library.</li>
	<li>Build product prototype &amp; production code using DreamHost.css existing components creating custom styles where needed for new components.</li>
	<li>Release &amp; prove new components.</li>
	<li>Add new components to Sketch pattern library.</li>
	<li>Build new components into DreamHost.css framework.</li>
	<li>Document new components and variants.</li>
</ol>

<p>By following this simple workflow we will only promote tried &amp; tested components into the living library. Party time!</p>