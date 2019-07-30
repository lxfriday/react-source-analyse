import React, { Component, PureComponent } from 'react';

function FuncComp() {
  return <div>FuncComp</div>
}

class Comp extends Component {
  render() {
    return (
      <div>
        component
      </div>
    );
  }
}

class PureComp extends PureComponent {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        Pure Component
      </div>
    );
  }
}

console.log(<FuncComp />);
console.log(<Comp />);
console.log(<PureComp />);
export default class extends Component {
  render() {
    return (
      <div>
        <FuncComp />
        <Comp />
        <PureComp />
      </div>
    );
  }
}
