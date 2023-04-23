import axios from 'axios';

axios.defaults.baseURL = 'https://64197394c152063412c23a98.mockapi.io/';

export async function getUsers() {
  const response = await axios.get('/users');
  return response.data;
}

export async function updateUserFollowers(id, newFollower) {
  const response = await axios.put(`/users/${id}`, {followers: newFollower});
  return response.data;
}