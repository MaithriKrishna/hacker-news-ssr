import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { newsReducer } from './reducers';


export default function configureStore(preloadedState) {
  return createStore(
    newsReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
