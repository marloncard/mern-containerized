import { useState } from 'react';
import axios from 'axios';
import { apiURL } from './util/api';

export default function User() {
  const [ Users, SetUsers ] = useState([]);

  const createUser = (userData) => {
    axios.post(`${apiURL}/users`, {})
      .then(() => loadUsers())
      .catch(error => console.log(error));
  };

  const loadUsers = () => {
    axios.get(`${apiURL}/users`)
      .then(response => SetUsers(response.data))
      .catch(error => console.log(
        error.response.data.error,
        error.response.status));
  }

};