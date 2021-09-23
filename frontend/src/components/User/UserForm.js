import { apiUpdate } from "../../util/api";

export default function UserForm({currentUser, setCurrentUser, userId}) {

  return (
    <form onSubmit={(e) => { 
      e.preventDefault();
      apiUpdate(`users/${userId}`, currentUser);
      }
    }>
      <h3>User Name</h3>
      <input 
        type="Text"
        id="username"
        onChange={(e) => setCurrentUser({...currentUser, userName: e.target.value})}
      ></input>
      <h3>First Name</h3>
      <input
        type="Text"
        id="firstname"
        onChange={(e) => setCurrentUser({...currentUser, firstName: e.target.value})}
      ></input>
      <h3>Last Name</h3>
      <input
        type="Text"
        id="lastname"
        onChange={(e) => setCurrentUser({...currentUser, lastName: e.target.value})}
      ></input>
      <h3>Email Name</h3>
      <input
        type="Text"
        id="email"
        onChange={(e) => setCurrentUser({...currentUser, email: e.target.value})}
      ></input>
      <div>
        <input type="submit"></input>
      </div>
    </form>
  )
}