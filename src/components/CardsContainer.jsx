import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';

const CardsContainer = () => {
  // contactos del contexto
  const { contactsState } = useContext(AppContext);

  // Si no hay contactos
  if (!contactsState.length) return <h1>Loading...</h1>;

  return (
    <div className='row mt-4'>
      {contactsState.length &&
        contactsState.map((value) => (
          <Card
            key={value.id}
            name={value.full_name}
            address={value.address}
            phone={value.phone}
            mail={value.email}
          />
        ))}
      <Card />
    </div>
  );
};

export default CardsContainer;
