import gulp from 'gulp';
import webpack from 'gulp-webpack';
import webpackConfig from '../webpack.config.js';

gulp.task('webpack', () => {
  return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./assets/dist/javascript'));
})
