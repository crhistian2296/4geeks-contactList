import { useState } from 'react';
import CardsContainer from './components/CardsContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <div className='mt-5'>
          <div className='row justify-content-end'>
            <div className='col-auto p-0'>
              <button type='button' className='btn btn-success'>
                Add new Contact
              </button>
            </div>
          </div>
          <CardsContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
