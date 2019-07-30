import React from 'react';
import './card-list';
import Card from '../card/card';

const CardList = ({ monsters, handeleDelete }) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} handeleDelete={handeleDelete} />
    ))}
  </div>
);

export default CardList;
