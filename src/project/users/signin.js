import React, { useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function SignIn() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const currentUser = await client.signIn(user);
      navigate("/project/account");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}
      <input
        type="text"
        className="form-control"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        className="form-control"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={signIn} className="btn btn-primary">
        Sign In
      </button>
      <Link to="/project/signup" className="btn btn-link">
        Sign Up
      </Link>
    </div>
  );
}

export default SignIn;
