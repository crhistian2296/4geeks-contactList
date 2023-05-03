import { useLayoutEffect, useReducer, useState } from 'react';
import { AppContext } from './context/AppContext';
import { contactReducer } from './reducer/ContactReducer';
import AppRouter from './router/Approuter';

const agendaPoint = 'http://assets.breatheco.de/apis/fake/contact/agenda/crgarcia';

function App() {
  const [contacts, setContacts] = useState({});
  let [contactsState, dispatch] = useReducer(contactReducer, {});

  // Peticion de contactos
  useLayoutEffect(() => {
    fetch(agendaPoint)
      .then((resp) => resp.json())
      .then((data) => {
        setContacts(data);
        dispatch({ type: 'sync', payload: data });
      })
      .catch((err) => console.log(err));
  }, []);

  useLayoutEffect(() => {
    contactsState = contacts;
  }, [contacts]);

  return (
    <AppContext.Provider value={{ contacts, contactsState, dispatch }}>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
