import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginRegister from './LoginRegister/LoginRegister'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <LoginRegister/>
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App