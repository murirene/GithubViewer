var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require('gulp-webpack');
var webpack2 = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var gutil = require("gulp-util");

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

gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack2(myConfig), {
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task('default', ['client', 'server'], function() {
});
