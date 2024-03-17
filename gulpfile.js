const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function scss() {
  return src("src/scss/**.scss")
    .pipe(sass().on("error", sass.logError)) // Добавляем обработку ошибок
    .pipe(dest("dist"));
}

exports.default = scss;