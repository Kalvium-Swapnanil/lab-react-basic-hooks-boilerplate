import React from 'react';
import { useState } from 'react';
import './App.css';
import UseContext from './components/UseContext';


// import Progression1 from './components/Progression1'
// import Progression2 from './components/Progression2'
// import Progression3 from './components/Progression3'
// import Progression4 from './components/Progression4'
// import Progression5 from './components/Progression5'
// import Progression6 from './components/Progression6'
import Task from './components/Task';


export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      {/* <Progression1/>
      <Progression2/>
      <Progression3/>
      <Progression4/>
      <Progression5/>
  <Progression6/>*/}
      <Task/>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;