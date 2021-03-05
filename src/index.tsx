import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { App } from 'pages/TodoList'
// import './App.css';

// prepare history
const history = createBrowserHistory()

if (module && module.hot) {
  module.hot.accept()
}
// render react DOM
ReactDOM.render(<App history={history} />, document.getElementById('root'))
