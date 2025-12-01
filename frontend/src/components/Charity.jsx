import React from 'react'
import charitybanner from '../assets/images/charitybanner.png'
import atalogo from '../assets/images/atalogo.png'
import diabeteslogo from '../assets/images/diabeteslogo.png'
import heartlogo from '../assets/images/heartlogo.png'
import prostatelogo from '../assets/images/prostatelogo.png'
import usplogo from '../assets/images/usplogo.png'

const Charity = () => {
  return (
    <div>
      <div className="absolute text-amber-50 w-full">
        <center className="text-2xl font-bold mt-20">
          Our Charitable Initiatives
        </center>
        <center className="text-2xl font-bold">
          Health Care Desk Gives Back
        </center>
        <center className="mt-6">
          At Health Care Desk, a portion of our profits are committed to
          supporting charities and global health research initiatives.
        </center>
        <div className="flex align-center justify-center mt-20 gap-15">
          <img className="w-40 h-auto" src={prostatelogo} alt="" />
          <img className="w-40 h-auto" src={atalogo} alt="" />
          <img className="w-40 h-auto" src={usplogo} alt="" />
          <img className="w-40 h-auto" src={diabeteslogo} alt="" />
          <img className="w-40 h-auto" src={heartlogo} alt="" />
        </div>
      </div>
      <img src={charitybanner} alt="" className='h-100 w-full' />
    </div>
  );
}

export default Charity