import React from 'react';
import './App.scss';

import Header from './layouts/Header';
import About from './layouts/About';
import Skills from './layouts/Skills';
import Portfolio from './layouts/Portfolio';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';

function App() {

  // let timer;

  // window.addEventListener('scroll', () => {

  //   let scrollPosition = window.pageYOffset;

  //   if (timer) {
  //     window.clearTimeout(timer);
  //   }

  //   timer = setTimeout(() => {
  //     console.log(scrollPosition);

  //     if (scrollPosition >= 300) {
  //       console.log('fired change state');
  //     }

  //   }, 1000);



  // });

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
