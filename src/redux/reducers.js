import { REQUEST_NEWS, UPDATE_NEWS } from './actions';

export const newsReducer = (state = { isFetching: false, news: [] }, action) => {
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



