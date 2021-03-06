import React from 'react';

import rings from '../../assets/rings.png';
import doritos from '../../assets/doritos.png';
import chips from '../../assets/chips.png';
import ketchup from '../../assets/ketchup.png';
import suyaPepper from '../../assets/suyaPepper.png';

function hero() {
  return (
    <section className='hero'>
      <img className='hero__rings' src={rings} alt='rings' />
      <div className='container'>
        <div className='hero__row'>
          <div className='hero__content'>
            <h1 className='hero__title'>
              <span className='hide'>Light a fire under your taste buds</span>
            </h1>
            <h3 className='hero__subtitle'>
              <span className='hide'>Nacho cheese</span>
            </h3>
            <p className='hero__description'>
              <span className='hide'>
                Corn, Vegetable Oil (Corn, Canola, And/or Sunflower Oil), Maltodextrin (Made From
                Corn), Salt, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Whey, Monosodium
                Glutamate, Buttermilk, Romano Cheese (Part-skim Cow's Milk, Cheese Cultures, Salt,
                Enzymes), Whey Protein Concentrate, Onion Powder, Corn Flour, Natural And Artificial
                Flavor, Dextrose, Tomato Powder, Lactose, Spices, Artificial Color (Yellow 6, Yellow
                5, And Red 40), Lactic Acid, Citric Acid, Sugar, Garlic Powder, Skim Milk, Red And
                Green Bell Pepper Powder, Disodium Inosinate, And Disodium Guanylate.
                <strong>CONTAINS MILK INGREDIENTS.</strong>
              </span>
            </p>
            <h2 className='hero__price'>
              <span className='hide'>$3.99</span>
            </h2>
            <a className='hero__btn' href='#cart'>
              <span className='hide'> Add to cart</span>
            </a>
          </div>
          <div className='hero__chipses chipses hero__content'>
            <figure>
              <img className='chipses__doritos' src={doritos} alt='doritos' />
              <div className='chipses__backdrop'></div>
              <div className='chipses__details'>
                <img className='chipses__chips' src={chips} alt='chips' />
                <img className='chipses__ketchup' src={ketchup} alt='ketchup' />
                <img className='chipses__suyaPepper' src={suyaPepper} alt='suya__pepper' />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
