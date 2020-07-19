import express from 'express'
import path from 'path'
import template from './src/template'
import ssr from './src/server'
import axios from "axios";

const app = express()
const port = process.env.PORT || 8080;

app.use('/hackerNews/assets', express.static(path.resolve(__dirname, 'assets')));

const initialState = (res) => {
  return {
    isFetching: false,
    news: res
  }
}

app.get('/hackerNews', (req, res) => {
  axios.get(`https://hn.algolia.com/api/v1/search?page=0`).then(function (response) {
    const { content } = ssr(initialState(response.data), req)
    const html = template("Server Rendered Page", content, initialState(response.data))
    return res.send(html);
  },
  ).catch(function (err) { console.log("Fetch failed", err) })
});

app.get('/hackerNews/:page', (req, res) => {
  const page = req.params.page;
  axios.get(`https://hn.algolia.com/api/v1/search?page=${page}`).then(function (response) {
    const { content } = ssr(initialState(response.data), req)
    const html = template("Server Rendered Page", content, initialState(response.data))
    return res.send(html);
  },
  ).catch(function (err) { console.log("Fetch failed", err) })
});

app.listen(port, () => {
  console.log("Listening to the port 8080")
});
