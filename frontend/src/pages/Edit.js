import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit({ updateUserHandler }) {
  const [user, setUser] = useState([]);
  const [updatedName, setName] = useState('');
  const [updatedEmail, setEmail] = useState('');
  const [updatedCity, setCity] = useState('');
  const [updatedBirthDates, setBirthDates] = useState('');
  const [updatedSurname, setSurname] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  const fetchUser = async () => {
    const response = await axios.get(`/api/v1/users/${params.id}`);
    return response.data;
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      if (user) setUser(user);
    };

    getUser();
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    let name, email, city, birthDates, surname;
    if (updatedName.length === 0) {
      name = user.name;
    } else {
      name = updatedName;
    }

    if (updatedEmail.length === 0) {
      email = user.email;
    } else {
      email = updatedEmail;
    }

    if (updatedSurname.length === 0) {
      surname = user.surname;
    } else {
      surname = updatedSurname;
    }

    if (updatedCity.length === 0) {
      city = user.city;
    } else {
      city = updatedCity;
    }

    if (updatedBirthDates.length === 0) {
      birthDates = user.birthDates;
    } else {
      birthDates = updatedBirthDates;
    }

    const newUser = {
      name,
      email,
      city,
      birthDates,
      surname,
      _id: params.id,
    };
    updateUserHandler(newUser);
    navigate('/');
  };

  return (
    <>
      <h3>Edit user</h3>
      <form className="form-group" onSubmit={onSubmit}>
        <div className="">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            value={updatedName}
            onChange={e => setName(e.target.value)}
            placeholder="Enter Name..."
          />
        </div>
        <div className="">
          <label htmlFor="text">Surname</label>
          <input
            type="text"
            value={updatedSurname}
            onChange={e => setSurname(e.target.value)}
            placeholder="Enter lastname..."
          />
        </div>
        <div className="">
          <label htmlFor="e-mail">Email</label>
          <input
            type="text"
            value={updatedEmail}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter e-mail..."
          />
        </div>
        <div className="">
          <label htmlFor="text">City</label>
          <input
            type="text"
            value={updatedCity}
            onChange={e => setCity(e.target.value)}
            placeholder="Enter City..."
          />
        </div>
        <div className="">
          <label htmlFor="text">Birthdate</label>
          <input
            type="text"
            value={updatedBirthDates}
            onChange={e => setBirthDates(e.target.value)}
            placeholder="Enter Birthdate..."
          />
        </div>

        <button className="btn">Edit user</button>
      </form>
    </>
  );
}

export default Edit;
