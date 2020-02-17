import React from 'react'
import { Provider } from 'react-redux'

import store from './store/index'
import Audio from './Components/Audio/index'

const App = () =>  (
  <Provider store={store}>
    <h2>Hello React App from scratch</h2>
    <Audio />
  </Provider>
)

export default App