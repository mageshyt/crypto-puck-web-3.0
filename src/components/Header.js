import React from "react";
import searchIcon from "../assets/header/search.png";
import ThemeSwitchIcon from "../assets/header/theme-switch.png";
const Header = ({ puckLogo }) => {
  return (
    <div className="flex m-2 items-center justify-between h-[100px]">
      {/* Left side --> logo */}
      <div>
        <img src={puckLogo} alt="logo" className="w-[200px]" />
      </div>
      {/* Middle side --> Header */}
      <div
        className="md:flex hidden md:inline-block
      bg-[#1c1c1e] flex-1 
      items-center rounded-full  h-[50px]"
      >
        {/* search Icon */}
        <div className="m-[10px]">
          <img src={searchIcon} alt="search" className="" />
        </div>
        <input
          type="text"
          placeholder="Collection ,items or users..."
          className="w-full bg-transparent text-sm
          text-gray-400 outline-none"
        />
      </div>
      {/* Right Side --> Header Items*/}
      <div className="flex text-gray-400 space-x-4 ml-2">
        <p>Drop</p>
        <p>Market Place</p>
        <p>Create</p>
      </div>

      {/* Header action */}
      <div className="flex m-[10px] items-center">
        {/* theme switch */}
        <div className=" flex items-center bg-[#1c1c1e] p-2 object-contain rounded-full  justify-center">
          <img
            src={ThemeSwitchIcon}
            alt=""
            className="h-[25px]    object-contain  "
          />
        </div>
      </div>
      {/* button --> Get in */}
      <div className=" custom-btn ">
        <p className="font-semibold text-gray-900">Get in </p>{" "}
      </div>
    </div>
  );
};

export default Header;
