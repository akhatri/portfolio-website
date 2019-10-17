import React, { Component } from 'react';
import ContactImage from '../images/get-in-touch.jpg';

class Contact extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section id="contact" className="bg-grey">
        <div class="container py-5">
          <div className="grid-wrapper col-2 align-center grid-gap-4">
            <img className="img-fluid rounded" src={ContactImage} alt="Get in touch" />
            <div>
              <h1>Get in touch 💌</h1>
              <p>If you would like to get in touch regarding any freelance consulting projects and start-up advice on technology roadmaps, please get in touch via email <a href="mailto:akshatster@gmail.com">here</a></p>
              <p>I'm currently based in UK and open to any contract roles too, depending on my work-load 😄</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Contact;