import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Router, Route, Switch } from 'react-router'
import { TodoContainer } from 'pages/TodoList/containers/TodoContainer'

// render react DOM
export const App = hot(({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={TodoContainer} />
      </Switch>
    </Router>
  )
})