import React, { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import logo from "./images/gsap.svg"
import reactLogo from "./images/react-logo.svg"

function App() {
  const [background, setBackground] = useState('#5a7d95');

  const headerRef = useRef(null)

  const toggleBackground = () => {
    const color = background !== '#5a7d95' ? '#5a7d95' : '#1b4943'
    setBackground(color)
  }

  // Change backgroundround to new value
  useEffect(() => {
    gsap.to(headerRef.current, 
      {
        duration: 1, 
        backgroundColor: background, 
        ease: 'none'
      })
  }, [background])

  // Animate the headerRef
  useEffect(() => {
    gsap.from(headerRef.current, 
      {
        duration: 1, 
        autoAlpha: 0, 
        ease: 'none', 
        delay: 1
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        <div className="logos">
          <img className="react-logo" src={reactLogo} alt="react logo" />
          <img className="logo" src={logo} alt="gsap logo" />
        </div>
        <button onClick={() => toggleBackground()}>Toggle background</button>
        <div className="logo-sub">
          <p>Scroll down to see sections being revealed by ScrollTrigger</p>
        </div>
      </header>
      <main className="App-main"> 
        <div className="App-section">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, porro?</p>
        </div>
      </main>
    </div>
  );
}

export default App;
