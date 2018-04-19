// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom'

class Tags extends React.Component {

  render() {
    console.log(this.props, 'this.props14')
    return (
      <div className="searchTabs" style={this.props.style}>
        <ul>
          <li>
            <NavLink to={'/blends'}>Blends</NavLink>
          </li>
          <li>
            <NavLink to={'/essential'}>Essential Oil</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Tags;
