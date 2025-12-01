import React from 'react'
import BestSellerCard from './BestSellerCard';
import dentpure from '../assets/images/dentpure.png';
import nervefreedom from '../assets/images/nervefreedom.png';
import prostazen from '../assets/images/prostazen.png';
import trueferm from '../assets/images/trueferm.png';
import vitarenew from '../assets/images/vitarenew.png';

const BestProducts = () => {
  return (
    <div className="mt-20 px-12">
      <h1 className="font-bold text-2xl">Our Best Sellers</h1>
      <p className="mt-2 text-sm">
        Formulated with science-backed all-natural ingredients, our unique
        supplements support holistic health, healing & wellness.
      </p>
      <div className='text-sm flex gap-8 mt-3 font-bold'>
        <span className='p-2'>Results-Driven</span>
        <span className='border-l p-2'>All-Natural</span>
        <span className='p-2 border-l'>Non-GMO</span>
        <span className='p-2 border-l'>Cruelty-Free</span>
      </div>
      <div className='flex gap-20 mt-10'>
        <BestSellerCard image={dentpure} name="Dent Pure"/>
        <BestSellerCard image={trueferm} name="True Fem"/>
        <BestSellerCard image={vitarenew} name="Vita Renew"/>
        <BestSellerCard image={prostazen} name="ProstaZen"/>
        <BestSellerCard image={nervefreedom} name="Nerve Freedom"/>
      </div>
    </div>
  );
}

export default BestProducts