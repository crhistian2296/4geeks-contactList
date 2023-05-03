import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { objectIsEmpty } from '../../helpers/objectIsEmpty';
import { addUser } from '../actions/actions';
import { AppContext } from '../context/AppContext';
import useForm from '../hooks/useForm';

const AddContact = () => {
  const { formValues, handleInputChange, reset } = useForm();
  const { dispatch } = useContext(AppContext);
  const newContact = { ...formValues, agenda_slug: 'crgarcia' };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (objectIsEmpty(formValues)) return console.error('Objeto vacio');
    console.log(newContact);
    addUser(newContact, dispatch);
    // reset();
  };
  return (
    <div className='mt-5'>
      <div className='row justify-content-center'>
        <div className='col-auto p-0'>
          <h1>Add new Contact</h1>
        </div>
      </div>
      {/* inicio formulario */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='InputName' className='form-label'>
            Full Name
          </label>
          <input
            required
            type='text'
            className='form-control'
            id='InputName'
            name='full_name'
            placeholder='Full name'
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='InputEmail1' className='form-label'>
            Email address
          </label>
          <input
            required
            type='email'
            className='form-control'
            id='InputEmail1'
            name='email'
            placeholder='Email'
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='InputPhone' className='form-label'>
            Phone
          </label>
          <input
            required
            type='tel'
            className='form-control'
            id='InputPhone'
            name='phone'
            placeholder='Phone numbre'
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='InputAddress' className='form-label'>
            Address
          </label>
          <input
            required
            type='text'
            className='form-control'
            id='InputAddress'
            name='address'
            placeholder='Address'
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Save
        </button>
      </form>
      <NavLink to='/'>or get back to contacs</NavLink>
    </div>
  );
};

export default AddContact;
