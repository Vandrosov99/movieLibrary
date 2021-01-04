import React from "react";
import "./Footer.css";
import "../../styles/Common.css";
import githubSVG from "../../img/Footer/github.svg";
import instagramSVG from "../../img/Footer/instagram.svg";
import linkedin from "../../img/Footer/linkedin.svg";

export default function Footer() {
  const todayYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer_container'>
          <p className='main-text'>All Rights Reserved © {todayYear}</p>
          <div className='social'>
            <h5>YOU CAN FIND ME ON </h5>
            <ul>
              <li>
                <a href='https://github.com/Vandrosov99?tab=repositories'>
                  <img src={githubSVG} alt='github link' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/v_andrsv/'>
                  <img src={instagramSVG} alt='instagram link' />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/volodymyr-androsov-3860921a3/'>
                  <img src={linkedin} alt='linkedin link' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
