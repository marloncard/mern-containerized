import axios from 'axios';


export const apiURL = `http://localhost:8080`;

export const apiCreate = async (path, obj) => {
  try {
    const response = await axios.post(`${apiURL}/${path}`, obj)
    return response;
  } catch (error) {
    console.log(
      error
    );
  }
};

export const apiGet = async (path) => {
  try {
    const response = await axios.get(`${apiURL}/${path}`);
    return response.data;
  } catch(error) {
    console.log(error);
  }
};