import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NewsView } from "./news";

export const Routes = ({ news, updateModifiedNews }) =>
    <Switch>
        <Route exact path="/hackerNews"><NewsView news={news} updateModifiedNews={updateModifiedNews} /></Route>
        <Route path="/hackerNews/:page"> <NewsView news={news} updateModifiedNews={updateModifiedNews} /></Route>
    </Switch>;