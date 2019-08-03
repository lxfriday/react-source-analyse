import React, { useContext } from "react";
import { AppContext } from "../../App";

function UseContextPage({ children }) {
  const {
    app: { selectedPage, changePage }
  } = useContext(AppContext);
  console.log("UseContextPage selectedPage", selectedPage);

  return (
    <div className="App">
      <button onClick={() => changePage("UseMemo")}>
        changePage to UseMemo
      </button>

      <p>selectedPage: {selectedPage} </p>
    </div>
  );
}

export default UseContextPage;
