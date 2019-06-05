/*

Design System Scripts

    This document contains all of the design system-specific front-
    end scripts.

*/

$(".js-menutoggle").click(function() {
    $("body").toggleClass("show");
});

(function(bars, $) {

	bars.init = function() {
		events.load_listeners();
	}

	var events = {
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

			events.reset_drawers($parent, class_to_toggle);
			$parent.toggleClass(class_to_toggle);
		},
		toggle_drawer_on_click: function() {
			$('.js-drawer-on-click').on('click', function() {
				events.toggle_drawer($(this), 'is-open');
			});
		},
		toggle_delete_mode_on_click: function() {
			$('.js-delete-mode-on-click').on('click', function() {
				events.toggle_drawer($(this), 'delete-mode');
			});
		},
		toggle_edit_mode_on_click: function() {
			$('.js-edit-mode-on-click').on('click', function() {
				events.toggle_drawer($(this), 'edit-mode');
			});
		},
		load_listeners: function() {
			if(!$('.js-bar').length) return;
			events.toggle_drawer_on_click();
			events.toggle_delete_mode_on_click();
			events.toggle_edit_mode_on_click();
		}
	}

	window.onload = bars.init();
})(window.bars = window.bars || {}, jQuery);