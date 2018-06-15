import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import NavItem from './NavItem'

const Navigation = props => (
  <nav className="nav">
    <ul className="nav-items">
      <NavItem dest="/">Home</NavItem>
      <NavItem dest="/Styleguide/">Styleguide</NavItem>
      <NavItem dest="/count/">Redux Example</NavItem>
    </ul>
  </nav>
)

export default Navigation
