var gulp = require('gulp')
var uglify = require('gulp-uglify')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var watch = require('gulp-watch')
var clean = require('gulp-clean')
var htmlmin =require('gulp-htmlmin')
var replace = require('gulp-replace')
var imagemin = require('gulp-imagemin')
// gulp.task('watch',function(){
//     gulp.start('js')
//     gulp.watch(['src/js/**/*.js'],['js'])
// })



// 线上环境
gulp.task('prod',['cleanDist'],function(){
    gulp.start('minJs','minCss','minImg','handleHtml');
})
gulp.task('cleanDist',function(){
    return gulp.src(['dist/'])
        .pipe(clean())
})
gulp.task('minJs',function(){
    return gulp.src(['src/js/**/*.js'])
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist/js'))
})
gulp.task('minCss',function(){
    return gulp.src(['src/css/**/*.css'])
        .pipe(cleanCSS())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('dist/css'))
})
gulp.task('minImg',function(){
    return gulp.src(['src/imgs/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
})
gulp.task('handleHtml',['minHtml'],function(){
    gulp.start('replaceSrc')
})
gulp.task('minHtml',function(){
    return gulp.src(['src/html/**/*.html'])
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('dist/html'))
})
gulp.task('replaceSrc',function(){
    return gulp.src(['dist/html/**/*.html'])
        .pipe(replace('.min',''))
        .pipe(replace('.css','.min.css'))
        .pipe(replace('.js','.min.js'))
        .pipe(gulp.dest('dist/html'))
})