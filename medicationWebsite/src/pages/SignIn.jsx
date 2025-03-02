import React, { useState } from "react";
import { signInWithGoogle, signInWithPhone, setUpRecaptcha } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOtp = async () => {
    const confirmation = await setUpRecaptcha(phone);
    setConfirmationResult(confirmation);
  };

  const verifyOtp = async () => {
    const user = await signInWithPhone(confirmationResult, otp);
    if (user) navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700">Sign In</h1>

        <button onClick={() => signInWithGoogle(navigate)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Sign in with Google
        </button>

        <div className="mt-4">
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="block w-full p-2 border rounded" />
          <button onClick={sendOtp} className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded">
            Send OTP
          </button>
        </div>

        {confirmationResult && (
          <div className="mt-4">
            <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="block w-full p-2 border rounded" />
            <button onClick={verifyOtp} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
              Verify OTP
            </button>
          </div>
        )}

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default SignIn;
