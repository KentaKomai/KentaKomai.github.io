import gulp from 'gulp';
import devServer from './devServer';
import webpack from 'gulp-webpack';
import webpackConfig from './webpack.config.js';

// test es6 command
gulp.task('hello', () => {
  console.log("hello gulp.");
});

gulp.task('start', () => {
  console.log("start devServer");
  devServer.run();
})

gulp.task('webpack', () => {
  return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./assets/dist/javascript'));
})
