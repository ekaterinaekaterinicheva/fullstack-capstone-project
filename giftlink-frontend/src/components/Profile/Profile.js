import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css'
import {urlConfig} from '../../config';
import { useAppContext } from '../../context/AuthContext';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
 const [updatedDetails, setUpdatedDetails] = useState({});
 const {setUserName} = useAppContext();
 const [changed, setChanged] = useState("");

 const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/app/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authtoken) {
        navigate("/app/login");
        return;
      }

      // Call the backend endpoint
      const response = await fetch(`${urlConfig.backendUrl}/api/auth/profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${authtoken}`, // Pass the JWT token
          "Email": email,
        },
      });

      if (response.ok) {
        const user = await response.json();
        setUserDetails(user);
        setUpdatedDetails(user);
      } else {
        // Handle error case
        throw new Error("Failed to fetch user profile");
      }

      } catch (error) {
        console.error("Fetch profile error:", error);
    }
  };

const handleEdit = () => {
setEditMode(true);
};

const handleInputChange = (e) => {
setUpdatedDetails({
  ...updatedDetails,
  [e.target.name]: e.target.value,
});
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const authtoken = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email");

    if (!authtoken || !email) {
      navigate("/app/login");
      return;
    }

    const response = await fetch(`${urlConfig.backendUrl}/api/auth/update`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${authtoken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: updatedDetails.name // Sending the new name to the backend
      }),
    });

    if (response.ok) {
      // Update the user details in session storage
      setUserDetails(updatedDetails);
      
      //Update session storage so the Navbar stays in sync
      sessionStorage.setItem("name", updatedDetails.name);

      setEditMode(false);
      setChanged("Name changed successfully!");

      setTimeout(() => {
        setChanged("");
        navigate("/");
      }, 1000);
    } else {
      // Handle error case
      throw new Error("Failed to update profile");
    }
  } catch (error) {
  console.error("Update profile error:", error);
  }
};

return (
<div className="profile-container">
  {editMode ? (
<form onSubmit={handleSubmit}>
<label>
  Email
  <input
    type="email"
    name="email"
    value={userDetails.email}
    disabled // Disable the email field
  />
</label>
<label>
   Name
   <input
     type="text"
     name="name"
     value={updatedDetails.name}
     onChange={handleInputChange}
   />
</label>

<button type="submit">Save</button>
</form>
) : (
<div className="profile-details">
<h1>Hi, {userDetails.name}</h1>
<p> <b>Email:</b> {userDetails.email}</p>
<button onClick={handleEdit}>Edit</button>
<span style={{color:'green',height:'.5cm',display:'block',fontStyle:'italic',fontSize:'12px'}}>{changed}</span>
</div>
)}
</div>
);
};

export default Profile;
