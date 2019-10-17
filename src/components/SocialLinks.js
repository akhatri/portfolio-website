import React from 'react';
import '../styles/social-links.scss'

const SocialLinks = (props) => {

  return (
    <ul className="social-links">
      {
        props.socialData ? props.socialData.map( (item, index)=>
        <li key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
           <i aria-hidden="true" className={`${item.icon} icon`}></i>
          </a>
        </li>
        ) : ''
      }
    </ul>
  )
}


export default SocialLinks;