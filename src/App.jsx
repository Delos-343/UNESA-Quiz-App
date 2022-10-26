import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App grid align-middle justify-center">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl text-center font-bold underline text-gray-100 dark:text-orange-500">
        Hello, World!
      </h1>
    </div>
  )
}

export default App
