import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import router, { RenderRoutes } from './router';
import Home from './components/Home/Home';
import './App.css';
import { apiURL } from './util/api';


function App() {

  const [ Users, SetUsers ] = useState([]);

  const createUser = () => {
    axios.post(apiURL + '/users', {userName: 'Bobc', firstName: 'Bob', lastName: 'Hole', email:'bobyb@gmail.com'})
    .then(() => loadUsers())
    .catch(err => console.error(err.response.data.error, err.response.status));
  }

  const loadUsers = () => {
    axios.get(apiURL + '/users')
    .then((res) => SetUsers(res.data))
    .catch(err => console.log(err.response.data.error, err.response.status));
  }

  useEffect(() => {
    // loadUsers();  
  }, [])

  return (
    <div>
      <RenderRoutes routes={router} />
    </div>
  );
}

export default App;
