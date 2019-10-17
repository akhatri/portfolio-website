import React, { Component } from 'react';

import skills from '../data/skills';


class About extends Component {

  constructor() {
    super();

    console.log(skills);

    this.state = {
      skills: skills,
      animateTile: false
    }

  }

  clickHandler = () => {
    this.setState({
      animateTile: !this.state.animateTile // toggle
    })
  }

  render() {

    return (
      <div>
        <ul>
          {
            this.state.skills.map((item, index) => {
              return (
                <li key={index}> - Car {item.name}
                  {
                    item.models.map((model, index) => {
                      return <p key={index}>Model - {model}</p>
                    })
                  }
                </li>
              )
            })
          }
        </ul>

        <button onClick={this.clickHandler.bind(this)}>Move tile</button>

        <div className={`tile ${this.state.animateTile ? 'is-active' : '' }`}>
          This is a sample tile
        </div>

      </div>
    );
  }
}

export default About;