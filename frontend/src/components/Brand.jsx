import React from 'react'
import brandbg from '../assets/images/brandbg.png'
import branditems from '../assets/images/branditems.png'

const Brand = () => {
  return (
    <div className="mt-30 px-12">
      <div className="absolute w-full flex flex-col mt-10 items-center justify-center">
        <center className="font-bold text-3xl">
          A Brand That You Can Trust
        </center>
        <center className="mt-2 text-xl">
          Our results-driven supplements are made with premium & safe
          ingredients
        </center>
        <img className="w-150 h-auto mt-10" src={branditems} alt="" />
        <div className="flex text-[#1A69BE] gap-12 mt-3">
          <p>All Natural</p>
          <p>Cruelty-Free</p>
          <p>
            Money-back
            <br />
            Guarantee
          </p>
          <p>Giving back</p>
          <p>Non-GMO</p>
        </div>
      </div>
      <img className="w-full h-80" src={brandbg} alt="" />
    </div>
  );
}

export default Brand