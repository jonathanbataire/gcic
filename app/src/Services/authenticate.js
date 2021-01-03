const axios = require('axios');

export async function getToken(credentials) {
  try {
    const { data } = await axios.post(`/login`);
    return data;
  } catch (err) {
    return { error: err };
  }
}

export async function getHome(){
  try {
    const { data } = await axios.get(`/home`);
    return data;
  } catch (err) {
    alert(err)
  }
};
