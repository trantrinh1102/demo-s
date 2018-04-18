import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/signup">Signup</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/widgets">Widgets</Link></li>
    <li><Link to="/styled">styled</Link></li>
  </ul>
)
