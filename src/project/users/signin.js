import React, { useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

function SignIn() {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [account, setAccount] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      const currentUser = await client.signIn(account);
      dispatch(setCurrentUser(currentUser));
      navigate("/project/account");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <h1>Sign In {JSON.stringify(currentUser)}</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}
      <input
        type="text"
        className="form-control"
        value={account.username}
        onChange={(e) => setAccount({ ...account, username: e.target.value })}
      />
      <input
        type="password"
        className="form-control"
        value={account.password}
        onChange={(e) => setAccount({ ...account, password: e.target.value })}
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
