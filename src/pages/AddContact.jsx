import React from 'react';
import { NavLink } from 'react-router-dom';

const AddContact = () => {
  return (
    <div className='mt-5'>
      <div className='row justify-content-center'>
        <div className='col-auto p-0'>
          <h1>Add new Contact</h1>
        </div>
      </div>
      {/* inicio formulario */}
      <form onSubmit={() => console.log('Submited')}>
        <div className='mb-3'>
          <label htmlFor='InputName' className='form-label'>
            Full Name
          </label>
          <input
            required
            type='text'
            className='form-control'
            id='InputName'
            placeholder='Full name'
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
            placeholder='Email'
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
            placeholder='Phone numbre'
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
            placeholder='Address'
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
