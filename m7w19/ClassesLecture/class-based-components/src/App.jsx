import { useState } from 'react';
import './App.css'
import ClassCounter from './components/class/ClassCounter'
import ClassTitle from './components/class/ClassTitle'
import Counter from './components/functional/Counter'
import Title from './components/functional/Title'

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
    {/* Once Title gets removed from the DOM, we will trigger an event */}
      {toggle && <ClassTitle heading={"Classes"} />}
      <button onClick={()=> setToggle(prev => !prev)}>Toggle!</button>
      {/* <ClassTitle heading={"Class Based Components and Props"}/> */}
      <Counter />
      <ClassCounter />
    </>
  )
}

export default App
