import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddContact from '../pages/AddContact';
import Contacts from '../pages/Contacts';
const AppRouter = ({ children }) => {
  // *react router v6 convention
  return (
    <div className='App'>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/addContact' element={<AddContact />} />
            <Route path='/' element={<Contacts />} />
            {/* ruta no encontradas vuelven a la raiz */}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default AppRouter;
