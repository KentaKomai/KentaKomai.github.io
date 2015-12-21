
import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch(['assets/sources/**/*.js'], ['lint', 'webpack'])
  gulp.watch(['assets/sources/**/*.jsx'], ['lint', 'webpack'])
  gulp.watch(['assets/sources/**/*.styl'], ['stylus'])
})
