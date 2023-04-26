import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';

// const agendaPoint = 'https://assets.breatheco.de/apis/fake/contact/agenda/crgarcia';

const CardsContainer = () => {
  // contactos del contexto
  const contacts = useContext(AppContext);

  // Si no hay contactos
  if (!contacts.length) return <h1>Loading...</h1>;

  return (
    <div className='row mt-4'>
      {contacts.length &&
        contacts.map((value) => (
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
