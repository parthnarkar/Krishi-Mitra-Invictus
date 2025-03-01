import React, { useState } from "react";
import { signUpWithGoogle, signUpWithEmail, saveUserData } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSignUp = async () => {
    const user = await signUpWithEmail(email, password, displayName);
    if (user) {
      await saveUserData(user); // Save basic user data
      navigate("/user-details"); // Redirect to user details form
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700">Sign Up</h1>

        <button onClick={signUpWithGoogle} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Sign up with Google
        </button>

        <div className="mt-4">
          <input type="text" placeholder="Full Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="block w-full p-2 border rounded" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
          <button onClick={handleSignUp} className="mt-2 px-4 py-2 bg-gray-500 text-white rounded">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
