import React,{useState,useEffect,useRef} from 'react'
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
import Loading from './loading';
// import Gallary from "./components/photogallary/gallary";

function App() {

  const [data] = useState('');
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(undefined);
    setDone(undefined);

    setTimeout(() => {
      // fetch('')
      // .then(res => res.json())
      // .then(data => {
        // setCat(data.file);
        setLoading(true);
        setTimeout(() => {
          setDone(true);
        }, 1200)
      // })
      // .catch(err => console.log(err));
    }, 1200);
  }

  return (
    <>
    {!done?(
        <Loading loading={loading}/>
      ):(
        <div>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    </div>
      )}
    </>
  );
}

export default App;
