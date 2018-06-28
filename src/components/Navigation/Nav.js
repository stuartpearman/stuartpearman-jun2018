import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

import { closeNav } from '../../state/actions/navigation'

import NavItem from './NavItem'

const Navigation = ({ closeNav, isOpen }) => (
  <nav className="nav" data-is-open={isOpen}>
    <div className="nav-links">
      <button className="nav-exit" onClick={closeNav}>Back</button>
    </div>
    <ul className="nav-items">
      <NavItem dest="/">Home</NavItem>
      <NavItem dest="/process/">Process</NavItem>
      <NavItem dest="/work/">Case Studies</NavItem>
      <NavItem dest="/blog/">Blog</NavItem>

    </ul>
  </nav>
)

const mapStateToProps = ({ navigation }) => ({ isOpen: navigation.isOpen })
const mapDispatchToProps = dispatch => ({
  closeNav: () => dispatch(closeNav()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
