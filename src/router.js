import React, { PropTypes } from 'react'
import { Router, Route ,hashHistory, IndexRoute} from 'react-router'

import App from './App'
import Home from './Home/'
import About from './About/'
import Blog from './Blog/'
import Work from './Work/'
import Item from './Item/'

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
          <Route path='blog' component={Blog} />
          <Route path='work' component={Work} />
          <Route path='item/:title' component={Item} />
        </Route>
      </Router>
    )
  }
}

export default Routers;
