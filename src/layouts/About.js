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
            <h1 className="title">Hi there, nice to meet you <span className="emoji" aria-label="Emoji wave hand" role="img">👋</span></h1>
            <p>A seasonal front-end developer with over 5+ years (and counting) experience in various industries, ranging from fast-paced digital agencies, fin-techs, start-ups, professional governing institutions, public sectors and various business projects. I specialise in the front-end stack and have a keen interest in User Experience (UX) and Product Development. I constantly up-skill myself on new frameworks and processes through personal pet projects, freelance projects and commercial work experience.</p>
            <p>
              I strive to create amazing digital experiences for customers &amp; clients and I'm passionate about building early-stage companies. I believe that having a functional website is only part of the solution. Principles such as Progressive Enhancement, SEO optimised websites with semantic HTML and accessibility principles are key concepts on being noticed in the Internet 'jungle'.
        </p>
            <p>
              Being a front-end developer, it's also important to think from a consumer's point of view as they are the primary audience and the code you produce is their first point of interaction. So it needs to have a good first impression :)
        </p>
            <p>You can view my skills and some examples of my work. If you need to work with me on project or consulting work, please get in touch through my freelance business website <a href="https://nimblestudios.dev/">Nimble Studios</a></p>
            <SocialLinks socialData={this.state.socialLinksData} />
          </div>

        </section>
      </Fade>
    );
  }
}

export default About;