var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'www',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./www/*.html')
    .pipe(connect.reload());
});
 


gulp.task('stylus', function () {
  gulp.src('./www/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./www/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./www/*.html'], ['html']);
  gulp.watch(['./www/css/*.styl'], ['stylus']);
  // gulp.watch(['./www/js/*.js'], ['scripts']);
});

 
gulp.task('default', ['connect', 'watch']);