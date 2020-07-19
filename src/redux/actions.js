import axios from "axios";

export const REQUEST_NEWS = 'REQUEST_NEWS'
export const UPDATE_NEWS = 'UPDATE_NEWS'


function requestNews() {
  return {
    type: REQUEST_NEWS
  }
}

export function updateModifiedNews(json) {
  return {
    type: UPDATE_NEWS,
    news: json
  }
}

export function fetchNews(page) {
  return dispatch => {
    dispatch(requestNews())
    return axios.get(`https://hn.algolia.com/api/v1/search?page=${page}`).then(function (response) {
      dispatch(updateModifiedNews(response.data))
    },
    ).catch(function (err) { console.log("Fetch failed", err) })
  }
}

