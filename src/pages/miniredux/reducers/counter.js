export const ADD = 'ADD'
export const MINUS = 'MINUS'

const namespace = 'counter'
const INITIAL_STATE = {
  num: 0,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${namespace}/${ADD}`:
      return {
        ...state,
        num: state.num + 1,
      }
    case `${namespace}/${MINUS}`:
      return {
        ...state,
        num: state.num - 1,
      }
    default:
      return state
  }
}
