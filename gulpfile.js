import { src, dest, watch, series } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

function js(done) {
  src("src/js/app.js").pipe(dest("build/js"));
  done();
}

function css(done) {
  src("src/scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("build/css"));
  done();
}

function dev() {
  watch("src/scss/**/*.scss", css);
  watch("src/js/app.js", js);
}

export default series(js, css, dev);
