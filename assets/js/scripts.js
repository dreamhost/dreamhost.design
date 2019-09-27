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

$(document).ready(function() {
	if(!$('.SideNav__subnav-link.is-active').length) return;
	$('.SideNav__subnav-link.is-active').focus();
});

function toggleMenu() {
	$('.toggle').toggle(); //api.jquery.com/toggle/
	$('.sidebar').toggleClass('sticky');
	$('html, body').toggleClass('no-scroll');
}

$(document).ready(function () {

	$(".item__anchor").click(function () {
		$(this).parent().toggleClass('is-uncollapsed');
	});

	$(".subnav__subnav > li > a").click(function () {
		$(this).toggleClass('is-uncollapsed');
	});



	// Table Of Contents 
	if($('.tocList').length){
		$('.tocList').empty();
		
		var prevH2Item = null;
		var prevH2List = null;
		var index = 0;
		$("article h2, article h3").each(function () {
			//insert an anchor to jump to, from the TOC link.
			var anchor = "<a name='" + index + "'></a>";
			$(this).before(anchor);
			var li = "<li><a href='#" + index + "'>" + $(this).text() + "</a></li>";
				if ($(this).is("h2")) {
					prevH2List = $("<ul></ul>");
					prevH2Item = $(li);
					prevH2Item.append(prevH2List);
					prevH2Item.appendTo('.tocList');
				} else {	
				prevH2List.append(li);
			}
			index++;
		});

		$('.tocList ul:empty').remove();
	}
});



$(function() {
	var user = $('.User:last')
	const defaultview = $('.container.p-0').clone()

	console.log(defaultview);

	$(document.body).on('click', '.js-edit-user' ,function(){ 

		var parent = $(this).closest('.User');
		var editView = $(parent).children('.User__edit');

		if ($(window).width() < 960) {
			
			$('.container.p-0').empty();
	
			$(editView).toggleClass('is-uncollapsed').removeClass('p-2').removeClass('p-3__m').appendTo('.container.p-0');
	 	}
		else {

			if ( $(parent).children('.User__login-info').hasClass( 'is-uncollapsed' ) ) {
				$(parent).children('.User__login-info').removeClass('is-uncollapsed');
			}
			
			$(parent).toggleClass('is-uncollapsed');
			$(parent).children('.User__edit').toggleClass('is-uncollapsed');

	 }
    
    
	});
	
	$(document.body).on('click', '.js-edit-user-cancel' ,function(){
		$('.container.p-0').empty();

		$(defaultview).clone().appendTo('.container.p-0');
		
	});

  $(document.body).on('click', '.js-show-login-details' ,function(){ 
		var parent = $(this).closest('.User');
    if ( $(parent).children( '.User__edit' ).hasClass( 'is-uncollapsed' ) ) {
			$(parent).children('.User__edit').removeClass('is-uncollapsed');
		}
		
		$(parent).toggleClass('is-uncollapsed');
		$(parent).children('.User__login-info').toggleClass('is-uncollapsed');

  });
  
  
  $(document.body).on('click', '.js-edit-user-delete' ,function(){ 
		var parent = $(this).closest('.User');

		$(parent).children('.User__edit').removeClass('is-uncollapsed');
    $(parent).children('.User__delete').toggleClass('is-uncollapsed');
  });

	  
  $(document.body).on('click', '.js-edit-user-delete-confirm' ,function(){
		var parent = $(this).closest('.User').hide('slow', function(){ $target.remove(); });
  });
	
	  
  $(document.body).on('click', '.js-edit-user-delete-cancel' ,function(){
		var parent = $(this).closest('.User');

		$(parent).children('.User__delete').toggleClass('is-uncollapsed');
		$(parent).children('.User__edit').addClass('is-uncollapsed');
  });
	
	$(document.body).on('click', '.js-toggle-add-user' ,function(){
		$('.AddUser').toggleClass('is-uncollapsed');
	})
	
	$(document.body).on('click', '.js-add-user' ,function(){
		$(user).clone().appendTo('.container');
	})

});


