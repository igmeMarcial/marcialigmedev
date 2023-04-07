
import './App.css'
import './App.scss'


import { Header } from './container'
import { Navbar } from './components'
import About from './container/About/About'
import Skills from './container/Skills/Skills'
import Work from './container/Work/Work'
import Footer from './container/Footer/Footer'
import {Loader} from './components/index'
import { useEffect, useState } from 'react'
function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
       <div style={{"overflowY": "auto"}} className="App">
      {
        loader ?
           <Loader/>
          :
          <>
          <Navbar />
          <Header />
          <Skills/>    
          <About />     
          <Work />
          <Footer /> 
          </> 
          }
         
       </div>
    
   
  )
}

export default App
