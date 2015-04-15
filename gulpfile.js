var gulp = require('gulp');

var connect = require('gulp-connect');

gulp.task('entry_js', function() {
    gulp.src('personal/js/*.js')
        .pipe(connect.reload());
});

gulp.task('main_js', function() {
    gulp.src('./personal/js/app/*.js')
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src('personal/css/*.css')
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('personal/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['personal/js/*.js'], ['entry_js']);
    gulp.watch(['personal/js/app/*.js'], ['main_js']);
    gulp.watch(['personal/css/*.css'], ['css']);
    gulp.watch(['personal/*.html'], ['html']);
});

gulp.task('connect', function() {
    connect.server({
        root: "./",
        port: 8888,
        fallback: 'index.html',
        livereload: true
    });
});

gulp.task('default', ["connect", 'watch']);
