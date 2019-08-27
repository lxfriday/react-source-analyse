import React, { Component, createContext, useConText } from 'react'

const ColorContext = createContext(null)

const { Provider, Consumer } = ColorContext

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      background: 'cyan',
    }
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

function Article({ children }) {
  return (
    <App>
      <h1>Context</h1>
      <p>hello world</p>
      {children}
    </App>
  )
}

function Paragraph({ color, background }) {
  return (
    <div style={{ backgroundColor: background }}>
      <span style={{ color }}>text</span>
    </div>
  )
}

function TestContext() {
  return (
    <Article>
      <Consumer>{state => <Paragraph {...state} />}</Consumer>
    </Article>
  )
}

export default TestContext
