var gulp       = require('gulp')
var browserify = require('gulp-browserify')
var uglify     = require('gulp-uglify')
var rename     = require('gulp-rename')
var crush      = require('gulp-jscrush')
var size       = require('gulp-size');
var version    = require('./package.json').version

gulp.task('build', function() {
    gulp.src('nanodom.js')
        .pipe(browserify({}))
        .pipe(size())
        .pipe(gulp.dest('./dist/'+version))
        .pipe(uglify())
        .pipe(size())
        .pipe(rename('nanodom.min.js'))
        .pipe(gulp.dest('./dist/'+version))
        .pipe(crush())
        .pipe(size())
        .pipe(rename('nanodom.crushed.js'))
        .pipe(gulp.dest('./dist/'+version))
})