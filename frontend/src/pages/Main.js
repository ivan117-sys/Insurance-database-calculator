import React from 'react';
import { Link } from 'react-router-dom';
import Users from './Users';

function Main({ users }) {
  return (
    <div>
      <table border="1" className="table">
        <caption className="captions">
          <h3>Users information</h3>
        </caption>
        <thead>
          <tr className="col">
            <th>Name and lastname</th>

            <th>E-mail</th>
            <th>City</th>
            <th>Birthdate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Users users={users} />
        </tbody>
      </table>
      <Link to="/customer/add">
        <button className="btn">Add new user</button>
      </Link>
    </div>
  );
}

export default Main;
