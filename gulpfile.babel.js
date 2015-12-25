import gulp from 'gulp'
import devServer from './devServer'

import './gulp/task/build.babel'
import './gulp/task/watch.babel'
import './gulp/task/test.babel'

gulp.task('server', () => {
  console.log('start devServer')
  devServer.run()
})

gulp.task('default', ['watch'], () => {
  gulp.start('server')
})
