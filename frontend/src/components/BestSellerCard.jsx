import React from 'react'
import star from '../assets/images/star_purple500.png'

const BestSellerCard = ({image, name}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[200px] gap-3">
        <div>
          <img src={image} alt="" />
        </div>
        <p className="text-sm font-bold">{name}</p>
        <div className="flex">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <button className='text-sm border-b-blue-700 border px-6 py-2 text-blue-600 cursor-pointer'>Shop Now</button>
      </div>
    </div>
  );
}

export default BestSellerCard