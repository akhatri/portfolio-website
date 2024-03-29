import React from 'react';
import '../styles/portfolio-panel.scss';

// Libraries
import Fade from 'react-reveal/Fade';

const PortfolioPanel = (props) => {

  let { themeClass, name, image, imageWebP, company, html, link, tags } = props.data;

  return (
    <Fade>
      <div className={`${themeClass} portfolio grid-wrapper col-2 align-center grid-gap-4 my-3`}>
        <div className="media">
          <picture>
            <source srcSet={imageWebP} type="image/webp" />
            <source srcSet={image} type="image/png" />
            <img className="img-fluid rounded media__image" src={image} alt={`${company}`} />
          </picture>
        </div>
        <div className="content">
          <h2 className="content__title">{name}</h2>
          <h3 className="content__company">{company}</h3>
          <div className="content__info" dangerouslySetInnerHTML={{ __html: html }}></div>
          {

            link && (<a className="content__cta" href={link} target="_blank" rel="noreferrer noopener">View Work</a>)
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
    </Fade>
  )


}

export default PortfolioPanel;