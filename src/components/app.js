import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../redux/actions'
import { Route, Link, Switch } from 'react-router-dom'
import { News } from "./news";

const PaginationLinks = () =>
  <div class="paginationLink">
    <Link to="/hackerNews/0">Previous </Link>
    <span> | </span>
    <Link to="/hackerNews/1">Next </Link>
  </div>

const Routes = () =>
  <Switch>
    <Route exact path="/" component={News} />
    <Route path="/hackerNews/:page" component={News} />
  </Switch>;

const App = ({ isFetching, news, fetchNews }) => {

  useEffect(() => {
    fetchNews()
  }, [])

  const totalNews = news.length;
  return (
    <>
      {isFetching && totalNews === 0 && <h2>Loading...</h2>}
      {!isFetching && totalNews ?
        <>
          <Routes />
          <PaginationLinks />
        </>
        : null}
    </>
  );
}


const mapStateToProps = state => {
  const { isFetching, news } = state.apps;
  return {
    isFetching,
    news
  }
}

export default connect(mapStateToProps, { fetchNews })(App)
