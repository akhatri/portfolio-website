import React, { Component } from 'react';

import portfolioData from '../data/portfolio';
import PortfolioPanel from '../components/PortfolioPanel';

// Libraries
import Fade from 'react-reveal/Fade';


class Portfolio extends Component {

  constructor() {
    super();

    this.state = {
      portfolioData
    }

  }

  render() {
    return (
      <Fade>
        <section id="portfolio">
          <div className="container py-5">
            <h1>Portfolio</h1>
            <p>Some of my latest work from my previous work experience and freelance projects</p>
            <div className="portfolio-panel-container">
              {
                this.state.portfolioData.map((item, index) => {
                  return (
                    <PortfolioPanel key={index} portfolioData={item} />
                  )
                })
              }

            </div>
          </div>
        </section>
      </Fade>
    );
  }

}

export default Portfolio;