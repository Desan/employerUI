var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jade = require('gulp-jade'),
	browserSync = require('browser-sync');

gulp.task('sass', function() {
	return gulp.src(['dev/scss/**/*.scss', '!dev/scss/**/_*.scss'])
			   .pipe(sass())
			   .pipe(gulp.dest('app/css'))
			   .pipe(browserSync.reload({
			   		stream: true
			   }))
});

gulp.task('jade', function() {
	return gulp.src(['dev/jade/**/*.jade', '!dev/jade/**/_*.jade'])
			   .pipe(jade({
			   		pretty: true
			   }))
			   .pipe(gulp.dest('app'))
			   .pipe(browserSync.reload({
			   		stream: true
			   }))
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
	})
});

gulp.task('watch', ['browserSync', 'sass', 'jade'], function() {
	gulp.watch('dev/scss/**/*.scss', ['sass']);
	gulp.watch('dev/jade/**/*.jade', ['jade']);
});
