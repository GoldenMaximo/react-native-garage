import React from 'react'
import { Container, StatusBar } from './src/styles'
import { Provider } from 'react-redux'
import { store } from './src/store'

import Garage from './src/screens/Garage'

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <StatusBar />
        <Garage />
      </Container>
    </Provider>
  )
}
