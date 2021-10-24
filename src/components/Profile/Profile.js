import React, { useEffect } from "react";
import "../Login/Login.scss";

const Profile = ({ profile, getProfile }) => {
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="wrapper ">
      <div className="homepage">
        <h1>{profile.email}</h1>
        <h1>{profile.password}</h1>
      </div>
    </div>
  );
};

export default Profile;
