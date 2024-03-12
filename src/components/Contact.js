import React from 'react'
import email from '../assets/icons/gmail-icon.png'
import linkedin from '../assets/icons/linkedin.png'
import './Contact.css'
const Contact = () => {
  return (
    <section id="contact" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:poojasingh12312000@gmail.com">poojasingh12312000@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/pooja-singh-689024278/">LinkedIn</a></p>
        </div>
      </div>
      <div class="Contact__container section__text__p1">
        <div class="content">
          <div class="content__container">
            <p class="content__container__text">
              Reach Out Through
            </p>
            <ul class="content__container__list">
              <li class="content__container__list__item"><a href="mailto:poojasingh12312000@gmail.com" target='_blank'>Email</a> </li>
              <li class="content__container__list__item"><a href='https://www.linkedin.com/in/pooja-singh-689024278'target='_blank'>Linkedin</a></li>
              <li class="content__container__list__item"><a href='https://github.com/PoojaSingh31github'target='_blank'>github</a></li>
              <li class="content__container__list__item"><a href='https://www.facebook.com/profile.php?id=100059705095740'target='_blank'>facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;