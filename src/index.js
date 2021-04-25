import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'lib-flexible'
import Router from './router'

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);