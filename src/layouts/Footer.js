import React from 'react';

const Footer = () => {

  const FooterStyles = {
    'borderTop': '1px solid #bebebe',
    'backgroundColor': 'whitesmoke',
    'paddingTop': '2rem',
    'paddingBottom': '2rem'
  }

  return (
    <footer style={FooterStyles}>
      <div className="container">
        <h3 className="text-center">&copy; Copyright { new Date().getFullYear() }</h3>
      </div>
    </footer>
  )
}

export default Footer;