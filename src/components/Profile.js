import React from 'react';
import ProfilePic from '../assets/img.jpeg';
import LinkedinPic from '../assets/linkedin.png';
import GithubPic from '../assets/github.png';
import './Profile.css';
import AOS from 'aos';
import DownloadCV from './downloadcv';

const Profile = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out', // Easing function
      once: true, // Only animate once
    });
  }, []);


  return (
    <section id="profile" data-aos="zoom-in">
      <div class="section__pic-container">
        <img class="My-img" src={ProfilePic} alt="pooja singh profile picture" />
      </div>
      
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        {/* <h1 class="title">Pooja Singh</h1> */}
        <div class="animation">Pooja singh</div>
        <p class="section__text__p2 ">Full Stack Developer</p>
    
        <DownloadCV />

        <div id="socials-container">
         <a href='https://www.linkedin.com/in/pooja-singh-689024278/ ' target='_blank'> <img
            src={LinkedinPic}
            alt="My LinkedIn profile"
            class="icon"
          /> </a>
         <a href='https://github.com/PoojaSingh31github' target='_blank'> <img
            src={GithubPic}
            alt="My github profile"
            class="icon"
          /></a>
        </div>
        </div>
    </section>
  )
}

export default Profile;