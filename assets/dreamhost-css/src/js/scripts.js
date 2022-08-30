/**
 * DreamHost.css Custom Javascript
 *
 * Usage:
 * - Use the `dh_css` namespace to make sure custom JS doesn't ram into anything else!
 * - For components, create a new `var Component_name` in the namespace below
 * - Use a `.load()` method with an exit condition to improve performance
 * - Put all jQuery events in a separate `.events` method
 * - Call the `Component.load()` function in `dh_css.init`
 * - Comments also added inline in Accordion component for demo
 *
 * Not certain how to follow these conventions?
 * Just follow one of the vars someone else wrote, or just ask someone!
 *
**/

(function(dh_css, $) {

	// Place all component loaders in here
	dh_css.init = function() {
		Accordion.load();
		Tabs.load();
		Quickcopy.load();
		Bars.load();
	}

	var Accordion = {
		load: function() {
			// exit condition will keep unneeded JS from running if the component isn't on the page
			if(!$('.Accordion').length) return;
			Accordion.events();
		},
		// all jQuery events go in this neat little function. Comment for anything confusing
		events: function() {
			$('.Accordion__toggle').on('click', function () {
				$(this).closest('.Accordion').toggleClass('Accordion--open');
			});
		}
	}

	var Tabs = {
		load: function() {
			if(!$('.Tabs').length) return;
			Tabs.events();
		},
		events: function() {
			$('.Tabs__nav-item').on('click', function() {
				var $this = $(this);

				// use parent to keep tab functionality scoped on pages with multiple tab components
				var $parent = $this.closest('.Tabs');
				var tab = $this.data('tab');

				// sets active tab nav link
				$('.Tabs__nav-item', $parent).removeClass('is-active');
				$this.addClass('is-active');

				// sets active tab
				$('.Tab', $parent).removeClass('is-active');
				$('.Tab[data-tab="' + tab + '"]').addClass('is-active');
			});
		}
	}

	// 'copy to clipboard' functionality
	var Quickcopy = {
		load: function() {
				if(!$('.js-quickcopy').length) return;
				Quickcopy.events();
		},
		events: function() {
			$('.js-quickcopy-btn').on('click', function(e) {
				var $parent = $(this).closest('.js-quickcopy');

				// create temporary input field populate with text to be copied. this is the only way JS can grab text
				var $temp = $('<input>');
				$('body').append($temp);
				$temp.val($('.js-quickcopy-text', $parent).text()).select();
				var success = document.execCommand('copy');
				$temp.remove();

				if(!success) return;

				// toggle success message if successful
				$parent.toggleClass('Quickcopy__success');
				setTimeout(function() {
					$parent.toggleClass('Quickcopy__success');
				}, 1000);
			});
		}
	}

	var Bars = {
		load: function() {
			if(!$('.Bar').length) return;
			Bars.load_listeners();
		},
		reset_drawers: function($parent, class_to_toggle) {
			var toggle_classes = ['is-open', 'delete-mode', 'edit-mode'];
			var classes_to_untoggle = toggle_classes.filter(function(class_to_untoggle) {
				return class_to_untoggle != class_to_toggle;
			});

			classes_to_untoggle = classes_to_untoggle.join(' ');
			$parent.removeClass(classes_to_untoggle);
		},
		toggle_drawer: function($el, class_to_toggle) {
			var $parent = $el.closest('.js-bar');

			Bars.reset_drawers($parent, class_to_toggle);
			$parent.toggleClass(class_to_toggle);
		},
		toggle_drawer_on_click: function() {
			$('.js-drawer-on-click').on('click', function() {
				Bars.toggle_drawer($(this), 'is-open');
			});
		},
		toggle_delete_mode_on_click: function() {
			$('.js-delete-mode-on-click').on('click', function() {
				Bars.toggle_drawer($(this), 'delete-mode');
			});
		},
		toggle_edit_mode_on_click: function() {
			$('.js-edit-mode-on-click').on('click', function() {
				Bars.toggle_drawer($(this), 'edit-mode');
			});
		},
		load_listeners: function() {
			if(!$('.js-bar').length) return;
			Bars.toggle_drawer_on_click();
			Bars.toggle_delete_mode_on_click();
			Bars.toggle_edit_mode_on_click();
		}
	}

	window.onload = dh_css.init();

})(window.dh_css = window.dh_css || {}, jQuery);

// Carousel
$(document).ready(function(){
	$('.Carousel').slick({
		dots: true
	});
});

// Popovers
$(document).on('click', '.js-toggle-popover', function (e) {
	var $this = $(this),
		$thisPopover = $this
			.parent()
			.children('.Popover');

	$('.js-toggle-popover').not($this).removeClass('is-open');
	$thisPopover.toggleClass('is-open');
	$this.toggleClass('is-open');
	$('.Popover').not($thisPopover).removeClass('is-open');

	e.stopPropagation();
});

$(document).on('mouseover', '.on-hover', function () {
	$(this).find('.js-toggle-popover').addClass('is-open');
});

$(document).on('mouseout', '.on-hover', function () {
	$('.on-hover')
		.find('.js-toggle-popover')
		.removeClass('is-open');
});

$(document).on('click', '.Popover', function (e) {
	e.stopPropagation();
});

$(document).on('click', function (e) {
	$('.Popover, .js-toggle-popover').removeClass('is-open');
});

$(document).on('click', '.js-menu-toggle', function(e) {
	$('.PageHeader').toggleClass('menu-is-open');
});

// Make closing Toaster animation controllable with JS
// Example shown here using jQuery
$('.Toaster').on('click', function () {
	var that = this;
	$(this).addClass('Toaster--is-closing');
	if($('.Toaster').hasClass('Toaster--is-closing')) {
		// KILL! - Add timer to remove whitespace left behind
		setTimeout( function() {
			$(that).addClass("Toaster--killed");
		}, 300);
	}
});
