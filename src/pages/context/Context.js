import React, { Component, createContext } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
})

const TitleContext = createContext({
  title: 'lxfriday',
})

class ThemeProvider extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      theme: 'light',
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

class TitleProvider extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      title: 'yuny',
    }
  }

  render() {
    return (
      <TitleContext.Provider value={this.state}>
        {this.props.children}
      </TitleContext.Provider>
    )
  }
}

class Paragraph extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeCtx => (
          <TitleContext.Consumer>
            {titleCtx => (
              <div>
                <h1>{titleCtx}</h1>
                <h2>theme: {themeCtx}</h2>
              </div>
            )}
          </TitleContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }
}

// console.log('ThemeContext', ThemeContext)
// console.log('ThemeContext.Provider', ThemeContext.Provider)
// console.log('ThemeContext.Consumer', ThemeContext.Consumer)

export default class Context extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      title: 'yuny',
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <TitleContext.Provider value={this.state.title}>
          <Paragraph />
        </TitleContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
