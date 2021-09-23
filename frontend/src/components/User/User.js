import { useState, useEffect } from 'react';
import { apiCreate, apiGet, apiUpdate, apiDelete } from '../../util/api';

import UserForm from './UserForm';
import UserTable from './UserTable';
import UserSample from './UserSample';

export default function User() {
  const [ users, setUsers ] = useState([]);
  const [ userId, setUserId ] = useState(null);
  const [ currentUser, setCurrentUser ] = useState({});

  const loadUsers = async () => {
    const resp = await apiGet('users');
    setUsers(resp);
  }
  const loadForm = (uId) => {
    const userRow = users.filter((user) => user._id === uId)[0];
    document.getElementById('username').value = userRow.userName;
    document.getElementById('firstname').value = userRow.firstName;
    document.getElementById('lastname').value = userRow.lastName;
    document.getElementById('email').value = userRow.email;
    setUserId(uId);
  }
  const deleteOne = (userId) => {
    apiDelete(`users/${userId}`);
    const newUsers = users.filter((user) => user._id !==userId);
    setUsers([...newUsers]);
  }

  // Load sample data
  useEffect(() => {
    loadUsers();
  }, [])


  return (
    <div style={{  margin: '0px 30px' }}>
      <h1>Users</h1>
      <hr></hr>
      <UserSample />
      <hr></hr>
      <UserTable
        users={users}
        loadForm={loadForm}
        deleteOne={deleteOne}
      />
      <hr></hr>
      <UserForm
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        userId={userId}
      />
    </div>
  )

};