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
// console.log('<StringRef />)', <StringRef />);

class CallbackRef extends Component {
  componentDidMount() {
    console.log('this', this);
    console.log('this.props', this.props);
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
  // const r = useRef();
  // debugger;
  const r = createRef();

  useEffect(() => {
    console.log('ObjectRef', r);
  });

  return (
    <div ref={r}>
      ObjectRef
    </div>
  )
}

// 父组件传递 ref 到子组件
class ParentComp extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log('this.inner', this.inner);
    }, 1000);
  }
  render() {
    return (
      <ChildComp innerRef={r => this.inner = r} />
    )
  }
}

function ChildComp({ innerRef }) {
  const r = useRef();

  useEffect(() => {
    innerRef(r.current);
  });

  return (
    <div ref={r}>
      ChildComp
    </div>
  )
}

// forwardRef
class Input extends Component {
  focus = () => {
    console.log('focused');
    this.input.focus();
  }
  render() {
    return (
      <div>
        <input ref={r => this.input = r} id="input" />
        <button onClick={this.focus}>focus input</button>
      </div>
    )
  }
}
function FocusInput(Comp) {
  class FocusInputComp extends React.Component {
    render() {
      const {forwardedRef, ...rest} = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Comp ref={forwardedRef} {...rest} />;
    }
  }
  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogPros 包裹的子组件上。
  return React.forwardRef((props, ref) => {
    debugger;
    return <FocusInputComp {...props} forwardedRef={ref} />;
  });
}
function ForwardComp(params) {
  const input = useRef();
  const ForwardInput = FocusInput(Input);
  useEffect(() => {
    console.log(input);
    setTimeout(() => {
      input.current.focus();
    }, 1000);
  });
  return <ForwardInput ref={input} inputName="ForwardInput" />;
}

class RefComp extends Component {
  render() {
    return <ForwardComp />;
  }
}

export default RefComp;
