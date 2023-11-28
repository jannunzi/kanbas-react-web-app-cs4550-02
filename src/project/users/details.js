import * as client from "./client";

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as followsClient from "../follows/client";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
  };

  const followUser = async () => {
    const follow = await followsClient.currenUserFollowsUser(id);
    console.log(follow);
  };

  const findFollowers = async () => {
    const followers = await followsClient.findUsersFollowingUser(id);
    setFollowers(followers);
  };

  const findFollowing = async () => {
    const following = await followsClient.findUsersFollowedByUser(id);
    setFollowing(following);
  };

  useEffect(() => {
    fetchUser();
    findFollowers();
    findFollowing();
  }, [id]);
  return (
    <div>
      <button onClick={followUser}>Follow</button>
      <h1>User Detail</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h2>Followers</h2>
      <div className="list-group">
        {followers.map((follower) => (
          <Link
            key={follower._id}
            to={`/project/users/${follower.follower._id}`}
            className="list-group-item"
          >
            {follower.follower.username}
          </Link>
        ))}
      </div>
      <h2>Following</h2>
      <div className="list-group">
        {following.map((followed) => (
          <Link
            key={followed._id}
            to={`/project/users/${followed.followed._id}`}
            className="list-group-item"
          >
            {followed.followed.username}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserDetail;
