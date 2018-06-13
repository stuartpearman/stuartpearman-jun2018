import React from 'react'
import Link from 'gatsby-link'

const NavItem = ({ dest, children }) => (
  <li className="nav-item">
    <Link to={dest} className="nav-link">
      {children}
    </Link>
  </li>
)

export default NavItem
