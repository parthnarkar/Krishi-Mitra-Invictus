import React from "react";
import { signUpWithGoogle } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700">Sign Up</h1>

        <button onClick={() => signUpWithGoogle(navigate)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
