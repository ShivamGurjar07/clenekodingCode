import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetchdata from './componets/Usedetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fetchdata/>
    </>
  )
}

export default App
