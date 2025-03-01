import React, { useState } from "react";
import { loginWithEmail, signUpWithGoogle, isUserRegistered } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await loginWithEmail(email, password);
    if (user) {
      const isRegistered = await isUserRegistered(user.uid);
      navigate(isRegistered ? "/profile" : "/user-details");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700">Sign In</h1>

        <button onClick={signUpWithGoogle} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Sign in with Google
        </button>

        <div className="mt-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 mt-2 border rounded" />
          <button onClick={handleLogin} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
