const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass',function(){
    gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe('./css');
});

gulp.task('watch',function(){
    gulp.watch('./scss/**/*.scss',['sass']);
});
