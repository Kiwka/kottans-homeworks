var gulp = require('gulp'),
	/*imagemin = require('gulp-imagemin'),*/
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('cssMin', function() {
  gulp.src('./css/*.css')
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./css/min/'));
});

/*gulp.task('compressImages', function() {
  gulp.src('./images/*.*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./dist/images'));
});
*/

gulp.task('watch', function() {
	gulp.watch('./sass/*.scss', ['sass']);
	gulp.watch('./css/*.css', ['cssMin']);
});

gulp.task('default', ['sass','cssMin', 'watch']);