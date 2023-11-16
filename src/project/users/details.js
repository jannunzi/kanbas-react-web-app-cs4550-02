import * as client from "./client";

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1>User Detail</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default UserDetail;
