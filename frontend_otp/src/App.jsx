import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './components/Start'
import Enter_otp from './components/Enter_otp'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Start/>}></Route>
      <Route path='/otp' element={<Enter_otp/>}></Route>
      <Route path='/welcome' element={<Welcome/>}></Route>
     </Routes>
    </>
  )
}

export default App
