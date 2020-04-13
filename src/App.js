import React, {useEffect} from 'react';
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

  useEffect(()=>{

    console.log('useEffect hook')

  }, [])

  function intersectionObservor() {

    // this is the target which is observed
    var target = document.querySelector('#services');

    // configure the intersection observer instance
    var intersectionObserverOptions = {
      root: null,
      rootMargin: '150px',
      threshold: 1.0
    }

    var observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);

    // provide the observer with a target
    observer.observe(target);

    function onIntersection(entries) {
      entries.forEach(entry => {
        console.clear();
        console.log(entry.intersectionRatio)
        target.classList.toggle('visible', entry.intersectionRatio > 0);

        if (entry.intersectionRatio > 0) {
          console.log('in the view');
          target.classList.add('bg-gray-700');
          target.querySelector('h1').classList.remove('text-gray-700');
          target.querySelector('h1').classList.add('text-gray-200');
          observer.unobserve(entry.target);
        } else {
          console.log('out of view');
        }

      });
    }

  }  

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
