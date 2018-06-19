import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { increment as incrementCount } from '../state/actions/count'

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch(incrementCount()) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
