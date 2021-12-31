import React from "react";
import InstaIcon from "../assets/owner/instagram.png";
import TwitterIcon from "../assets/owner/twitter.png";
import MoreIcon from "../assets/owner/more.png";
const PuckContainer = ({ selectedPuck }) => {
  const image =
    "https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM";
  const name = "Gold Puck";
  return (
    <div className="main">
      <div className="mainContent">
        <div className="puckHighlighter">
          <div className="puckContainer">
            <img src={image} alt="selectedPuck" />
          </div>
        </div>
        {/* Puck Details */}
        <div className="puckDetails text-white">
          {/* Title */}
          <div className="title">{name}</div>
          {/* id */}
          <span>•#23</span>

          <div className="ownerDetails">
            {/* image */}
            <div>
              <img src={image} className="h-12 w-12 " alt="ownerImg" />
              {/* owner details */}
              <div className="ownerDetails">
                <div className="ownerhandel">
                  <div>00943589012348902584</div>
                  <div>@Magesh</div>
                </div>
                {/* insta youtube twitter icon */}
                <div className="instaIcon">
                  <img src={InstaIcon} alt="insta" />
                </div>
                {/* Twitter Icon */}
                <div className="twitterIcon">
                  <img src={TwitterIcon} alt="twitter" />
                </div>
                {/* more Icon */}
                <div className="moreIcon">
                  <img src={MoreIcon} alt="more" />
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
