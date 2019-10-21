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
        <h3 className="text-center">&copy; { new Date().getFullYear() } Akshat Khatri</h3>
      </div>
    </footer>
  )
}

export default Footer;