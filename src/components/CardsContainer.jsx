import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardsContainer = () => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    fetch('https://assets.breatheco.de/apis/fake/contact/agenda')
      .then((resp) => resp.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className='row mt-4'>
      {contacts.length && contacts.map((value, index) => <Card key={index} name={value} />)}
      <Card />
    </div>
  );
};

export default CardsContainer;
