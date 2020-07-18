import express from 'express'
import path from 'path'
import template from './src/template'
import ssr from './src/server'

const app = express()
const port = process.env.PORT || 8080;

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

let initialState = {
  isFetching: false,
  news: []
}

app.get('/*', (req, res) => {
  const { content } = ssr(initialState, req)
  const response = template("Server Rendered Page", content)
  res.send(response);
});


app.listen(port, () => {
  console.log("Listening to the port 8080")
});
