var gulp       = require('gulp')
var browserify = require('gulp-browserify')
var uglify     = require('gulp-uglify')
var rename     = require('gulp-rename')
var size       = require('gulp-size');
var gzip       = require('gulp-gzip');
var version    = require('./package.json').version

gulp.task('check-gzip', ['build'], function() {
    return gulp.src('dist/'+version+'/*.js')
        .pipe(gzip())
        .pipe(size({showFiles:true}))
})

gulp.task('build', function() {
    return gulp.src('nanodom.js')
        .pipe(browserify({
            standalone : 'nanodom'
        }))
        .pipe(size({showFiles:true}))
        .pipe(gulp.dest('./dist/'+version))
        .pipe(uglify())
        .pipe(rename('nanodom.min.js'))
        .pipe(size({showFiles:true}))
        .pipe(gulp.dest('./dist/'+version))
})

gulp.task('default', ['check-gzip'])