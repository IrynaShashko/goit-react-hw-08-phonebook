import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  console.log('result', result);
  return result;
};

export const removeContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};
