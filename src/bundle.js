import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { BrowserRouter } from 'react-router-dom'
import { HackerNews } from './components/index'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

hydrate(
  <Provider store={store} >
    <BrowserRouter>
      <HackerNews />
    </BrowserRouter>,
  </Provider>,
  document.querySelector('#app')
)
