import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

export const createUserLikesAlbum = async (albumId, title) => {
  const response = await request.post(
    `http://localhost:4000/api/users/likes/${albumId}/title/${title}`
  );
  return response.data;
};

export const deleteUserLikesAlbum = async (albumId) => {
  const response = await request.delete(
    `http://localhost:4000/api/users/likes/${albumId}`
  );
  return response.data;
};

export const findUsersLikedAlbum = async (userId) => {
  const response = await request.get(
    `http://localhost:4000/api/users/${userId}/likes`
  );
  return response.data;
};

export const findAlbumsLikedByUser = async (userId) => {
  const response = await request.get(
    `http://localhost:4000/api/users/${userId}/likes`
  );
  return response.data;
};
