import React, { Component } from 'react';
import skillsData from '../data/skills-matrix';

import Card from '../components/Card';

// Libraries
import Fade from 'react-reveal/Fade';


class Skills extends Component {

  constructor() {
    super();

    this.state = {
      skillsData
    }

  }

  render() {
    return (
      <Fade>
        <section id="skills" className="bg-grey">
          <div className="container py-5">
            <h1>Skills</h1>
            <div className="mb-4">
              <p>As the front-end landscape constantly evolves at breakneck speed it's important for any developer to keep up with the latest trends and technologies. I've started to focus on ES6+, React.js and Vue.js and I'm slowly moving away from jQuery in favour of vanilla javascript as most of jQuery's capabilities are now possible with ES6</p>
              <p>On the back-end side of things, I have a fair understanding of the listed back-end technologies that complement my core skills in front-end development</p>
              <p>Although I have a good knowledge of Angular 1, LESS, SVN, Compass and Bower - I have moved on from these technologies to market trends</p>
              <p>Below are my various skills with competency levels marked for certain technologies</p>
            </div>

            <div className="card-container grid-wrapper col-3 grid-gap-2">
              {
                this.state.skillsData.map((item, index) =>
                  <Card key={index} cardData={item} />
                )
              }
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}

export default Skills;