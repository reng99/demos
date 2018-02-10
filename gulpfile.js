var gulp = require('gulp')

var uglify = require('gulp-uglify')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var clean = require('gulp-clean')
var htmlmin =require('gulp-htmlmin')
var replace = require('gulp-replace')
var imagemin = require('gulp-imagemin')

var watch = require('gulp-watch')
var connect = require('gulp-connect')

// 开发环境
gulp.task('dev',function(){
    gulp.start('auto_reload')
})
gulp.task('auto_reload',['connect'],function(){
    gulp.start('watch')
})
gulp.task('connect',function(){
    connect.server({
        root: './',
        port: 8000,
        livereload: true , // 启动实时刷新
    })
})
gulp.task('watch',function(){
    gulp.watch(['src/**/*.html','src/**/*.css','src/**/*.js'],['refresh'])
})
gulp.task('refresh',function(){
    gulp.src(['src/**/*.html','src/**/*.css','src/**/*.js'])
        .pipe(gulp.dest('src'))
        .pipe(connect.reload())
})

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