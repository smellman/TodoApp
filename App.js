import React from 'react'
import TodoScreen from './src/TodoScreen'
import { Provider } from "react-redux";
import { store } from "./src/store"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    )
  }
}
