import React from 'react'
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
    <Home/>
    </main>
    </>
  );
}

export default App;
