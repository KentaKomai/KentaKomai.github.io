
import gulp from 'gulp';
import path from 'path';

gulp.task('watch', () => {
  gulp.watch(['assets/sources/**/*.js'], ['webpack']);
});
