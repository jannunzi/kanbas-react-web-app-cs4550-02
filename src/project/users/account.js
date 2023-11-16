import * as client from "./client";
import { useNavigate } from "react-router";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Account() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const signout = async () => {
    await client.signOut();
    navigate("/project/signin");
    // setCurrentUser(null);
  };
  const updateUser = async () => {
    await client.updateUser(currentUser._id, currentUser);
  };
  const fetchCurrentUser = async () => {
    try {
      const currentUser = await client.account();
      setCurrentUser(currentUser);
    } catch (error) {
      navigate("/project/signin");
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  if (!currentUser) return null;
  return (
    <div>
      <h1>Account</h1>
      {currentUser && (
        <div>
          <h3>{currentUser.username}</h3>
          <input
            type="password"
            className="form-control"
            value={currentUser.password}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, password: e.target.value })
            }
          />
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
          <button onClick={signout} className="btn btn-danger">
            Sign Out
          </button>
          <button onClick={updateUser}>Update</button>
          <hr />
          {currentUser.role === "ADMIN" && (
            <Link to="/project/users" className="btn btn-warning">
              users
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Account;
