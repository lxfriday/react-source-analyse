import React, { Component, useRef, createRef, forwardRef, useEffect } from "react";

class StringRef extends Component {
  componentDidMount() {
    console.log('this', this);
    console.log('this.props', this.props);
    console.log('this.refs', this.refs);
  }
  render() {
    return (
      <div ref="container">
        StringRef
      </div>
    )
  }
}
console.log('<StringRef />)', <StringRef />);

class CallbackRef extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div ref={r => this.container = r}>
        CallbackRef
      </div>
    )
  }
}

function ObjectRef(params) {
  const r = useRef();
  // const r = createRef();

  useEffect(() => {
    console.log('ObjectRef', r);
  });

  return (
    <div ref={r}>
      ObjectRef
    </div>
  )
}


class RefComp extends Component {
  render() {
    return <StringRef />;
  }
}

export default RefComp;
