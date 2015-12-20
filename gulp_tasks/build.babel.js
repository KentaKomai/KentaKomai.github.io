import gulp from 'gulp';
import webpack from 'gulp-webpack';
import webpackConfig from '../webpack.config.js';
import stylust from 'stylus';

gulp.task('webpack', () => {
  return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./assets/dist/javascript/'));
});

gulp.task('stylus', () => {
  return gulp.src('./assets/sources/stylus/*')
      .pipe(stylus())
      .pipe(gulp.dest('./assets/dist/css/'));
})
