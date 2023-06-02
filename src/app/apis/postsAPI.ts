import { TComment, TPost } from '../types/app.typings';

import axios from './baseApi';

const path = '/posts';

export const getAllPosts = async (): Promise<Record<number, TPost>> => {
  const response = await axios.get(path);
  return response.data;
};

export const getPostComments = async (id: number): Promise<Record<number, TComment>> => {
  const response = await axios.get(`${path}/${id}/comments`);
  return response.data;
};
