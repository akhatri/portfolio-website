import React, { Component } from 'react';

import portfolioData from '../data/portfolio';
import PortfolioPanel from '../components/PortfolioPanel';


class Portfolio extends Component {

  constructor() {
    super();

    this.state = {
      portfolioData
    }

  }

  render() {
    return (
      <section id="portfolio">
        <div className="container py-5">
          <h1>Portfolio</h1>
          <p>Some of my latest work from my previous work experience. Freelance projects are carried out under my sole-trader business <a href="https://nimblestudios.dev/">Nimble Studios</a>, where I occasionally work with other team members on client projects.</p>
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
    );
  }

}

export default Portfolio;