import React from 'react'
import PropTypes from 'prop-types'

import Counter from '../components/Counter'

class Count extends React.Component {
  render() {
    return (
      <div>
        <h2>Count</h2>
        <Counter />
      </div>
    )
  }
}

export default Count
