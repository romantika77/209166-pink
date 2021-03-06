"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var run = require("run-sequence");
var del = require("del");
<<<<<<< HEAD
var htmlmin = require("gulp-html-minifier");
var uglify = require("gulp-uglify");
=======
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var pump = require("pump");
var svgmin = require('gulp-svgmin');
>>>>>>> myAssembly

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
  });

gulp.task("compress", function (cb) {
  pump([
        gulp.src("source/js/*.js"),
        uglify(),
        rename({suffix: ".min"}),
        gulp.dest("build/js")
    ],
    cb
  );
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
    ]))
  .pipe(gulp.dest("build/img"));
});

<<<<<<< HEAD
gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
=======
gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/icons/*.svg")
    .pipe(svgstore({
    inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(svgmin())
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
    include()
    ]))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("build"));
});

gulp.task("serve", function() {
  server.init({
    server: "build/"
>>>>>>> myAssembly
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html", ["html"]);
<<<<<<< HEAD
});

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function() {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function(){
  return gulp.src("source/img/icons/icon*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function() {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true}))
    .pipe(gulp.dest("build"))
});

gulp.task("compress", function() {
  return gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build/js"))
});

gulp.task("copy", function() {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"))
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task ("build", function(done) {
  run("clean", "copy", "style", "sprite", "html", "webp", "images", "compress", done)
=======
  gulp.watch("source/js/**/*.js", ["script"]);
});


gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    ], {
    base: "source"
    })
    .pipe(gulp.dest("build"));
});

// таск для удаления
gulp.task("clean", function () {
  return del("build");
});

// таск запуска
gulp.task("build", function (done) {
  run(
  "clean",
  "copy",
  "style",
  "webp",
  "images",
  "compress",
  "sprite",
  "html",
  done
  );
>>>>>>> myAssembly
});
