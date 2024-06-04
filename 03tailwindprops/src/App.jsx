import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Aryan",
    age:21
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>

      <Card username="CodeWithAryan" btntext="visit me" someObj={myObj} />
      <Card username="me"/>

    </>
  )

}
export default App
