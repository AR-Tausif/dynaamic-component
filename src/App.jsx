import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feedback from "./components/Feedback"

function App() {
  const [resultData, setResultData] = useState([])
useEffect(()=>{
  fetch("/public/data.json").then(res=>res.json()).then(data=>setResultData(data))
},[])
  return (
    <div className='bg-gray-900 min-h-screen w-screen'>
     <Feedback resultData={resultData} />
    </div>
  )
}

export default App
