import React, { useEffect, useState } from "react";
import InstaIcon from "../assets/owner/instagram.png";
import TwitterIcon from "../assets/owner/twitter.png";
import MoreIcon from "../assets/owner/more.png";
import "./Puck.css";
const PuckContainer = ({ selectedPunk, punkListData }) => {
  console.log({ selectedPunk }, "🔥");
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  console.log({ data: punkListData[selectedPunk], punkListData }, "🔥");
  const image =
    "https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM";
  const name = "Gold Puck";
  return (
    <div className="main h-[50vh]">
      <div className="mainContent flex pb-5 border-b-2 border-white">
        <div className="puckHighlighter center ">
          <div className="puckContainer  flex mr-5   ">
            <img
              src={activePunk.image_original_url}
              className="selectedPuck object-contain rounded-lg "
              alt="selectedPuck"
            />
          </div>
        </div>
        {/* Puck Details */}
        <div className="puckDetails flex flex-col  justify-between text-white">
          {/* Title */}
          <div className="title text-5xl font-black">{activePunk.name}</div>
          {/* id */}
          <h1 className="font-bold text-gray-500 text-4xl">
            •#{activePunk.token_id}
          </h1>
          <div className="ownerDetails">
            {/* image */}
            <div className="flex space-x-2">
              <img
                src={activePunk.owner.profile_img_url}
                className="h-12 w-12 rounded-full object-contain max-h-[30vh]"
                alt="ownerImg"
              />
              {/* owner details */}
              <div className="ownerDetails items-center flex flex-1">
                <div className="ownerhandel flex-1">
                  <div>{activePunk.owner.address}</div>
                  <div className="text-[#00ebfe]">@Magesh</div>
                </div>
                {/* insta youtube twitter icon */}
                <div className="instaIcon circle">
                  <img src={InstaIcon} className="w-full h-full" alt="insta" />
                </div>
                {/* Twitter Icon */}
                <div className="twitterIcon circle">
                  <img
                    src={TwitterIcon}
                    className="w-full h-full"
                    alt="twitter"
                  />
                </div>
                {/* more Icon */}
                <div className="moreIcon circle mr-4">
                  <img src={MoreIcon} className="w-full h-full" alt="more" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Owner Details */}
      </div>
    </div>
  );
};

export default PuckContainer;
