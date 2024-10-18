import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>log in page</h1>
      <input type="name" placeholder='Enter nam'/>
      <input type="email" placeholder='Enter Email'/>
      <input type="Submit" value='submit'/>
      
    </>
  )
}

export default App
