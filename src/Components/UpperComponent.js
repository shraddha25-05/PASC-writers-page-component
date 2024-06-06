import React from "react";
import ProfilePic from "../Images/ProfilePic.jpeg";
import SearchIcon from '../Images/SearchIcon.png'

const UpperComponent = () => {
  return (
    <div>
      {/* Search bar, inputbox and profile picture */}
      <div className="flex items-center justify-between">
        <div className="rounded-lg flex items-center px-2 border-solid border-2">
          <img src={SearchIcon} className="h-5" alt="" />
          <input
            className="p-2 outline-none"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="flex space-x-4">
          <input
            className="p-2 rounded-lg border-solid border-2 border-gray-300"
            type="text"
            placeholder="Write"
          />
          <img className="rounded-full h-10" src={ProfilePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UpperComponent;
