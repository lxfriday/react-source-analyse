import React, { useLayoutEffect, useState, useRef, Fragment } from "react";

function UseLayoutEffect() {
  console.log("Fragment", Fragment);
  console.log("Fragment", <Fragment />);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const a = useRef("xxx");
  useLayoutEffect(() => {
    console.log(a, "useLayoutEffect");
    document.title = `You clicked ${count} times`;
    a.current.style.backgroundColor = "#f00";
    a.current.style.height = "100px";
    return () => {
      console.log(a, "end useLayoutEffect");
      document.title += "!!!";
    };
  });

  return (
    <div className="useLayoutEffect">
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input
        value={text}
        onChange={function(e) {
          setText(e.target.value);
        }}
      />
      <div ref={a} style={{ height: 200 }}>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
        <p>dasdasdasdasdasd</p>
      </div>
    </div>
  );
}

export default UseLayoutEffect;
