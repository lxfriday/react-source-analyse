import React, { useEffect, useState, useRef, useCallback } from 'react';

function UseCallback({ children }) {
  const [param, setParam] = useState({count: 0});
  const [a, setA] = useState(1);

  const callback = useCallback(() => a,
    [a],
  );

  return (
    <div className="App">
      <button onClick={() => setParam({ count: 0 })}>change app 0</button>
      <button onClick={() => setParam({ count: 1 })}>change app 1</button>
      <button onClick={() => setParam({ count: 2 })}>change app 2</button>
      <button onClick={() => setA(a + 1)}>change app a</button>
      <br />
      param.count {param.count}
      <br />
      <Child callback={callback} />
    </div>
  );
}

function Child({ callback }) {
  const [count, setCount] = useState(() => callback());

  console.log('exec');
  useEffect(() => {
    setCount(callback());
    console.log('child useEffect');
  }, [callback]);

  return <div>{count} </div>;
}

export default UseCallback;
