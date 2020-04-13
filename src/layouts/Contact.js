import React, { Component } from 'react';
import ContactImage from '../images/get-in-touch.jpg';

// Libraries
import Fade from 'react-reveal/Fade';

class Contact extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Fade>
        <section id="contact" className="bg-grey">
          <div className="container py-5">
            <h1>Get in touch <span className="emoji" aria-label="Emoji heart letter" role="img">💌</span></h1>
            <div className="grid-wrapper col-2 align-center grid-gap-4">
              <img className="img-fluid rounded" src={ContactImage} alt="Get in touch" />
              <div>
                <p>If you would like to get in touch regarding any freelance consulting projects and start-up advice on technology roadmaps, please get in touch through my business website here <span aria-label="Emoji smiley" role="img">😄</span></p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }

}

export default Contact;