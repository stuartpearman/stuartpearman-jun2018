import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Navigation from '../components/Navigation/Nav'

import '../assets/stylesheets/__all.scss'

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="site-header">
          <Link to="/" className="site-header-brand">
            <h2>Welcome!</h2>
          </Link>
          <Navigation />
        </header>
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
