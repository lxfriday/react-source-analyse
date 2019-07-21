import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Test1({ children, params }) {

  const dom = React.createRef()

  useEffect(() => {
    console.log(dom);
  })

  console.log('params', params);

  return (
    <div className="App" ref={dom}>
      <header className="App-header">
        count {params.count}
      </header>
    </div>
  );
}

export default Test1;
