import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import Details from './pages/Details';
import Main from './pages/Main';
import Edit from './pages/Edit';
import Header from './components/Header';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [createUsers, setCreateUsers] = useState([]);

  // GET USERS
  const getUsers = async () => {
    const response = await axios.get('/api/v1/users');
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await getUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);

  // Create Users

  const addUserHandler = async user => {
    console.log(user);
    const request = {
      ...user,
    };

    const response = await axios.post('/api/v1/users', request);
    setCreateUsers([...users, response.data]);
  };

  // Delete users

  const removeContactHandler = async _id => {
    await axios.delete(`/api/v1/users/${_id}`);
    const newUserList = users.filter(user => {
      return user._id !== _id;
    });
    setUsers(newUserList);
  };

  // Update users

  const updateUserHandler = async user => {
    const response = await axios.patch(`/api/v1/users/${user._id}`, user);

    const { _id, updatedName, email, surname, city, birthDates } =
      response.data;
    setUsers(
      users.map(user => {
        return user._id === _id ? { ...response.data } : user;
      })
    );
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main users={users} />} />
          <Route
            path="/customer/:id"
            element={
              <Details
                removeContactHandler={removeContactHandler}
                users={users}
              />
            }
          />
          <Route
            path="/customer/add"
            element={<Add addUser={addUserHandler} />}
          />
          <Route
            path="/edit/:id"
            element={<Edit updateUserHandler={updateUserHandler} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
