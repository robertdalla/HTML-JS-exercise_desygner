
var gulp = require('gulp'),
    watch = require("gulp-watch"),
    less = require('gulp-less'),
    babel = require('gulp-babel'),
    path = require('path');

gulp.task('watch', function () {
    gulp.watch('src/*.less', ['compile-less']);
    gulp.watch('src/*.es6', ['compile-js']);
});

gulp.task('compile-less', function () {
    return gulp.src('./src/*.less') // path to your file
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('compile-js', function () {
    return gulp.src('./src/code.es6')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('./build/'));
});


// npm install gulp-less --save-dev
// npm install gulp-watch --save-dev
// npm install --save-dev gulp-babel babel-preset-es2015

gulp.task('default', ['watch']);