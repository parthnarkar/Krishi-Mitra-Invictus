import React, { useState } from "react";
import { auth, saveUserData } from "../firebase";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    if (!auth.currentUser) return;
    await saveUserData({ uid: auth.currentUser.uid, dob, phone });
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700">Complete Your Profile</h1>
        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} className="block w-full p-2 border rounded mt-4" />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="block w-full p-2 border rounded mt-2" />
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
