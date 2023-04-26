import { useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';
import AppRouter from './router/AppRouter';

const agendaPoint = 'https://assets.breatheco.de/apis/fake/contact/agenda/crgarcia';

function App() {
  const [contacts, setContacts] = useState({});

  // Peticion de contactos
  useEffect(() => {
    fetch(agendaPoint)
      .then((resp) => resp.json())
      .then((data) => setContacts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <AppContext.Provider value={contacts}>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
