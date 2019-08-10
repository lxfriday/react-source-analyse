import React, { Component } from 'react'

class Child extends Component {
  render() {
    console.log('this.props.children', this.props.children)
    const c = React.Children.map(this.props.children, c => {
      return c
    })
    console.log('mappedChildren', c)

    // const toArray = React.Children.toArray(this.props.children)
    // const toArray = React.Children.toArray(null) // []

    const onlyChild = React.Children.only(this.props.children[0])

    console.log('onlyChild', onlyChild)
    return <div>{c}</div>
  }
}

export default class Children extends Component {
  render() {
    // return 的代码包含 2 种情况：children 是和不是数组
    return (
      <Child>
        <div>
          childrendasddadas
          <div>childrendasddadas</div>
          <div>childrendasddadas</div>
        </div>
        <div key="key2">childrendasddadas</div>
        <div key="key3">childrendasddadas</div>
        {[
          <div key="key4">childrendasddadas</div>,
          <div key="key5=">childrendasddadas</div>,
          <div key="key6:">childrendasddadas</div>,
        ]}
      </Child>
    )
  }
}
