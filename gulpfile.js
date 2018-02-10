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

var config = require('./config')



// 开发环境
gulp.task('dev',['srcPath'],function(){
    gulp.start('srcPath','auto_reload')
})
gulp.task('srcPath',function(){
    return gulp.src(['./index.html'])
        .pipe(replace('./dist','./src'))
        .pipe(replace('.min',''))
        .pipe(gulp.dest('./'))
})
gulp.task('auto_reload',['connect'],function(){
    gulp.start('watch')
})
gulp.task('connect',function(){
    connect.server({
        root: './',
        port: config.port,
        livereload: true , // 启动实时刷新
    })
    console.log('listen at http://localhost:' + config.port)
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
gulp.task('cleanDist',['distPath'],function(){
    process.env.NODE_ENV = 'prod'
    return gulp.src(['dist/'])
        .pipe(clean())
})
gulp.task('distPath',function(){
    return gulp.src(['./index.html'])
        .pipe(replace('./src','./dist'))
        .pipe(replace('.min',''))
        .pipe(replace('.css','.min.css'))
        .pipe(replace('.js','.min.js'))
        .pipe(gulp.dest('./'))
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
    return gulp.src(['src/imgs/**/*'])
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