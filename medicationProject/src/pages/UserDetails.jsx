import React, { useState } from "react";
import { auth, saveUserData } from "../firebase";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [language, setLanguage] = useState("");
  const [voiceReminder, setVoiceReminder] = useState(false);

  const handleSubmit = async () => {
    const userDetails = {
      uid: auth.currentUser.uid,
      dob,
      gender,
      phone,
      emergencyContact,
      language,
      voiceReminder,
    };

    await saveUserData(userDetails);
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700">Enter Your Details</h1>

        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} className="block w-full p-2 border rounded" />
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="block w-full p-2 mt-2 border rounded">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
        <input type="text" placeholder="Emergency Contact" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
        <input type="text" placeholder="Preferred Language" value={language} onChange={(e) => setLanguage(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
        <label className="mt-2">
          <input type="checkbox" checked={voiceReminder} onChange={() => setVoiceReminder(!voiceReminder)} /> Enable Voice Reminders
        </label>

        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
