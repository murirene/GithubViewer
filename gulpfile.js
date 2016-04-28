var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require('gulp-webpack');

gulp.task("client", function () {
  return gulp.src("./src/js/index.js")
      .pipe(webpack(require('./webpack.config.js') ))
      .pipe(gulp.dest("./build"));
});

gulp.task("server", function () {
  return gulp.src("./server.js")
      .pipe(babel())
      .pipe(gulp.dest("./build"));
});

gulp.task('default', ['client', 'server'], function() {
});
