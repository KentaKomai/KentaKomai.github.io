import gulp from 'gulp';
import devServer from './devServer';

// test es6 command
gulp.task('hello', () => {
  console.log("hello gulp.");
});

gulp.task('start', () => {
  console.log("start devServer");
  devServer.server.run();
})
