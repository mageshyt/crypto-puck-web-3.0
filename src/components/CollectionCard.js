import React from "react";
import EthLogo from "../assets/weth.png";

const CollectionCard = ({ name, image, id, traits }) => {
  return (
    <div
      className="collectionsCard card-animation h-[400px] md:h-[400px] mr-5 mt-5
    relative  bg-[#1a1c1e] rounded-xl  w-[300px] text-white "
    >
      <img
        src={
          image
            ? image
            : "https://ipfs.thirdweb.com/ipfs/bafkreifkryuvynzeeouvq3qwd4ln2sofaw3wntg2liswqz7uiydsrqtt3i"
        }
        alt=""
        className=" w-full cursor-pointer rounded-xl  "
      />
      <div className="details p-[20px]">
        {/* Name */}
        <div className="font-black font-xl">
          {name}
          {/* #id */}
          <div className="text-lg text-gray-500 font-semibold">•#{id}</div>
        </div>
        {/* Price */}
        <div className="price flex space-x-2 items-center  font-bold mt-3 object-contain">
          <img src={EthLogo} alt="" className="h-[25px] w-[15px]" />
          <span>{traits[0].value}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
