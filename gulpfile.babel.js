import gulp from 'gulp'
import notify from 'gulp-notify'
import devServer from './devServer'

import './gulp/task/build.babel'
import './gulp/task/watch.babel'
import './gulp/task/test.babel'

gulp.task('server', () => {
  notify('start devServer')
  devServer.run()
})

gulp.task('default', ['build', 'watch'], () => {
  gulp.start('server')
})
