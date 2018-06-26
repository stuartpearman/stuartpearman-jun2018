import { combineReducers } from 'redux'

import count from './countReducer'
import navigation from './navigationReducer'

const reducers = combineReducers({ count, navigation })

export default reducers
