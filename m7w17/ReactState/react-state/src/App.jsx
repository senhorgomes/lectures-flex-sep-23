import './App.css'
import { useState } from "react";
import Carrosel from './components/Carrosel';
import Counter from './components/Counter';
import Form from './components/Form';
import Header from './components/Header'

function App() {
  const [currentUsername, setCurrentUsername] = useState("senhorgomes");
  // const firstName = 'Luke';
  // With props we can pass any information down to child components
  // I can pass state, and a setState
  return (
    <>
      <Header 
        name={currentUsername}
      />
      <Counter />
      {/* <Carrosel /> */}
      <Form 
        setCurrentUsername={setCurrentUsername}
      />
    </>
  )
}

export default App
