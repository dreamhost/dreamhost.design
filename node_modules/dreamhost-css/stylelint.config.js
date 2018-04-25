/*
	Stylelinting Rules for dreamhost.css

	Rules to (hopefully) keep our CSS looking nice, neat, and consistent while also not annoying people.
	stylelint.io/user-guide/rules/ has the full listing of rules with possible values and rule parameters.

	But just in case it gets annoying, you can disable linting for all or selected rules
	for a block by wrapping them in special comments, like so:
*/

/* stylelint-disable */
	// Style block goes here
/* stylelint-enable */

/* stylelint-disable selector-no-id, selector-no-type */
	// Style block goes here
/* stylelint-enable */

module.exports = {
	"rules": {

		// disallow qualifying a selector with a type, e.g a.foo {} or input#domain {} will fail
		"selector-no-qualifying-type": true,

		// limit number of adjacent empty lines in selectors
		"selector-max-empty-lines": 0,

		// limit specificity of selectors. "0,2,0" = 0 ids, 2 classes, 0 types
		"selector-max-specificity": "0,2,0",

		// require a space before/after selector operator, e.g. p+p {} fails, p + p {} passes
		"selector-combinator-space-before": "always",
		"selector-combinator-space-after": "always",

		// disallow non-space characters for descendant combinators, e.g. .a   .b {} fails, .a .b {} passes
		"selector-descendant-combinator-no-non-space": true,

		// disallow missing end of source newline
		"no-missing-end-of-source-newline": true,

		// disallow whitespace at the end of a line, e.g. a {} ;
		"no-eol-whitespace": true,

		// disallow extra semicolons at the end of rules
		"no-extra-semicolons": true,

		// disallow duplicate selectors
		"no-duplicate-selectors": true,

		// disallow a selector of lower specificity from coming after and overriding a selector of higher specificity
		// e.g. .a input {} input {} fails
		"no-descending-specificity": true,

		// disallow trailing zeroes in numbers, e.g. 1.00px or 1.20em
		"number-no-trailing-zeros": true,

		// disallow hex values for colors
		"color-no-hex": true,

		// disallow empty comments
		"comment-no-empty": true,

		// require whitespace inside comment markers, e.g. /**comment**/ fails /** comment **/ passes
		"comment-whitespace-inside": "always",

		// disallow space before style declaration colon, require space after colon
		// e.g. width:0, width :0 fails; width: 0 passes
		"declaration-colon-space-after": "always",
		"declaration-colon-space-before": "never",

		// disallow space before media query colon, require space after colon
		// e.g. @media (min-width :640px) fails; @media (min-width: 640px) passes
		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",

		// disallow empty lines before declarations except after a comment or inside a single line block
		"declaration-empty-line-before": ["never", {
			"ignore": ["after-comment", "inside-single-line-block"]
		}],

		// disallow duplicate props in the same declaration block, e.g. {color: #fff; width: 100%; color: #000;}
		"declaration-block-no-duplicate-properties": true,

		// disallow shorthand properties that override a longhand one same block
		// e.g. {padding-left: 5px; padding: 2px;} fails, {padding: 2px; padding-left: 5px} passes
		"declaration-block-no-shorthand-property-overrides": true,

		// require a newline after a semicolon for all multi-line blocks.
		"declaration-block-semicolon-newline-after": "always-multi-line",

		// require a space after a semicolon for multiple declarations in a single block
		"declaration-block-semicolon-space-after": "always-single-line",

		// disalllow empty lines before a block's closing brace
		"block-closing-brace-empty-line-before": "never",

		// require a newline after a closing brace for a multi-line block
		"block-closing-brace-newline-after": "always-multi-line",

		// disallow empty blocks
		"block-no-empty": true,

		// require newline after an opening brace for multi-line blocks
		"block-opening-brace-newline-after": "always-multi-line",

		// disallow units for 0 values
		"length-zero-no-unit": true,

		// disallow vendor prefixes (added on distro code compilation)
		"selector-no-vendor-prefix": true,
		"value-no-vendor-prefix": true,
		"property-no-vendor-prefix": true,

		// tabs > spaces or fight me
		"indentation": ["tab", {"message": "Space(s) detected! Wee-oo wee-oo!"}],

		// disallow redundant values when a shorthand is available, e.g. margin: 1px vs. margin: 1px 1px 1px 1px
		"shorthand-property-no-redundant-values": true,

		// require lowercase for all properties, values, and units
		"property-case": "lower",
		"value-keyword-case": "lower",
		"unit-case": "lower",

		// disallow unknown properties. mainly for accidental typos in properties
		"property-no-unknown": true,

		// maximum depth nesting depth. .a {.b {.c {}}} passes, .a {.b {.c {.d {}}}}
		"max-nesting-depth": 3,

		/* white/blacklists to accept/ban certain units or values, should we ever want to
		// usage ["px", "rem", "s"]
		"unit-blacklist": [],
		"unit-whitelist": [],

		// usage {"font-size": ["em", "px"], "line-height": ["px", "rem"]}
		"declaration-property-unit-blacklist": [],
		"declaration-property-unit-whitelist": [],

		// usage {"position": ["fixed", "absolute"], "display": ["flex"]}
		"declaration-property-value-blacklist": [],
		"declaration-property-value-whitelist": []
		*/
	}
}
