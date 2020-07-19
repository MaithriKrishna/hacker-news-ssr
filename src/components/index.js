import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import loadable from '@loadable/component'
import { fetchNews, updateModifiedNews } from '../redux/actions'
import { setLocalStorage, getLocalStorageData, setStateWithLocalStorage } from "./helper";
import { PaginationLinks } from "./paginationlinks";
import { Routes } from "./routes";
import "./style.css";

const LineChart = loadable(() => import('./lineChart'))

const News = ({ isFetching, news, fetchNews, updateModifiedNews }) => {

  const { hits, page, nbPages } = news;

  useEffect(() => {
    setLocalStorage(news);
  })

  useEffect(() => {
    setStateWithLocalStorage(news.page, updateModifiedNews);
  }, [])

  function updateNews(page) {
    getLocalStorageData(page) ?
      setStateWithLocalStorage(page, updateModifiedNews) :
      fetchNews(page)
  }

  return (
    <>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && hits.length ?
        <>
          <Routes news={news} updateModifiedNews={updateModifiedNews} />
          <PaginationLinks page={page} nbPages={nbPages} updateNews={updateNews} />
          <LineChart page={page} news={news} />
        </>
        : null}
    </>
  );
}


const mapStateToProps = ({ isFetching, news }) => {
  return {
    isFetching,
    news
  }
}

export const HackerNews = connect(mapStateToProps, { fetchNews, updateModifiedNews })(News)
