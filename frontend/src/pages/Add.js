import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [birthDates, setBirthdate] = useState('');
  const [surname, setSurname] = useState('');

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      city,
      birthDates,
      surname,
    };
    addUser(newUser);
    navigate('/');
  };

  return (
    <>
      <h3>Add new user</h3>
      <form className="form-group" onSubmit={onSubmit}>
        <div className="">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter first and lastname..."
          />
        </div>

        <div className="">
          <label htmlFor="text">Surname</label>
          <input
            type="text"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            placeholder="Enter first and lastname..."
          />
        </div>

        <div className="">
          <label htmlFor="e-mail">Email</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter e-mail..."
          />
        </div>
        <div className="">
          <label htmlFor="text">City</label>
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Enter City..."
          />
        </div>
        <div className="">
          <label htmlFor="text">Birthdate</label>
          <input
            type="text"
            value={birthDates}
            onChange={e => setBirthdate(e.target.value)}
            placeholder="Enter Birthdate..."
          />
        </div>

        <button className="btn">Add user</button>
      </form>
    </>
  );
}

export default Add;
