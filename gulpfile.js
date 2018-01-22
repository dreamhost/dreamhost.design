const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS    = require('gulp-clean-css');
const sass        = require('gulp-sass');
const stylelint   = require('gulp-stylelint');
const prefix      = require('gulp-autoprefixer');
const rename      = require('gulp-rename');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const lintconfig  = require('./stylelint.config.js');
const package     = require('./package.json');
const child       = require('child_process');
const gutil       = require('gulp-util');
const siteRoot    = '_site';
const cssFiles    = '_css/**/*.?(s)css';

/*

	## gulp serve

	1. Run the BrowserSync server at http://localhost:7676
	2. Compile .scss and inject into browser
	3. Live-reload .html

*/

gulp.task('serve', ['styles', 'jekyll'], function() {

		browserSync.init({
				files: [siteRoot + '/**'],
				port: 7676,
				open: false,
				server: {
					baseDir: siteRoot
				}
		});

		gulp.watch(cssFiles, ['styles']);
		gulp.watch("./assets/_scss/**/*.scss", ['styles']);
});

/*

	## gulp style linting

	1. Lint sass and log any errors to the console.

*/

gulp.task('lint', function() {
	return gulp.src([
		'./assets/_scss/*.scss'
	])
	.pipe(stylelint({
		failAfterError: false,
		reporters: [{formatter: 'string', console: true}]
	}));
});

/*

	## gulp styles

	1. Compile sass
	2. Inject into browser with BrowserSync

*/

gulp.task('styles', ['lint'], function () {
	return gulp.src('./assets/_scss/*.scss')
		.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(browserSync.stream());
});

/*

	## gulp jekyll

	1. Launch jekyll serve
	2. Capture output buffer
	3. Cleanup & logging

*/

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
	'--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

/*

	## gulp

	The default gulp task will run the server which watches,
	compiles and updates HTML and SCSS.

*/

gulp.task('default', ['serve']);
