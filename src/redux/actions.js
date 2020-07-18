
export const REQUEST_NEWS = 'REQUEST_NEWS'
export const UPDATE_NEWS = 'UPDATE_NEWS'

function requestNews() {
  return {
    type: REQUEST_NEWS
  }
}

function updateNews(json) {
  return {
    type: UPDATE_NEWS,
    news: json
  }
}

export function fetchNews() {
  return dispatch => {
    dispatch(requestNews())
    return fetch(`assets/data.json`)
      .then(response => response.json())
      .then(json => dispatch(updateNews(json)))
  }
}

