import axios from 'axios';
import { baseUrlApi, limit } from '../utils/constants';

axios.defaults.baseURL = baseUrlApi;

const searchParams = new URLSearchParams({
  limit,
});

export const getUsers = async page => {
  try {
    const { data } = await axios.get(`/users?${searchParams}&page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (userId, userFollowers) => {
  try {
    const { data } = await axios.put(`/users/${userId}`, {
      followers: userFollowers,
    });

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
