import React from 'react';

import '../styles/portfolio-panel.scss';

const PortfolioPanel = (props) => {

  let { themeClass, name, image, company, description, multipleButtons, links, link, tags } = props.portfolioData;

  return (
    <div className={`${themeClass} portfolio grid-wrapper col-2 align-center grid-gap-4 my-3`}>
      <div className="media">
        <img alt={`${company}-image`} className="img-fluid media__image" src={image} />
      </div>
      <div className="content">
        <h2 className="content__title">{name}</h2>
        <h3 className="content__company">{company}</h3>
        <p className="content__info">{description}</p>
        {
         multipleButtons ? links.map( (button, index) => 
            <a className={`content__cta ${button.class}`} key={index} href={button.link} target="_blank" rel="noreferrer noopener">View Work</a>
          ) : 
          <a className="content__cta" href={link} target="_blank" rel="noreferrer noopener">View Work</a>
        }
        <ul className="content__tags">
          {
            tags.map((tag, index) => {
              return <li key={index}>{tag}</li>
            })
          }
        </ul>
      </div>

    </div>
  )


}

export default PortfolioPanel;