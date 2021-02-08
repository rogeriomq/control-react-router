import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import history from '~/services/historyService'

import App from './App'

import './tailwind.css'

render(
  <React.StrictMode>
    <RecoilRoot>
      <Router history={history}>
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
