import React from 'react';
import '../styles/card.scss';

const Card = (props) => {

  let { themeClass, icon, name, skills } = props.cardData;

  return (

    <div className={`${themeClass} card my-3`}>
      <i className={`fas ${icon} card__icon`}></i>
      <h2 className="card__title">{name}</h2>
      <ul className="card__skills">
        {
          skills.map((skill, index) =>
            <li key={index}>{skill}</li>
          )
        }
      </ul>
    </div>
  )


}

export default Card;