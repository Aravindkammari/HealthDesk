import React from 'react'
import TestimonialCard from './TestimonialCard';
import testobites from '../assets/images/testobites.png';
import vita from '../assets/images/vita.png';
import nerve from '../assets/images/nerve.png';
import logo2 from '../assets/images/healthdesklogo2.png'
import socialmedia from '../assets/images/socialmedia.png'

const Testimonials = () => {
  return (
    <div className="mt-15 px-10 flex flex-col gap-20 justify-center items-center">
      <center className="text-3xl font-bold">
        Verified Customer Testimonials
      </center>
      <div className="grid grid-cols-3 gap-10">
        <TestimonialCard
          image={testobites}
          name="TestoBites"
          content="TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended."
          customerName="- Ryan R."
        />
        <TestimonialCard
          image={vita}
          name="Vita Renew"
          content="My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care."
          customerName="- Jamie Fields"
        />
        <TestimonialCard
          image={nerve}
          name="Nerve Freedom"
          content="I have been an RN for 20 years and love helping people find solutions to their health issues.NF Product is the best natural product for neuropathy pain hands down."
          customerName="- Anonymous"
        />
      </div>
      <div className='flex flex-col'>
        <img src={logo2} alt="" />
        <button className="text-blue-600 border border-b-blue-600 py-2">
          Follow Us
        </button>
        <img className='mt-5' src={socialmedia} alt="" />
      </div>
    </div>
  );
}

export default Testimonials