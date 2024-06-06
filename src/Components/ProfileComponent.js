import React from "react";
import Background from "../Images/background.jpeg";
import ProfilePic from "../Images/ProfilePic.jpeg";

const ProfileComponent = () => {
  const clickHandler = () => {
    
  }
  return (
    <div className="my-2 bg-gray-100 p-2 rounded-lg">
      <div>
        {/* image */}
        <div className="flex">
          <img className="flex-1 h-32 rounded-lg" src={Background} alt="" />
        </div>
        {/* Profile picture, name and button */}
        <div className="my-2 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img className= "rounded-sm h-14" src={ProfilePic} alt="" />
            <p className="text-sm">Hakuna Matata</p>
            <p className="text-sm">. Post 29</p>
          </div>
          <button onClick={clickHandler} className="items-center rounded-lg px-3 py-1 bg-red-500 text-white">
            {" "}
            + Follow
          </button>
        </div>
        {/* About me */}
        <div>
          I am a tech enthusiast keen to discover the AIML domain!
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
