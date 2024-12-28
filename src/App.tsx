// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //  <button onClick={() => setCount((count) => count + 1)}>

  return (
    <>
     <div>
      <h1>Mitali Mittal</h1>
     </div>
      <div className="footer"> {/* Added a container div */}
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/mitali-m/" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
        <div className="resume">
          <a href="https://drive.google.com/file/d/1jmB8i1-RCwH1_A9cUQRYdHzgsgIS4bhS/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</a>
        </div>
        <div className="youtube">
          <a href="https://www.youtube.com/@mitali_com/featured" target="_blank" rel="noopener noreferrer">youtube</a>
        </div>
      </div>
      
    </>
  )
}

export default App