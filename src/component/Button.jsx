import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 2,
      },
      400: {
          items: 3,
      },
      600: {
          items: 3,
      },
      700: {
          items: 4,
      },
      1000: {
          items: 8,

      }
  },
};
const Button = ({name}) => {
  
  return (
    <div className='flex flex-row'>
       
    <button className='item px-5 py-2 m-3 rounded-lg   bg-gray-200'>{name}</button>
    </div>
   
  )
}

export default Button