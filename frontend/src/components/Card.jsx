import React from 'react'

const Card = ({image, name, text}) => {
  return (
    <div>
      <div className="bg-[#EDF9F6] rounded-2xl p-4 w-[330px]">
        <img className='m-3' src={image} alt="" />
        <p className='font-bold mt-3'>{name}</p>
        <p className='mt-1'>
          {text}
        </p>
        <button className='text-amber-50 bg-blue-500 rounded-[40px] w-40 mt-3 cursor-pointer'>Buy Now</button>
      </div>
    </div>
  );
}

export default Card