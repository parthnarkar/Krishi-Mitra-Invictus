import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import Profile from "./pages/Profile.jsx";
import { auth, onAuthStateChanged } from "./firebase";
import { useEffect, useState } from "react";
import { isUserRegistered } from "./firebase";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      if (!auth.currentUser) {
        navigate("/signin");
        return;
      }
      const registered = await isUserRegistered(auth.currentUser.uid);
      setIsRegistered(registered);
      setIsLoading(false);
    };

    checkUser();
  }, [navigate]);

  if (isLoading) return <p className="text-center text-xl mt-10">Loading...</p>;
  return isRegistered ? children : <Navigate to="/user-details" />;
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const registered = await isUserRegistered(currentUser.uid);
        setUser({ ...currentUser, registered });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="flex justify-center mt-10">
        <Link to="/signin" className="mr-4 text-blue-500">Sign In</Link>
        <Link to="/signup" className="mr-4 text-green-500">Sign Up</Link>
        <Link to="/profile" className="text-purple-500">Profile</Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/profile" element={user?.registered ? <Profile /> : <Navigate to="/user-details" />} />
      </Routes>
    </Router>
  );
};

export default App;
