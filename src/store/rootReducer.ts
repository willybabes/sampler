import { combineReducers } from '@reduxjs/toolkit'

import fileReducer from './ducks/file/index'
import KEYS from './storekeys'

const rootReducer = combineReducers({
  [KEYS.FILE]: fileReducer
})

export default rootReducer
