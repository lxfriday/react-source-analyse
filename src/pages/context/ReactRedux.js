import React from 'react'
import { Provider, connect } from 'react-redux'
import configStore from './store'

const store = configStore()

function Paragraph(props) {
  console.log('props', props)

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={null}>+ 增加</button> <br />
      <button onClick={null}>- 减少</button>
    </div>
  )
}

const ConnectParagraph = connect(store => {
  console.log('store', store)
  return { ...store }
})(Paragraph)

console.log(ConnectParagraph)

export default function ReactRedux() {
  return (
    <Provider store={store}>
      <ConnectParagraph />
    </Provider>
  )
}
