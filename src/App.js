import React from 'react';

import Header from './components/header';
import Hero from './components/sections/hero';
import Overlay from './components/overlay';
import animationInit from './animations';

import './scss/index.scss';

function App() {
  React.useEffect(() => {
    animationInit();
  });
  return (
    <div className='App'>
      <Header />
      <Overlay />
      <Hero />
    </div>
  );
}

export default App;
