import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Details({ removeContactHandler }) {
  const [user, setUser] = useState([]);
  const [price, setPrice] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const fetchUser = async () => {
    const response = await axios.get(`/api/v1/users/${params.id}`);
    return response.data;
  };

  const fetchPrice = async () => {
    const response = await axios.get(`/api/v1/users/insurance/${params.id}`);
    return response.data;
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      if (user) setUser(user);
    };
    const getPrice = async () => {
      const price = await fetchPrice();
      if (price) setPrice(price);
    };

    getUser();
    getPrice();
  }, []);

  const params = useParams();

  const deleteUser = e => {
    e.preventDefault();
    removeContactHandler(user._id);
    navigate('/');
  };

  const navigateHandler = e => {
    e.preventDefault();
    navigate(`/edit/${user._id} `);
  };

  const showPrice = e => {
    e.preventDefault();
    setData(price);
  };

  return (
    <>
      <table border="1" className="table-small">
        <caption className="captions">
          <h3>Details</h3>
        </caption>

        <tbody>
          <tr>
            <td className="bold">Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td className="bold">Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td className="bold">City</td>
            <td>{user.city}</td>
          </tr>
          <tr>
            <td className="bold">Birthdate</td>
            <td>{user.birthDates}</td>
          </tr>
          <tr>
            <td className="bold">Insurance price</td>
            <td>{data}</td>
          </tr>
        </tbody>
      </table>

      <button className="btn insurance" onClick={showPrice}>
        Calculate insurance price
      </button>
      <div className="edit-delete">
        <button
          className="btn-small edit btn-reverse"
          onClick={navigateHandler}
        >
          Edit
        </button>
        <button className="btn-small delete btn-reverse" onClick={deleteUser}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Details;
