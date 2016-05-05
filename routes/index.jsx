import React from 'react'
import {
	Route,
	Router,
	IndexRoute,
	browserHistory
} from 'react-router'
import NotFound from '../views/404'
import Application from '../views/app'
import Login from '../views/Login'
import Home from '../views/Home'
import Detail from '../views/Detail'
import Latest from '../views/Latest'
import Search from '../views/Search'
import Profile from '../views/Profile'

module.exports = () => {
  return <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Home} />
      <Route path="latest" component={Latest} />
      <Route path="search" component={Search} />
      <Route path="login" component={Login} />

      <Route path="topics/:id" component={Detail} />
      <Route path="users/:id" component={Profile} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
}
