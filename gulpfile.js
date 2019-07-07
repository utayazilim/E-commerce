const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

gulp.task('watch', function () {
    browserSync.init({
        server:{
            baseDir:'./main'            
        }
    })
    gulp.watch('./scss/**/*.scss').on('change',browserSync.reload);
    gulp.watch('./main/*.html').on('change',browserSync.reload);
  });



