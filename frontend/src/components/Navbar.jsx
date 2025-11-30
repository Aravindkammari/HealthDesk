import React from "react";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";

const Navbar = () => {
  return (
    <div className="flex gap-180 mt-3">
      <div className="flex items-center">
        <img className="w-[100px] h-[78px]" src={logo} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-10 items-center justify-center ">
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>
            <img src={cart} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
