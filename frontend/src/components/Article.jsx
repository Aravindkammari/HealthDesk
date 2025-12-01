import React from 'react'
import fruits from '../assets/images/fruits.png'
import chemicals from '../assets/images/chemicals.png'
import medicine from '../assets/images/medicinepills.png'

const Article = () => {
  return (
    <div className="mt-10">
      <center className="font-bold text-4xl">Health Care Desk</center>
      <center className="font-bold text-4xl">The Future Of Smart Health</center>
      <p className="mt-10 px-14 text-lg">
        At Health Care Desk, we are committed to producing supplements that
        harness the power of all-natural superfoods. Our products help support
        the body's natural processes, improving our customers' quality of life.
      </p>
      <div className="flex px-14 gap-10 mt-15">
        <img className="w-100 h-auto" src={fruits} alt="" />
        <div>
          <h1 className="font-bold text-3xl">100% Natural Components</h1>
          <p className="font-bold text-xl">
            Nature-Powered Wellness You Can Trust
          </p>
          <p className="mt-10 text-xl font-thin">
            We harness the goodness of nature to create supplements enriched
            with premium, research-backed superfood extracts. Each formula is
            carefully crafted to promote overall vitality and deliver proven
            health benefits. At Health Desk Care, we uphold the highest
            standards of quality, safety, and regulatory compliance, ensuring
            every product you choose is both effective and trustworthy.
          </p>
          <button className="text-blue-600 border border-b-blue-600 mt-10 px-4 py-2">
            Learn More
          </button>
        </div>
      </div>

      {/* second article */}
      <div className="flex px-14 gap-10 mt-15">
        <div>
          <h1 className="font-bold text-3xl">Research-Backed Formulations</h1>
          <p className="font-bold text-xl">
            Formulated with Clinically Tested Ingredients
          </p>
          <p className="mt-10 text-xl font-thin">
            We combine the expertise of our physicians with the latest health
            data and medical research, ensuring every supplement is thoughtfully
            formulated for maximum benefit.
          </p>
          <button className="text-blue-600 border border-b-blue-600 mt-10 px-4 py-2">
            Learn More
          </button>
        </div>
        <img className="w-100 h-auto" src={chemicals} alt="" />
      </div>

      {/* third */}

      <div className="flex px-14 gap-10 mt-15">
        <img className="w-100 h-auto" src={medicine} alt="" />
        <div>
          <h1 className="font-bold text-3xl">Eco-Conscious Manufacturing</h1>
          <p className="font-bold text-xl">Sustainable from Source to Shelf</p>
          <p className="mt-10 text-xl font-thin">
            Our supplements are crafted in certified facilities that meet and
            exceed industry standards — ensuring exceptional quality while
            minimizing environmental impact. Through eco-friendly processes and
            a commitment to reducing our carbon footprint, we create wellness
            solutions that are as good for the planet as they are for you.
          </p>
          <button className="text-blue-600 border border-b-blue-600 mt-10 px-4 py-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article