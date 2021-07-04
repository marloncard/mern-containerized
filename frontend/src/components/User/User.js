import { useState, useEffect } from 'react';
import { apiCreate, apiGet } from '../../util/api';

export default function User() {
  const [ Users, SetUsers ] = useState([]);

  const loadUsers = async () => {
    const userResp = await apiGet('users');
    SetUsers(userResp);
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

  const userArrayElement = (
    Users.map((user) => {
      return <tr key={user._id}>
        <td>{user.userName}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
      </tr>
    })
  )

  return (
    <>
      <h1>Users</h1>
      <table>
        <tbody>
          <tr>
            <th>
              <h2>User Name</h2>
            </th>
            <th>
              <h2>First Name</h2>
            </th>
            <th>
              <h2>Last Name</h2>
            </th>
            <th>
              <h2>Email</h2>
            </th>
          </tr>
          {userArrayElement}
        </tbody>
      </table>
    </>
  )

};