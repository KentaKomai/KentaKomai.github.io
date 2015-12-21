
import createHashHistory from 'history/lib/createHashHistory'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'

const history = createHashHistory()
const Router = ReactRouter.Router
const Route = ReactRouter.Route

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Gallery" component={Gallery} />
  </Router>
  , document.getElementById('application')
)
