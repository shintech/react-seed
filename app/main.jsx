import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Home from './components/Home.jsx'
import Table from './components/Table.jsx'

global.jQuery = require('jquery')
require('bootstrap')
require('./public/css/style.scss')

ReactDOM.render((
  <Router>
    <div>
      <Navigation />
      <div className='container-fluid'>
        <Route exact path='/home' component={Home} />
        <Route exact path='/table' component={Table} />
      </div>
    </div>
  </Router>
), document.getElementById('container'))
