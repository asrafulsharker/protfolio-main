import React from 'react';
import "./skills.css";
import Frontend from './frontend';
import Backend from './backend';

const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My technical level</span>

        <div className="skills__container container grid">

            <Frontend/>
            <Backend/>

        </div>
      </section>
    </div>
  )
}

export default Skills;
