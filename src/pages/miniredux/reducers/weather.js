const namespace = 'weather'
export const weatherGetData = `${namespace}/getData`

const INITIAL_STATE = {
  location: '',
  condition: '',
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case weatherGetData:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
