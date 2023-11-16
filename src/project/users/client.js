import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const USERT_API = `${API_URL}/users`;

export const signIn = async (credentials) => {
  const response = await axios.post(`${USERT_API}/signin`, credentials);
  return response.data;
};
export const signUp = async (credentials) => {
  const response = await axios.post(`${USERT_API}/signup`, credentials);
  return response.data;
};
export const signOut = async () => {
  const response = await axios.post(`${USERT_API}/signout`);
  return response.data;
};
export const account = async () => {
  const response = await axios.post(`${USERT_API}/account`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(`${USERT_API}`);
  return response.data;
};

export const findUserById = async (userId) => {
  const response = await axios.get(`${USERT_API}/${userId}`);
  return response.data;
};

export const updateUser = async (userId, user) => {
  const response = await axios.put(`${USERT_API}/${userId}`, user);
  return response.data;
};
