import { configureStore, getDefaultMiddleware, ConfigureStoreOptions } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'

const middleware = [...getDefaultMiddleware({
  thunk: false,
  serializableCheck: {
    ignoredActions: ['uploadRequest', 'addUploadPlaceholders']
  }
})]

export const getStore = (overrides: Partial<ConfigureStoreOptions> = {}) => configureStore({
  reducer: rootReducer,
  middleware,
  ...overrides
})
const defaultStore = getStore()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    defaultStore.replaceReducer(newRootReducer)
  })
}

export default defaultStore
