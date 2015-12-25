import gulp from 'gulp'
import webpack from 'webpack-stream'
import webpackConfig from '../../webpack.config.js'
import stylus from 'gulp-stylus'

gulp.task('build', () => {
  gulp.start('webpack')
  gulp.start('stylus')
})

gulp.task('webpack', () => {
  return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./assets/dist/javascript/'))
})

gulp.task('stylus', () => {
  return gulp.src('./assets/sources/stylus/*')
      .pipe(stylus())
      .pipe(gulp.dest('./assets/dist/css/'))
})
