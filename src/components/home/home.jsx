import React from 'react';
import "./home.css";
import Social from './social';
import Data from './data';
import ScrollDown from './scrollDown';

const home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <div className='home__img'></div>

                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default home
