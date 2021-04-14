import React, { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import logo from "./images/gsap.svg"
import reactLogo from "./images/react-logo.svg"

const sections = [
  {
    title: "Title 1",
    subTitle: "Subtitle 1"
  },
  {
    title: "Title 2",
    subTitle: "Subtitle 2"
  },
  {
    title: "Title 3",
    subTitle: "Subtitle 3"
  },
  {
    title: "Title 4",
    subTitle: "Subtitle 4"
  }
]

function App() {
  const [background, setBackground] = useState('#5a7d95');

  const headerRef = useRef(null)
  const revealRefs = useRef([])
  revealRefs.current = []

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


  // Add to Refs
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
    console.log(revealRefs.current)
  }

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
        {
          sections.map(({title, subTitle}) => (
            <div className="App-section" key={title} ref={addToRefs}>
              <h2>{title}</h2>
              <h2>{subTitle}</h2>
            </div>
          ))
        }
      </main>
    </div>
  );
}

export default App;
