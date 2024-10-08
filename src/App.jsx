import React, { useState, useEffect } from 'react';
import './App.css'

function Card() {
  
  const [imageSrc, setImageSrc] = useState('../public/image-product-desktop.jpg');

  const changeImageForMobile = () => {
    const mobileImageSrc = '../public/image-product-mobile.jpg';
    const desktopImageSrc = '../public/image-product-desktop.jpg';

    if (window.innerWidth <= 800) {
      setImageSrc(mobileImageSrc); 
    } else {
      setImageSrc(desktopImageSrc); 
    }
  };

  useEffect(() => {
    changeImageForMobile();

    window.addEventListener('resize', changeImageForMobile);

    return () => {
      window.removeEventListener('resize', changeImageForMobile);
    };
  }, []); 


  return (
      <div className='card'>
          <div className='left-side'>
              <img id='img' src={imageSrc} alt="Product"></img>
          </div>
          <div className='right-side'>
              <h4>P E R F U M E</h4>
              <h1>Gabrielle Essence Eau De Parfum</h1>
              <p className='para'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
              <h2>$149.99</h2>
              <p className='oldprice'>$169.99</p>
              <button>
                  <img src='../../public/icon-cart.svg'></img>
                  Add to Cart</button>
          </div>
      </div>
  )
}

export default Card;
