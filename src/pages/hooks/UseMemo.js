import React, { useState, useMemo } from 'react';

function UseMemo({ children }) {
  const [param, setParam] = useState({count: 0});
  const [a, setA] = useState(1);

  const memorizedValue = useMemo(() => {
    console.log('compute');
    return a;
  }, [a]);

  return (
    <div className="App">
      <button onClick={() => setA(a + 1)}>a + 1</button>
      <button onClick={() => setParam({ count: param.count + 1 })}>param.count + 1</button>
      <br />
      param.count {param.count}
      <br />
      a {memorizedValue}
    </div>
  );
}

export default UseMemo;
