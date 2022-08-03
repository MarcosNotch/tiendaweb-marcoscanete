import './Carrusel.css'

import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <div className='carrousel-container-2'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images\carusel\carusel1.webp"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images\carusel\carusel2.webp"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images\carusel\carusel3.webp"
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrusel;