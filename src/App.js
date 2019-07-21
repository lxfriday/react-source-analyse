import React, { useState, useEffect, createContext } from 'react';
import router, { initialPage } from './router';
import './App.css';

export const AppContext = createContext({});

function App() {
  const [selected, setSelected] = useState(null);
  function onHashChange() {
    const hash = window.location.hash.substring(2); // #/
    if (Object.keys(router).includes(hash)) {
      setSelected(hash);
    } else {
      window.location.hash = `#/${initialPage}`;
    }
  }

  function go(page) {
    console.log(`${window.location.hash}`);
    window.location.hash = `#/${page}`;
  }

  window.onhashchange = onHashChange;

  useEffect(onHashChange, []);

  const Page = router[selected];
  const appState = {
    app: {
      selectedPage: selected,
      changePage: setSelected,
    }
  };

  return (
    <AppContext.Provider value={appState}>
      <div style={{ borderBottom: '1px solid #143250', padding: 12, marginBottom: 16 }}>
        {Object.keys(router).map(v => (
          <button key={v} onClick={() => go(v)}>{v}</button>
        ))}
      </div>
      <h2 style={{textAlign: 'center'}}>{selected}</h2>
      {selected && <Page />}
    </AppContext.Provider>
  );
}

export default App;
