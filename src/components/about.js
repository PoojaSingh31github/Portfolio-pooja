import React from 'react';
import AboutPic from '../assets/img2.jpeg'
import arrow from '../assets/arrow.png'
import education from '../assets/icons/study.png'
import experience from '../assets/icons/stars.svg'

const About = () => {
  return (
    <section id="about" data-aos="zoom-in-up">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container profile-pic">
          <img
            src={AboutPic}
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={experience}
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src={education}
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>MERN Stack development<br />B.Sc. Bachelors Degree</p>
            </div>
          </div>
          <div class="text-container">
            <p>
              I am a passionate and detail-oriented professional with a strong background in web development. I thrive on challenges and enjoy turning complex problems into innovative solutions. My commitment to continuous learning and collaboration drives my success in creating impactful and user-friendly digital experiences.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
  )
}

export default About;