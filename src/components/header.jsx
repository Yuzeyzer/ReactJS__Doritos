import React from 'react';
import cart from '../assets/svg/cart.svg';

import logo from '../assets/doritos_logo.png';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo logo'>
            <a href='index.html' className='logo__link'>
              <img src={logo} alt='logo' />
            </a>
          </div>
          <nav className='header__nav'>
            <ul className='header__menu menu'>
              <li className="menu__items">
                <a className="menu__links" href=''>Products</a>
              </li>
              <li className="menu__items">
                <a className="menu__links" href=''>About</a>
              </li>
              <li className="menu__items">
                <a className="menu__links" href=''>Our Company</a>
              </li>
              <li className="menu__items">
                <a className="menu__links" href=''>Tasty Rewards</a>
              </li>
              <li className="menu__items">
                <a className="menu__links" href=''>Where to buy</a>
              </li>
            </ul>
          </nav>
          <div className='header__cart cart'>
            <button className="cart__btn">
              <img className="cart__img" src={cart} alt='' />
              <span className="cart__items">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
