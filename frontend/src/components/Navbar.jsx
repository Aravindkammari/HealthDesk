import React from "react";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";

const Navbar = () => {
  return (
    <div className="flex gap-180 mt-3 px-12 border-b-3 border-b-gray-200">
      <div className="flex items-center">
        <img className="w-[100px] h-[78px]" src={logo} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-10 items-center justify-center ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">FAQ</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">
            <img src={cart} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
