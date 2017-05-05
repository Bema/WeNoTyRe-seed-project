import * as React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import {
  AboutPage,
  HomePage,
  NotFoundPage
} from '../containers'

import { MainMenu } from '../components'

export default (
  <div>
    <MainMenu />
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route path="/about" component={ AboutPage }/>
      <Route component={ NotFoundPage }/>
    </Switch>
  </div>
)
