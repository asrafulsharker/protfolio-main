import React from 'react';
import "./work.css";
import Works from './works';


const Work = () => {
  return (
    <section className="work section" id="protfolio">
        <h2 className="section__title">Protfolio</h2>
        <span className="section__subtitle">Most recent</span>
        <Works/>
    </section>
  )
}

export default Work
