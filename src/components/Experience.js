import React from 'react'
import ReactIcon from '../assets/icons/react.svg'
import HTML from '../assets/icons/HTML.png'
import CSS from '../assets/icons/css.png'
import Javascript from '../assets/icons/Javascript.png'
import Bootstrap from '../assets/icons/Bootstrap.png'
import express from '../assets/icons/expressjs.svg'
import mongodb from '../assets/icons/MongoDB.png'
import mysql from '../assets/icons/Mysql.png'
import Nodejs from '../assets/icons/nodejs.png'
import SASS from '../assets/icons/sass-icon.png'
import Git from '../assets/icons/git-icon.png'
import redux from '../assets/icons/redux-icon.png'
import RESTAPI from '../assets/icons/rest-api-icon.png'
import arrow from '../assets/arrow.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {
  return (
    <section id="experience" data-aos="zoom-in-down">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={HTML}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={CSS}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={Javascript}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={ReactIcon} alt="Experience icon" class="icon" />

                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={tailwind}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>tailwind</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              
              <article>
                <img
                  src={Bootstrap}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>experienced</p>
                </div>
              </article>
              <article>
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Backend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={mysql}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3> MySQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={mongodb}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={Nodejs}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={express}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={RESTAPI}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Rest-APIs</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              
              <article>
                <img
                  src={redux}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Redux</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={Git}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
  )
}

export default Experience;