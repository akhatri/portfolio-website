import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import '../styles/header.scss';

class Header extends Component {


  constructor() {
    super();
  }

  componentDidMount() {

    let timer;

    window.addEventListener('scroll', () => {

      if (timer) {
        window.clearTimeout(timer);
      }

      let scrollPosition = window.pageYOffset;

      timer = setTimeout(() => {

        if (scrollPosition > 100) {
          document.querySelector('header').classList.add('sticky');
        } else {
          document.querySelector('header').classList.remove('sticky');
        }

      }, 500);
    });

  }

  render() {
    return (
      <header className="site-header">
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list-item">
              <Link
                href="#"
                className="navigation__link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >About
            </Link>
            </li>
            <li className="navigation__list-item">
              <Link
                href="#"
                className="navigation__link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >Skills
            </Link>
            </li>
            <li className="navigation__list-item">
              <Link
                href="#"
                className="navigation__link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >Portfolio
            </Link>
            </li>
            <li className="navigation__list-item">
              <Link
                href="#"
                className="navigation__link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >Contact
            </Link>
            </li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default Header;