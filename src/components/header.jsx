import React from 'react';

import logo from '../assets/doritos_logo.png';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo logo'>
            <a href='index.html'>
              <img src={logo} alt='logo' />
            </a>
          </div>
          <nav className='header__nav nav'>
            <ul className='header__menu'>
              <li>
                <a href=''>Products</a>
              </li>
              <li>
                <a href=''>About</a>
              </li>
              <li>
                <a href=''>Our Company</a>
              </li>
              <li>
                <a href=''>Tasty Rewards</a>
              </li>
              <li>
                <a href=''>Where to buy</a>
              </li>
            </ul>
          </nav>
          <div className='header__cart cart'>
            <button>
              <span>2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
