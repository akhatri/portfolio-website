import React, { Component } from 'react';
import skillsData from '../data/skills-matrix';

import Card from '../components/Card';

class Skills extends Component {

  constructor() {
    super();

    this.state = {
      skillsData
    }

  }

  render() {
    return (
      <section id="skills" className="bg-grey">
        <div className="container py-5">
          <h1>Skills</h1>
          <div>
            <p>As the front-end landscape constantly evolves at break neck speed it's important for any developer to keep up with the latest trends and languages. I've started to focus on ES6+, React.js and Vue.js and I'm slowly moving away from jQuery in favour of vanilla javascript as most of jQuery's capabilities are now possible with ES6</p>
            <p>On the back-end side of things, I have a fair understanding of the listing back-end technologies and who knows I might one day become a full-stack Unicorn :)</p>
            <p>Although I have a good knowledge of Angular 1, LESS, SVN, Compass and Bower - I have moved on from these technologies to market trends</p>
            <p>Below are my various skills with beginner competencies marked for certain technologies</p>
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
    );
  }
}

export default Skills;