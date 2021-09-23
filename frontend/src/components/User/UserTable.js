export default function UserTable({users, loadForm, deleteOne}) {
  let userArrayElement;
    userArrayElement = (
      users.map((user) => {
        return <tr key={user._id}>
          <td>{user.userName}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td><button onClick={() => loadForm(user._id)}>modify</button></td>
          <td><button onClick={() => deleteOne(user._id)}>delete</button></td>
        </tr>
      })
    )
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>
              <h3>User Name</h3>
            </th>
            <th>
              <h3>First Name</h3>
            </th>
            <th>
              <h3>Last Name</h3>
            </th>
            <th>
              <h3>Email</h3>
            </th>
            <th>
            </th>
            <th>
            </th>
          </tr>
          {userArrayElement}
        </tbody>
      </table>
    </>
  )
}