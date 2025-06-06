const gulp = require("gulp");
const connect = require("gulp-connect");

function html() {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
}

function css() {
  return gulp.src("src/css/*.css")
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
}

function js() {
  return gulp.src("src/js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
}

function img() { 
  return gulp.src("src/img/**/*") 
    .pipe(gulp.dest("dist/img"))
    .pipe(connect.reload());
}

function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/css/*.css", css);
  gulp.watch("src/js/*.js", js);
  gulp.watch("src/img/**/*", img); 
}

function server() {
  connect.server({
    root: "dist",
    livereload: true,
    port: 8080
  });
}


exports.default = gulp.parallel(html, css, js, img, server, watch);