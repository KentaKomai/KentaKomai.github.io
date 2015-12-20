import gulp from 'gulp'
import devServer from './devServer'

import './gulp_tasks/build.babel'
import './gulp_tasks/watch.babel'
import './gulp_tasks/test.babel'

// test es6 command
gulp.task('hello', () => {
  console.log('hello gulp')
})

gulp.task('server', () => {
  console.log('start devServer')
  devServer.run()
})

gulp.task('default', ['watch'], () => {
  gulp.start('server')
})
