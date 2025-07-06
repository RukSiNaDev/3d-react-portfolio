import React from 'react'
import Nabar from './sections/Nabar'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Nabar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}

export default App