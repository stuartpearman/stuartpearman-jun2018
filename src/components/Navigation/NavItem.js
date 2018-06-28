import React from 'react'
import { navigateTo } from 'gatsby-link'
import { connect } from 'react-redux'

import { closeNav } from '../../state/actions/navigation'

const NavItem = ({ dest, children, dispatchCloseNav }) => {
  const clickHandler = (e) => {
    e.preventDefault()
    navigateTo(dest)
    dispatchCloseNav()
  }

  return (
    <li className="nav-item">
      <a href={dest} onClick={clickHandler} className="nav-link">
        {children}
      </a>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchCloseNav: () => dispatch(closeNav())
})

export default connect(
  null,
  mapDispatchToProps
)(NavItem)
