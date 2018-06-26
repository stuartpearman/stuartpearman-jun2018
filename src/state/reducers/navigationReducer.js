import { OPENNAV, CLOSENAV, TOGGLENAV } from '../actions/types'

const navigationReducer = (state = { navigation: false }, action) => {
  switch (action.type) {
    case OPENNAV:
      return { ...state, isOpen: true }
    case CLOSENAV:
      return { ...state, isOpen: false }
    case TOGGLENAV:
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

export default navigationReducer
