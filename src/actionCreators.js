import { TODO } from './actions'
export const addTodo = (text) => {
  return {
    type: TODO.ADD,
    text
  }
}

export const toggleTodo = (todo) => {
  return {
    type: TODO.TOGGLE,
    todo
  }
}
