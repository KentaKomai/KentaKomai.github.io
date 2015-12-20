
import gulp from 'gulp';
import path from 'path';
import conf from './conf.babel';

gulp.task('watch', () => {
  gulp.watch(['assets/sources/**/*.js'], ['webpack']);
});
