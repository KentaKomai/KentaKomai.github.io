
import createHashHistory from 'history/lib/createHashHistory'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'

const Router = ReactRouter.Router
const Route = ReactRouter.Route

const getApplicationDom = function(){
  let mainContentsElement = document.getElementById('application')
  return mainContentsElement
}

const getWindowHeight = function() {
  let winH = window.document.documentElement.clientHeight
  return winH < 640 ? 640 : winH - (47*2)
}

const init = function() {
  let mainContentsElement = getApplicationDom()
  mainContentsElement.setAttribute('style', 'height:' + getWindowHeight() + 'px')

  var resizeTimer
  var interval = Math.floor(1000 / 60 * 10)

  window.addEventListener('resize', () => {
    if (resizeTimer !== false) {
      clearTimeout(resizeTimer)
    }
    resizeTimer = setTimeout(function () {
      let mainContentsElement = getApplicationDom()
      mainContentsElement.setAttribute('style', 'height:' + getWindowHeight() + 'px')
    }, interval)
  })
}

ReactDOM.render(
  <Router history={createHashHistory({queryKey:false})}>
    <Route path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Gallery" component={Gallery} />
  </Router>
  , document.getElementById('application')
)

init()
