import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { HackerNews } from './components/index'
import { StaticRouter } from 'react-router-dom'

module.exports = function render(initialState, req) {
  const store = configureStore(initialState)
  const context = {};
  let content = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.url} context={context}>
        <HackerNews />
      </StaticRouter>,
    </Provider>
  );

  const preloadedState = store.getState()

  return { content, preloadedState };
}
