import React from 'react';
import arrow from '../assets/arrow.png';
import AboutPic from '../assets/img2.jpeg';
import Project1 from '../assets/Project 1.jpeg';
import Project2 from '../assets/Project 2.jpeg';
import Project3 from '../assets/Project 3.jpeg';
import './project.css';

const Project = () => {
  return (
    <section id="projects" data-aos="zoom-out">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>

     
      <div className="experience-details-container projects">
        <div className="animation">Frontend... </div>
        <div className="about-containers">
          <div class="details-container color-container">
             <div class="article-container">
               <img
                src={Project3}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <p>Food ordering website UI </p>
            <div class="btn-container">
              <a href='https://github.com/PoojaSingh31github/bootstrap-project' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Github
                </button> </a>
              <a href='https://bootstrap-poojasingh-a21215.netlify.app/' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Live Demo
                </button> </a>
            </div>
        </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={Project1}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <p>Javascript calculator </p>
            <div class="btn-container">
              <a href='https://github.com/PoojaSingh31github/javascript-assignment-poo' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Github
                </button> </a>
              <a href='https://calculator-poojasingh-e8566d.netlify.app/' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Live Demo
                </button> </a>
            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={Project2}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <p>UI ecommerce project </p>
            <div class="btn-container">
              <a href='https://github.com/PoojaSingh31github/shoping-project' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Github
                </button> </a>
              <a href='https://shopping-ecommerce-pooja.netlify.app/' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Live Demo
                </button> </a>
            </div>
          </div>
        </div>
      </div>


      <div className="experience-details-container projects">
        <div className="animation">Backend... </div>
        <div className="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <p>MERN ecommerce project </p>
            <div class="btn-container">
              <a href='https://github.com/PoojaSingh31github/ecom-project' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Github
                </button> </a>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <p>MERN Twitter-clone project </p>

            <div class="btn-container">
              <a href='https://github.com/PoojaSingh31github/TwitterClone--by-Pooja' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Github
                </button> </a>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <p>MERN Reactogram (instagram) project </p>

            <div class="btn-container">
              <a href='https://github.com/PoojaSingh31github/reactogram-' target='_blank'>
                <button class="btn btn-color-2 project-btn">
                  Github
                </button> </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {
          window.location.href = './#contact';
        }}
      />
    </section>
  );
};

export default Project;
