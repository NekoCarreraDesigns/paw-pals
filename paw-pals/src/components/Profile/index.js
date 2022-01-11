import React from "react";
import { CustomPlaceholder } from "react-placeholder-image";
import "./style.css";

function Profile() {
  return (
    <div>
      <h1 className='profile-header'>Profile</h1>
      <div>
        <CustomPlaceholder width={100} height={100} />
      </div>
    </div>
  );
}

export default Profile;
