
'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');


exports.less = function () {
    return gulp.src('./src/css/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concatCss("styles.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.watch = function () {
    gulp.watch('./src/css/*.less', gulp.series('less'));
}