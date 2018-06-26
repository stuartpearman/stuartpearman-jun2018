import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

import { toggleNav } from '../state/actions/navigation'

import Navigation from '../components/Navigation/Nav'

import '../assets/stylesheets/__all.scss'

const DefaultLayout = ({ children, toggleNav }) => (
  <div className="container">
    <header className="site-header">
      <Link to="/" className="site-header-brand">
        <h2>Stuart Pearman</h2>
      </Link>
      <button className="nav-toggle" onClick={toggleNav}>Menu</button>
      <Navigation />
    </header>
    <main className="site-main">{children()}</main>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav())
})

export default connect(
  null, mapDispatchToProps
)(DefaultLayout)
