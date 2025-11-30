import React from 'react'
import doctor from '../assets/images/doctor.png'

const Hero = () => {
  return (
    <div className="bg-[#0309320A] m-3 flex items-center justify-center gap-4">
      <div className='w-120 relative left-70'>
        <p className="font-bold text-4xl">
          Health Desk Clinic:
          <br />
          All Natural Supplements
        </p>
        <p className='mt-8'>
          Health Care Desk is the premier choice for those seeking wellness
          through wholesome, superfood-enriched formulas that actually work. Our
          all-natural, organic health supplements are designed to give your body
          what it needs to thrive and optimize your health each day!
        </p>
        <button className='bg-blue-600 font-bold text-amber-50 p-4 rounded-[50px] w-50 mt-8'>Shop Now</button>
      </div>
        <img className='w-200 mb-4' src={doctor} alt="" />
    </div>
  );
}

export default Hero