var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS    = require('gulp-clean-css');
var sass        = require('gulp-sass');
var stylelint   = require('gulp-stylelint');
var prefix      = require('gulp-autoprefixer');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var lintconfig  = require('./stylelint.config.js');
var package     = require('./package.json');

var dist = {
	fileName: 'dreamhost',
	path: {
		version: './dist/' + package.version,
		latest: './dist/latest'
	}
};

/*

	## gulp serve

	1. Run the BrowserSync server at http://localhost:9999
	2. Compile .scss and inject into browser
	3. Live-reload .html

*/

gulp.task('serve', ['styles', 'js'], function() {

		browserSync.init({
				server: "./",
				port: 9999,
				open: false
		});

		gulp.watch("./src/js/*.js", ['js']);
		gulp.watch("./src/scss/**/*.scss", ['styles']);
		gulp.watch("./**/*.html").on('change', browserSync.reload);
});

/*

	## gulp style linting

	1. Lint sass and log any errors to the console.
	2. Ignore defaults.scss and reset.scss

*/

gulp.task('lint', function() {
	return gulp.src([
		'./src/scss/*.scss',
		'!./src/scss/_defaults.scss',
		'!./src/scss/_reset.scss',
		'!./src/scss/_variables.scss'
	])
	.pipe(stylelint({
		failAfterError: false,
		reporters: [{formatter: 'string', console: true}]
	}));
});

/*

	## gulp styles

	1. Compile sass
	2. Add minified, versioned(TODO) file to /dist folder
	3. Inject into browser with BrowserSync

*/

gulp.task('styles', ['lint'], function () {
	return gulp.src('./src/scss/*.scss')
		.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
		.pipe(gulp.dest('./src/css/'))
		.pipe(browserSync.stream());
});

/*

	## gulp js

	Compile js for distribution. Use version from package.json.
	Place the following files in /dist/:

	1. main.js

*/

gulp.task('js', function() {
	return gulp.src([
			'./src/js/*.js',
			'!./src/js/bundle.js'
		])
		// .pipe(concat('bundle.js'))
		// .pipe(gulp.dest('./src/js/'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('js-dist', function() {
	return gulp.src([
			'./src/js/*.js',
			'!./src/js/bundle.js'
		])
		.pipe(concat(dist.fileName + '.js'))
		.pipe(gulp.dest(dist.path.version))
		.pipe(gulp.dest(dist.path.latest))
		.pipe(uglify())
		.pipe(rename(dist.fileName + '.min.js'))
		.pipe(gulp.dest(dist.path.version))
		.pipe(gulp.dest(dist.path.latest));
});

gulp.task('css-dist', function() {
	return gulp.src('./src/scss/*.scss')
		.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
		.pipe(prefix({browsers: ['last 4 versions']}))
		.pipe(rename(dist.fileName + '.css'))
		.pipe(gulp.dest(dist.path.version))
		.pipe(gulp.dest(dist.path.latest))
		.pipe(cleanCSS())
		.pipe(rename(dist.fileName + '.min.css'))
		.pipe(gulp.dest(dist.path.version))
		.pipe(gulp.dest(dist.path.latest));
});

/*

	## gulp dist

	Compile css for distribution. Use version from package.json.
	Place the following files in /dist/:

	1. dreamhost.[version].css
	2. dreamhost.[version].min.css

*/

gulp.task('dist', ['css-dist', 'js-dist'], function() {
	return; // This just runs css-dist and js-dist
})

/*

	## gulp

	The default gulp task will run the server which watches,
	compiles and updates HTML and SCSS.

*/

gulp.task('default', ['serve']);
