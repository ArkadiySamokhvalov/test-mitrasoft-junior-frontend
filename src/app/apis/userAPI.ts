import axios from './baseApi';

const path = '/users';

export const getUserById = async (id: number) => {
  const response = await axios.get(`${path}/${id}`);
  return response.data;
};

export const getUserPosts = async (id: number) => {
  const response = await axios.get(`${path}/${id}/posts`);
  return response.data;
};
