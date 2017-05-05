import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

export default function MainMenu() {
  return (
    <div className="main-menu">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  )
}
