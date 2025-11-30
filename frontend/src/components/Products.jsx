import React from 'react'
import Card from './Card'
import weightloss from '../assets/images/weightloss.png'
import menshealth from '../assets/images/menshealth.png'
import womenhealth from '../assets/images/womenhealth.png'
import skincare from '../assets/images/skincare.png'

const Products = () => {
  return (
    <div className='grid grid-cols-4 mt-20 gap-5'>
      <Card
        image={weightloss}
        name="Weight Loss"
        text="Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you"
      />
      <Card
        image={skincare}
        name="Skin Care"
        text="Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function"
      />
      <Card
        image={menshealth}
        name="Men's Health"
        text="Discover men’s health products designed to boost energy, strength, and overall well-being."
      />
      <Card
        image={womenhealth}
        name="Women's Health"
        text="Explore women’s health products that support hormonal balance, vitality, and overall wellness"
      />
    </div>
  );
}

export default Products