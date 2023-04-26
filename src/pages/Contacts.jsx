import React from 'react';
import { NavLink } from 'react-router-dom';
import CardsContainer from '../components/CardsContainer';

const Contacts = ({ children }) => {
  return (
    <div className='mt-5'>
      <div className='row justify-content-end'>
        <div className='col-auto p-0'>
          <NavLink type='button' className='btn btn-success' to='/addContact'>
            Add new Contact
          </NavLink>
        </div>
      </div>
      <CardsContainer />
    </div>
  );
};

export default Contacts;
