var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('autoprefixer', function(){
	return gulp.src('./css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('./sass/*.scss', ['sass']);
	gulp.watch('./css/*.css', ['autoprefixer','minify-css']);
});

gulp.task('minify-css', function() {
	gulp.src('./css/global.css')
		.pipe(gulp.dest('./css/'))
});

gulp.task('default', ['sass', 'autoprefixer', 'minify-css', 'watch']);