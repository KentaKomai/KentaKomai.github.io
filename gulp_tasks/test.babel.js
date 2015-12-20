import gulp from 'gulp'
import eslint from 'gulp-eslint'

gulp.task('lint', function() {
  return gulp.src('./assets/sources/es6/**/*.js')
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})
