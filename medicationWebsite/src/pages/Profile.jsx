import React, { useEffect, useState } from "react";
import { getUserData, logout } from "../firebase";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!auth.currentUser) {
        navigate("/signin");
        return;
      }
      const userData = await getUserData(auth.currentUser.uid);
      setUser(userData);
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return <p className="text-center text-xl mt-10 font-semibold">Loading user profile...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold text-gray-700">Profile</h1>
        <img
          src={user.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full mt-4 border-2 border-gray-300"
        />
        <p className="text-lg mt-2 font-semibold">{user.name}</p>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.phone || "No phone number provided"}</p>

        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
