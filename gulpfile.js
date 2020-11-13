const gulp=require('gulp')
const rename = require("gulp-rename")
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
// const uglify = require('gulp-uglify')
const connect=require('gulp-connect')


// html
gulp.task('copy-html',function(){
    return gulp.src('html/*.html')
    .pipe(gulp.dest('dist/html/'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(rename(function(path){
        path.basename+='.min'
    }))
    .pipe(gulp.dest('dist/html/'))
    .pipe(connect.reload())
})

// index
gulp.task('index',function(){
    return gulp.src('index.html')
    .pipe(gulp.dest('dist'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(rename(function(path){
        path.basename+='.min'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
    
})

// css
gulp.task('sass',function(){
    return gulp.src('scss/*.{sass,scss}')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path){
        path.basename+='.min'
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload())
})

// js
gulp.task('scripts',function(){
    return gulp.src(['js/*.js','js/!gulpfile.js'])
    .pipe(gulp.dest('dist/js/'))
    // .pipe(uglify())
    // .pipe(rename(function(path){
    //     path.basename+='.min'
    // }))
    // .pipe(gulp.dest('dist/js/'))
    .pipe(connect.reload())
})

// img
gulp.task('images',function(){
    return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/img/'))
    .pipe(connect.reload())
})

// data
gulp.task('data',function(){
    return gulp.src('data/*.json')
    .pipe(gulp.dest('dist/data/'))
    .pipe(connect.reload())
})

// php
gulp.task('php',function(){
    return gulp.src('php/*.php')
    .pipe(gulp.dest('dist/php/'))
    .pipe(connect.reload())
})

// iconfont
gulp.task('iconfont',function(){
    return gulp.src('scss/iconfont/*')
    .pipe(gulp.dest('dist/css/iconfont/'))
    .pipe(connect.reload())
})


// 统一执行任务
gulp.task('build',['iconfont','copy-html','images','sass','scripts','data','index','php'],function(){
    console.log('项目建立成功')
})

// 监听
gulp.task('watch',function(){
    gulp.watch(['*.html','html/*.html','!index.html'],['copy-html'])
    gulp.watch('scss/*.{sass,scss}',['sass'])
    gulp.watch(['js/*.js','js/!gulpfile.js'],['scripts'])
    gulp.watch('images/**/*',['images'])
    gulp.watch('data/*.json',['data'])
    gulp.watch('index.html',['index'])
    gulp.watch('php/*.php',['php'])
    gulp.watch('scss/iconfont/*',['iconfont'])
})

// 服务器
gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:23333,
        livereload:true
    })
})

// 创建默认任务
gulp.task('default',['watch','server'])