/*

Design System Scripts

    This document contains all of the design system-specific front-
    end scripts.

*/

$("body").on("click.js-menutoggle", function () {
    $(this).toggleClass("show");
});