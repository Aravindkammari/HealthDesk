import React from 'react'
import logo2 from '../assets/images/healthdesklogo2.png'
import cards from '../assets/images/creditcards.png'

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="bg-[#F2F3F5] flex gap-25 justify-center h-70 pt-10 pb-5">
        <div className="w-100">
          <h1 className="font-bold text-2xl">Have a Question?</h1>
          <p className="mt-10">
            Check out our FAQs where we answer the most commonly asked questions
          </p>
          <button className="text-blue-600 cursor-pointer border border-b-blue-600 px-4 py-2 mt-10">
            Read FAQs
          </button>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Connect With Us</h1>
          <p className="mt-10">Enjoy free shipping for all orders.</p>
          <p className="font-bold mt-10 text-2xl">1-800-822-7777</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">We're Social</h1>
          <p className="mt-10">Like us, love us, follow us!</p>
        </div>
      </div>

      {/* blue banner */}

      <div className="bg-[#1A69BE] flex py-4 gap-20 items-center justify-center">
        <div className="text-amber-50">
          <h1 className="text-2xl">Let's Grow Together</h1>
          <p className="text-sm">
            We'll keep it simple. Only the news and updates you need.
          </p>
        </div>
        <div>
          <input
            className="border border-amber-50 h-10 text-amber-50 placeholder-amber-50 w-100 py-2 px-2 "
            type="text"
            placeholder="Please Enter Your Email"
          />
          <button className="bg-amber-50 font-bold cursor-pointer text-black py-2 px-2 w-30 h-10">
            Submit
          </button>
        </div>
      </div>

      {/* address */}

      <div className="my-4 flex">
        <div className="flex flex-col items-center border-r w-100 px-10 border-r-black justify-center ">
          <img className="w-20 h-auto" src={logo2} alt="" />
          <p>
            Address: 7823 Red Oak Trail, Austin, TX, 78745, United States Phone:
            (512) 555-2376 Email: Ereforce@outlook.com
          </p>
        </div>
        <div className="px-20">
          <h1 className="text-blue-500 font-bold">Our Products</h1>
          <div className="flex gap-20">
            <div>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>Uro Flow</p>
            </div>
            <div>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>Uro Flow</p>
            </div>
            <div>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>Uro Flow</p>
            </div>
            <div>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>Uro Flow</p>
            </div>
            <div>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>Uro Flow</p>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}

      <div className="bg-[#E7E6E6] py-5 text-sm">
        <center>
          These statements have not been evaluated by the Food and Drug
          Administration.
        </center>
        <center>
          These products are not intended to diagnose, treat, cure or prevent
          any disease. Individual results may vary.
        </center>
        <div className="flex items-center justify-center mt-2">
          <img className="w-50 h-auto" src={cards} alt="" />
        </div>
        <div className="flex gap-120 justify-center mt-8 ">
          <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>
          <div className="flex gap-5">
            <p className="border-r border-b-black pr-3">Terms And Conditions</p>
            <p className="border-r border-b-black pr-3">Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer