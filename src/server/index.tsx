import * as fs from 'fs'
import * as path from 'path'
import * as express from 'express'
import * as React from 'react'
import * as cheerio from 'cheerio'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { match, StaticRouter } from 'react-router'

import configureClientStore from '../client/redux/store/configure-store'
import routes from '../client/routes'

const PORT = process.env.PORT || 8001

const indexPagePath = path.resolve('./build/client/index.html')
const indexPage = cheerio.load(fs.readFileSync(indexPagePath, 'utf8'))
const app = express()

app.use(express.static(path.resolve('./build/client/')))

// TODO API
app.get('/api/*', (req, res) => {
  res.send(200, {status: 'TODO'})
})

// Serve React App
app.get('/*', (req, res) => {
  const initialState = {}
  const routerContext = {}
  const store = configureClientStore(initialState)

  /* tslint:disable */
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={routerContext}>
        { routes }
      </StaticRouter>
    </Provider>
  )
  /* tslint:enable */

  res.type('text/html')
  res.send(200, renderIndexPage(content))
})

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log('SERVER: Listening on http://localhost:' + PORT)
})

// HELPERS

function renderIndexPage(content) {
  indexPage('.root')
    .empty()
    .append(content)
    .htnl()
}
