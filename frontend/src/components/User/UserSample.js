import { apiCreate } from '../../util/api';

export default function UserSample() {
  // Sample Data
  const sampleUser = {
    userName: 'Bobd',
    firstName: 'Rob',
    lastName: 'Hole',
    email:'bobyd@gmail.com'
  }

  const createUser = async (userData) => {
    await apiCreate('users', userData);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      createUser(sampleUser);
      }
    }>
      <h3>Sample User</h3>
        <input type="submit" value="Create">
        </input>
    </form>
  )
}