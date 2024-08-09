import React from 'react';
import GoogleScholer from '../../assets/icon/googlescholar-svgrepo-com.svg';
import Orcid from '../../assets/icon/orcid.svg';
import Gmail from '../../assets/icon/icons8-gmail.svg';

const Social = () => {
  return (
    <div className="home__social">
        <a href=" https://www.linkedin.com/in/asrafulsharker/" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin"></i>
        </a>

        <a href=" https://github.com/asrafulsharker" className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>
        <a href="https://scholar.google.com/citations?user=ul2pGgMAAAAJ&hl=en&authuser=2" className="home__social-icon" target="_blank">
        <img src={GoogleScholer} alt="" className="home__social-icon"  style={{height:'20px'}}/>
         </a>

         <a href="https://orcid.org/0009-0004-2911-3890" className="home__social-icon" target="_blank">
        <img src={Orcid} alt="" className="home__social-icon"  style={{height:'20px'}}/>
         </a>
         <a href="mailto:asrafulsharker.me@gmail.com" className="home__social-icon" target="_blank">
         <img src={Gmail} alt="" className="home__social-icon"  style={{height:'20px'}}/>
         </a>
    </div>
  )
}

export default Social
