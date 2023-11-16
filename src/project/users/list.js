import * as client from "./client";
import { useNavigate } from "react-router";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function UserList() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <div className="list-group">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/project/users/${user._id}`}
            className="list-group-item"
          >
            {user.username}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserList;
