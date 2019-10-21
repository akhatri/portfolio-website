import React, { Component } from 'react';
import '../styles/about.scss';

import socialLinksData from '../data/social';
import SocialLinks from '../components/SocialLinks';

// Libraries
import Fade from 'react-reveal/Fade';


class About extends Component {

  constructor() {
    super();

    this.state = {
      socialLinksData
    }

  }

  render() {

    return (
      <Fade>
      <section id="about" className="about">
        <div className="container py-5">
          <h1 className="title">Hi there, nice to meet you <span aria-label="Emoji wave hand" role="img">👋</span></h1>
          <p>I am an experienced people oriented Front End Developer, with a strong focus on User Experience and UI Development. I have 4+ years  commercial front-end development experience in various industries, ranging from fast-paced digital agencies, fin-techs, start-ups, professional governing institutions and various business projects. I specialise in the standard Front-end stack and I constantly up-skill myself on new frameworks and processes through personal pet projects, freelance projects and commerrcial work experience.</p>
          <p>
            I strive to create amazing digital experiences for consumers and I am passionate about building early-stage companies. I believe that having a functional website is only a part of the solution. Principles such as Progressive Enhancement, SEO optimised websites with Semantic HTML and Accessibility principles are key concepts on being noticed in the Internet 'jungle'.
        </p>
          <p>
            Also, as a Front End developer, it's important to think from a consumers point of view as they are the primary audience and the code you produce is their first point of interation so it needs to leave a good impression :)
        </p>
          <p>You can view my skills and some examples of my work. If you need to get in touch in regard to project or consulting work, please get in touch</p>
          <SocialLinks socialData={this.state.socialLinksData} />
        </div>

      </section>
      </Fade>
    );
  }
}

export default About;