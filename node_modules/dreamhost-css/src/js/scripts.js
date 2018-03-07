// TODO make this better

var $link = $('.Tabs__nav-item');

$('.Tab').hide();
$('.Tab').first().show();
$link.click(function(){
	var x = $(this).data('tab');
	$('.Tab').hide();
	$(".Tabs__nav-item[data-tab='" + x + "']").addClass('is-active').siblings().removeClass('is-active');
	$(".Tabs").find("[data-tab='" + x + "']").show();
})

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

$(document).on('click', '.js-toggle-mobile-menu', function(e) {
	e.preventDefault();
	$('.Page-header').toggleClass('mobile-is-open');
});

// Make closing Toaster animation controllable with JS
// Example shown here using jQuery
$('.js-toaster-close').on('click', function () {
	$(this).closest('.Toaster--persistent').addClass('Toaster--is-closing');
});
