const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
gulp.task("sass",function(){
    gulp.src("sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
})