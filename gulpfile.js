const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass',()=>{
    gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe('./src/css');
});

gulp.task('watch',()=>{
    gulp.watch('./src/scss/**/*.scss',['sass']);
});
