var gulp = require('gulp');
var react = require('gulp-react');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

gulp.task('webserver', function(){
	gulp.src('.')
		.pipe(webserver());
});

gulp.task('watch', function(){
	watch('assets/mapapp.jsx')
		.pipe(react())
		.pipe(gulp.dest('assets'));
});

gulp.task('react', function(){
	gulp.src('assets/mapapp.jsx')
		.pipe(react())
		.pipe(gulp.dest('assets'));
});

gulp.task('default', ['webserver', 'react', 'watch']);
