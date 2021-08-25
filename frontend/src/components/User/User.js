import { useState, useEffect } from 'react';
import { apiCreate, apiGet, apiUpdate, apiDelete } from '../../util/api';

import UserForm from './UserForm';
import UserTable from './UserTable';

export default function User() {
  const [ Users, setUsers ] = useState([]);
  const [ userId, setUserId ] = useState(null);
  const [ currentUser, setCurrentUser ] = useState({});

  const loadUsers = async () => {
    const resp = await apiGet('users');
    setUsers(resp);
  }
  const loadForm = (uId) => {
    const userRow = Users.filter((user) => user._id === uId)[0];
    document.getElementById('username').value = userRow.userName;
    document.getElementById('firstname').value = userRow.firstName;
    document.getElementById('lastname').value = userRow.lastName;
    document.getElementById('email').value = userRow.email;
    setUserId(uId);
  }
  const deleteOne = (userId) => {
    apiDelete(`users/${userId}`);
    const newUsers = Users.filter((user) => user._id !==userId);
    setUsers([...newUsers]);
  }

  // Load sample data
  useEffect(() => {
    // Sample Data
    const sampleUser = {
      userName: 'Bobd',
      firstName: 'Rob',
      lastName: 'Hole',
      email:'bobyd@gmail.com'
    }

    const createUser = async (userData) => {
      await apiCreate('users', userData);
      loadUsers();
    };

    createUser(sampleUser)
  }, [])


  return (
    <div style={{ marginLeft: 10 }}>
      <UserTable
        Users={Users}
        loadForm={loadForm}
        deleteOne={deleteOne}
      />
      <UserForm
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        userId={userId}
      />
    </div>
  )

};