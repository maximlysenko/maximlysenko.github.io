var gulp         = require('gulp');
var sass         = require('gulp-sass');
var cssmin       = require('gulp-cssmin');
var jade         = require('gulp-jade');
var autoPrefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var browserSync  = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src('dev/sass/styles.sass')
        .pipe(sass({
          onError: browserSync.notify
        }))
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dest/css'))
        .pipe(browserSync.reload({
            stream: true,
            notify: false
        }));
});

gulp.task('scripts', function() {
    return gulp.src('dev/js/main.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dest/js'))
        .pipe(browserSync.reload({
            stream: true,
            notify: false
        }));
});

gulp.task('markup', function() {
    return gulp.src('dev/index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({
            stream: true,
            notify: false
        }));
});

gulp.task('default', ['browser-sync', 'markup', 'styles', 'scripts'], function () {
    gulp.watch("dev/sass/*.sass", ['styles']);
    gulp.watch("dev/js/*.js", ['scripts']);
    gulp.watch("dev/index.jade", ['markup']);
});
