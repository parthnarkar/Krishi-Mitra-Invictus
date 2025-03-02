import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserDetails from "./pages/UserDetails";
import Profile from "./pages/Profile";
import { auth, onAuthStateChanged } from "./firebase";
import { useEffect, useState } from "react";
import { isUserRegistered } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const registered = await isUserRegistered(currentUser.uid);
        setUser({ ...currentUser, registered });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p className="text-center text-xl mt-10 font-semibold">Loading...</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to={user?.registered ? "/profile" : "/user-details"} /> : <SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-details" element={user ? <UserDetails /> : <Navigate to="/" />} />
        <Route path="/profile" element={user?.registered ? <Profile /> : <Navigate to="/user-details" />} />
      </Routes>
    </Router>
  );
};

export default App;
