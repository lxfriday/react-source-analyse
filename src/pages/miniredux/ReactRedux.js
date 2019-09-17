import React from 'react'
import { Provider, connect } from './lib/react-redux'
import configStore from './store'
import getWeather from './getWeather'
import { ADD, MINUS } from './reducers/counter'
const store = configStore()

// Recorder 也使用 connect
function Recorder({ num }) {
  return <p style={{ textAlign: 'center' }}>Recorder => num: {num}</p>
}

function Paragraph({ dispatch, num, location, condition }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => dispatch({ type: `counter/${ADD}` })}>+ 增加</button>
      <button onClick={() => dispatch({ type: `counter/${MINUS}` })}>- 减少</button>
      <button onClick={() => dispatch(getWeather)}>测试 thunk</button>
      <p>num: {num}</p>
      {!!location.length && (
        <p>
          <span style={{ backgroundColor: 'cyan' }}>
            weather: {location} is {condition}
          </span>
        </p>
      )}
    </div>
  )
}
const ConnectParagraph = connect(
  ({ counter, weather }) => ({ ...counter, ...weather }),
  dispatch => ({ dispatch })
)(Paragraph)

const ConnectRecorder = connect(
  ({ counter }) => ({ ...counter }),
  d => ({ d })
)(Recorder)

export default function ReactRedux() {
  return (
    <Provider store={store}>
      <ConnectParagraph />
      <ConnectRecorder />
    </Provider>
  )
}
