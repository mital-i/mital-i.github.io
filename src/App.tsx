import './App.css'
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
     <div className = "about">
      <h1>Mitali Mittal</h1>
      <h3>Hi! Welcome to my corner of the internet &#9829;</h3>
      <p>I’m a Computer Science student at UC Irvine, where I am doing research at Professor Al Faruque’s embedded systems lab. My current research project is adapting a Transformer for multivariate time series data with a masking head. I am also on the backend team for Humanity Unleashed, an open source project for developing an AI policy generator  powered by an economics transformer. Check out our paper here! </p>
      <p>A few weeks ago, I joined the Mechanistic Interpretability research community online, and since then I joined PauseAI’s AI Safety project as a research analyst. </p>
      <p>Last summer I interned at Etsy, and this summer I will be at BlackRock, interning for their Aladdin wealthtech team in NYC. </p>
      <p>I’m a software engineer, a machine learning enthusiast, and an amateur seamstress. There are a lot of other things I can say to describe myself. If you are interested, check out fun stuff about me. </p>
     </div>
     <div className = "contact">
      <h3>Contact</h3>
      <p>email: mitalim@uci.edu</p>
      <p>discord: mergermystery</p>
     </div>
      <div className="footer"> {/* Added a container div */}
        <div className="linkedin" style={{ cursor: 'pointer' }}>
          <a href="https://www.linkedin.com/in/mitali-m/" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
        <div className="resume" style={{ cursor: 'pointer' }}>
          <a href="https://drive.google.com/file/d/1jmB8i1-RCwH1_A9cUQRYdHzgsgIS4bhS/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</a>
        </div>
        <div className="youtube" style={{ cursor: 'pointer' }}>
          <a href="https://www.youtube.com/@mitali_com/featured" target="_blank" rel="noopener noreferrer">youtube</a>
        </div>
      </div>
      
    </>
  )
}

export default App