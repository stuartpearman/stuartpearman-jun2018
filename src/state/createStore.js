import { createStore as reduxCreateStore } from 'redux'
import reducers from './reducers'

const initialState = {
  count: 0,
  navigation: {
    isOpen: false
  }
}

const createStore = () => reduxCreateStore(reducers, initialState)

export default createStore
