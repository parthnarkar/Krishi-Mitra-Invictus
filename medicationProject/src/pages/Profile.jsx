import React, { useEffect, useState } from "react";
import { getUserData, logout } from "../firebase";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserData();
      setUser(data);
    };
    fetchUser();
  }, []);

  return user ? (
    <div className="p-6">
      <h1>{user.name}</h1>
      <p>DOB: {user.dob}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Profile;
