import React, { useState, useEffect,useRef } from 'react'
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
import Loading_test from './components/loading/loading_test';
import Slider from './components/Publications/Publications';
import Gallery from './components/gallery/gallery';
// import Gallary from "./components/photogallary/gallary";

function App() {





  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])



  return (
    <div className='App'>
    {
      loading ?
      
      <Loading_test></Loading_test>

      :

      <>
       <Header />
       <main className='main'>
         <Home />
         <About />
         <Testimonials />
         <Slider/>
         <Qualification />
         <Skills />
         <Work />
        {/* <Services /> */}
         <Gallery/>
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
