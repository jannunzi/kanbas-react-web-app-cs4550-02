import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

export const currenUserFollowsUser = async (followId) => {
  const response = await request.post(
    `http://localhost:4000/api/users/follows/${followId}`
  );
  return response.data;
};
export const createUserFollowsUser = async (userId, followId) => {
  const response = await request.post(
    `http://localhost:4000/api/users/${userId}/follows/${followId}`
  );
  return response.data;
};
export const deleteUserFollowsUser = async (userId, followId) => {
  const response = await request.delete(
    `http://localhost:4000/api/users/${userId}/follows/${followId}`
  );
  return response.data;
};
export const findUsersFollowingUser = async (userId) => {
  const response = await request.get(
    `http://localhost:4000/api/users/${userId}/followers`
  );
  return response.data;
};
export const findUsersFollowedByUser = async (userId) => {
  const response = await request.get(
    `http://localhost:4000/api/users/${userId}/following`
  );
  return response.data;
};
