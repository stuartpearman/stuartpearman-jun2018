import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

import { closeNav, toggleNav } from '../../state/actions/navigation'

import NavItem from './NavItem'

const Navigation = ({ toggleNav, closeNav, isOpen }) => (
  <div className="nav-wrapper">
    <button className="nav-toggle" onClick={toggleNav}>Toggle Nav</button>
    <nav className="nav" data-is-open={isOpen}>
      <button className="nav-exit" onClick={closeNav}>Close Nav</button>
      <ul className="nav-items">
        <NavItem dest="/styleguide/">Styleguide</NavItem>
        <NavItem dest="/count/">Redux Example</NavItem>
        <NavItem dest="/blog/">Blog</NavItem>
      </ul>
    </nav>
  </div>
)

const mapStateToProps = ({ navigation }) => ({ isOpen: navigation.isOpen })
const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav()),
  closeNav: () => dispatch(closeNav()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
