import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/home'

console.log('当前环境：', process.env.NODE_ENV)

const App = () => (
  <div>
    <Home />
  </div>
)

const appEl = document.createElement('div')
document.body.appendChild(appEl)
ReactDOM.render(<App />, appEl)