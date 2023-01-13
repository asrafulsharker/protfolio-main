import React, { useState, useEffect,useRef } from 'react'
import Lottie from 'lottie-web';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Services from './components/services/services';
import Qualification from './components/qualification/qualification';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Scrollup from './components/scrollup/scrollup';
import Work from './components/work/work';

// import Gallary from "./components/photogallary/gallary";

function App() {

  const container = useRef(null)



  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 100000)
  },[])

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop : true,
      autoplay: true,
      animationData: require('./loading.json')
    })
  },[])

  return (
    <div className='App'>
    {
      loading ?
      
      <div className="container" ref={container}></div>

      :

      <>
       <Header />
       <main className='main'>
         <Home />
         <About />
         <Skills />
         <Services />
         <Qualification />
         <Work />
         <Testimonials />
         <Contact />
       </main>
       <Footer />
       <Scrollup />
      </>

     
    }
    </div>
    
  );
}

export default App;
