import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

window.addEventListener('load', () => {
  console.log('hey')
  import('marked')
  import('highlight.js/styles/monokai-sublime.css')
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
