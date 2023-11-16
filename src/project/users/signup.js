import React, { useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signUp = async () => {
    try {
      const currentUser = await client.signUp(user);
      navigate("/project/account");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
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
      <button onClick={signUp} className="btn btn-primary">
        Sign Up
      </button>
      <Link to="/project/signin" className="btn btn-link">
        Sign In
      </Link>
    </div>
  );
}

export default SignUp;
