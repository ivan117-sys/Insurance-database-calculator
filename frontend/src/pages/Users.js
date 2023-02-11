import React from 'react';
import { Link } from 'react-router-dom';

function Users({ users }) {
  return (
    <>
      {users.map(user => (
        <tr key={user._id}>
          <td>{user.name + ' ' + user.surname}</td>
          <td>{user.email}</td>
          <td>{user.city}</td>
          <td>{user.birthDates} </td>
          <td>
            <Link to={`/customer/${user._id}`}>
              <button className="btn-small reverse btn-reverse">Details</button>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Users;
