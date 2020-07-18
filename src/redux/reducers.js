import { REQUEST_NEWS, UPDATE_NEWS } from './actions';
import _ from "lodash";

function apps(state = { isFetching: false, news: [] }, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case UPDATE_NEWS:
      return Object.assign({}, state, {
        isFetching: false,
        news: action.news
      });
    default:
      return state
  }
}

function newsList(state = { newsList: [] }, action) {
  switch (action.type) {
    case UPDATE_NEWS:
      return Object.assign({}, state, {
        newsList: _.chunk(action.news, 3)
      });
    default:
      return state
  }
}

export const Reducers = {
  newsList, apps
}
