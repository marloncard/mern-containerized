import axios from 'axios';


export const apiURL = `http://localhost:8080`;

export const create = (path, obj) => {
  axios.post(`${apiURL}${path}`, obj)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const get = (path) => {
  axios.get(`${apiURL}${path}`)
    .then(res => res.json())
    .catch(err => console.log(err));
};