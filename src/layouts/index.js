import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

import { toggleNav } from '../state/actions/navigation'

import Navigation from '../components/Navigation/Nav'
import backdropImage from '../assets/images/stu-rialto.jpg'

import '../assets/stylesheets/__all.scss'

const DefaultLayout = ({ children, toggleNav, navIsOpen }) => (
  <div className="container">
    <header className="site-header">
      <Link to="/" className="site-header-brand">
        <h2>Stuart Pearman</h2>
      </Link>
      <button className="nav-toggle" onClick={toggleNav}>Menu</button>
      <Navigation />
    </header>
    <main className="site-main" data-nav-is-open={navIsOpen} >{children()}</main>
    <div className="backdrop" style={{
        backgroundImage: `url(${backdropImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center'
      }}></div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav())
})

const mapStateToProps = ({ navigation }) => ({ navIsOpen: navigation.isOpen })

export default connect(
  mapStateToProps, mapDispatchToProps
)(DefaultLayout)
