import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <a href="https://www.linkedin.com/in/mitali-m/" target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href="https://drive.google.com/file/d/1jmB8i1-RCwH1_A9cUQRYdHzgsgIS4bhS/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
