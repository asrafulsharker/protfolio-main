import React from 'react'
import Article from '../../assets/icon/article-icon.svg';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">4 years working</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">95+ Projects</span>
        </div>

        <div className="about__box">
            <img src={Article} alt="" className="home__social-icon"  style={{height:'20px'}}/>
            <h3 className="about__title">Published</h3>
            <span className="about__subtitle">10+ Article</span>
        </div>
    </div>
  )
}

export default Info;