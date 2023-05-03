import React from 'react';
import { NavLink } from 'react-router-dom';
import CardsContainer from '../components/CardsContainer';

const Contacts = ({ children }) => {
  // const { dispatch } = useContext(AppContext);
  // const newContact = {
  //   address: '47568 33434 FL',
  //   agenda_slug: 'crgarcia',
  //   email: 'lisa@gmail.com',
  //   full_name: 'Lisa',
  //   phone: '4334445',
  // };

  // useEffect(() => {
  //   addUser(newContact, dispatch);
  // }, []);

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
