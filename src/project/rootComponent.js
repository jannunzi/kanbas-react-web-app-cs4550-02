import React, { useState, useEffect } from "react";
import * as client from "./users/client";
import { setCurrentUser } from "./users/reducer";
import { useDispatch } from "react-redux";

function RootComponent({ show, children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchCurrentUser = async () => {
    try {
      const currentUser = await client.account();
      dispatch(setCurrentUser(currentUser));
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return <div>{!loading && children}</div>;
}

export default RootComponent;
