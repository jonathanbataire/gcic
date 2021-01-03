const axios = require('axios');

export async function getToken(credentials) {
  const { data } = await axios.post(`/login`);
  return data;
}

export async function getHome(){
  try {
    const { data } = await axios.get(`/home`);
    return data;
  } catch (err) {
    alert(err)
  }
};
