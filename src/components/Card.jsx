import React from 'react';

const Card = ({ name }) => {
  return (
    <div className='card mb-3 w-100'>
      <div className='row g-0'>
        <div className='col-auto m-3 mx-5'>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            width='150px'
            height='150px'
            className='img-fluid rounded-5'
            alt='profile image'
          />
        </div>
        <div className='col-md-4 me-auto'>
          <div className='card-body'>
            <h4 className='card-title mt-1 mb-3'>{name}</h4>
            <p className='card-text text-secondary mb-2'>
              <span>
                <i className='fa fa-regular fa-building'></i> calle random
              </span>
            </p>
            <p className='card-text text-secondary mb-2'>
              <span>
                <i className='fa fa-solid fa-phone'></i> 12341234123
              </span>
            </p>
            <p className='card-text text-secondary mb-2'>
              <span>
                <i className='fa fa-regular fa-at'></i> random@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className='col-md-2 justify-self-start'>
          <div className='card-body mt-3'>
            <div className='d-flex gap-2'>
              <button type='button' className='btn btn-outline-secondary'>
                <i className='fa fa-solid fa-pencil'></i>
              </button>
              <button type='button' className='btn btn-outline-danger'>
                <i className='fa fa-solid fa-trash'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
