import React, { Component } from 'react';

import commercialPortfolio from '../data/portfolio-commercial';
import PortfolioPanel from '../components/PortfolioPanel';


class Portfolio extends Component {

  constructor() {
    super();


    this.state = {
      commercialPortfolio,
      tabValue: 'commercial'
    }

    this.showTab = this.showTab.bind(this);

  }

  showTab = (value) => (e) => {

    e.preventDefault();

    // set state
    this.setState({
      tabValue: value
    })

  };  

  PortfolioTemplate(props) {
    return (
      <div className="portfolio-panel-container">

        {
          props.data.map((item, index) => {
            return (
              <PortfolioPanel key={index} data={item} />
            )
          })
        }
      </div>
    )
  }  




  render() {
    return (
      <section id="portfolio">
        <div className="container py-5">
          <h1>Portfolio</h1>

          <div className="filter-bar">
          <button
              className={this.state.tabValue === 'commercial' ? 'active' : ''} 
              onClick={this.showTab('commercial')}>Commercial</button>                       
            <button
              className={this.state.tabValue === 'freelance' ? 'active' : ''}
              onClick={this.showTab('freelance')}>Freelance</button>

          </div>

          {
            this.state.tabValue === 'freelance' && (
              <div>
                <p>Freelance projects are carried out under my sole-trader business <a href="https://nimblestudios.dev/">Nimble Studios</a>, where I occasionally work with other team members on client projects</p>
              </div>
            )
          }

          {
            this.state.tabValue === 'commercial' && <this.PortfolioTemplate data={this.state.commercialPortfolio} />
          }          


          
        </div>
      </section>
    );
  }

}

export default Portfolio;