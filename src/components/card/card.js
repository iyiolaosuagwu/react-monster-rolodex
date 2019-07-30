import React from 'react';
import './card.css';

const card = ({ monster: { id, name, username, email }, handeleDelete }) => (
  <div className="container-card">
    <img src={`https://robohash.org/${id}?set=set1`} className="" alt={id} />
    <h1>{name}</h1>
    <p>{email}</p>
    <p>{username}</p>
    <button onClick={handeleDelete}>Delete</button>
  </div>
);



export default card;
