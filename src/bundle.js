import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app'

const store = configureStore()

hydrate(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.querySelector('#app')
)
