import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import BestProducts from "./components/BestProducts";
import Brand from "./components/Brand";

const App = () => {
  return (
    <div className="px-12 font-[Outfit,sans-serif]">
      <Navbar />
      <Hero />
      <div className="font-bold text-4xl flex-row items-center justify-center mt-15">
        <center>Nutrition Solutions</center>
        <center>for Your Complete Well-Being</center>
      </div>
      <Products />
      <BestProducts/>
      <Brand/>
    </div>
  );
};

export default App;
