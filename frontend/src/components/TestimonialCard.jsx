import React from 'react'
import testimonialcardbg from '../assets/images/testimonialcardbg.png'
import star from '../assets/images/star_purple500.png'

const TestimonialCard = ({image, name, content, customerName}) => {
  return (
    <div className='cursor-pointer'>
      <div className='absolute w-100 px-5'>
        <div className='flex'>
          <img src={image} alt="" className='relative bottom-10 h-20'/>
          <div>
            <p className='font-bold mt-5'>{name}</p>
            <div className="flex">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p>
              {content}
            </p>
          </div>
        </div>
        <p>{customerName}</p>
      </div>
      <img className='h-60 w-100' src={testimonialcardbg} alt="" />
    </div>
  );
}

export default TestimonialCard