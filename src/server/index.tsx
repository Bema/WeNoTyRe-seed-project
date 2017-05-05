import * as http from 'http'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { match, StaticRouter } from 'react-router'

import configureClientStore from '../client/redux/store/configure-store'
import routes from '../client/routes'

const port = process.env.PORT || 8001

const server = http.createServer((req, res) => {
  const initialState = {}
  const routerContext = {}
  const store = configureClientStore(initialState)

  /* tslint:disable */
  const html = renderToString(
    <StaticRouter location={req.url} context={routerContext}>
      { routes }
    </StaticRouter>
  )
  /* tslint:enable */

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello World</h1>')
})

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log('SERVER: Listening on http://localhost:' + port)
})
