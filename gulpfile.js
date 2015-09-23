var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	uglify 		= require('gulp-uglify'),	
	sass        = require('gulp-sass'),
	connect 	= require('gulp-connect'),
	supervisor = require( "gulp-supervisor" ),
	plumber 	= require('gulp-plumber');	


gulp.task('styles', function() {
	gulp.src('public/sass/*.scss')
	.pipe(plumber())
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('public/stylesheets/'))
	.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src([
		'public/js/app/app.js',
		'public/js/app/**/*.js'
		])
	.pipe(concat('rtr.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/js/build'))
	.pipe(connect.reload());
});
gulp.task('html', function() {
  gulp.src('views/*.hbs')
    .pipe(connect.reload())
});


gulp.task('connect', function() {
  connect.server({
    root: "./",
    livereload: true
  });
});

var supervisor = require("gulp-supervisor");

gulp.task("default", function () {
	gulp.watch('public/sass/*.scss',['styles']);
	gulp.watch(['public/js/app/app.js','public/js/app/**/*.js'],['js']);
	gulp.watch(['views/*.hbs'],['html']);
	supervisor("./bin/www", {extensions: ["js","hbs"]})
  // .pipe(connect.reload())
  ;
});

