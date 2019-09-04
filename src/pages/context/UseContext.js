import React, { useContext, createContext } from 'react'
const NameCtx = createContext({ name: 'yuny' })
function Title() {
  const { name } = useContext(NameCtx)
  return <h1># {name}</h1>
}
function App() {
  return (
    <NameCtx.Provider value={{ name: 'lxfriday' }}>
      <Title />
    </NameCtx.Provider>
  )
}
export default App
