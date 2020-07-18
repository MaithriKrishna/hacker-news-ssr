import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Reducers } from './reducers';


export default function configureStore(preloadedState) {
  return createStore(
    combineReducers(Reducers),
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
