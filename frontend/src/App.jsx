import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import BestProducts from "./components/BestProducts";
import Brand from "./components/Brand";
import Article from "./components/Article";
import Charity from "./components/Charity";

const App = () => {
  return (
    <div className="font-[Outfit,sans-serif]">
      <Navbar />
      <Hero />
      <div className="font-bold text-4xl flex-row items-center justify-center mt-15">
        <center>Nutrition Solutions</center>
        <center>for Your Complete Well-Being</center>
      </div>
      <Products />
      <BestProducts/>
      <Brand/>
      <Article/>
      <Charity/>
    </div>
  );
};

export default App;
