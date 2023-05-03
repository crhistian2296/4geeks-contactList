const endpointsBase = {
  postUser: 'http://assets.breatheco.de/apis/fake/contact',
  deleteUser: 'http://assets.breatheco.de/apis/fake/contact',
  getUsers: 'http://assets.breatheco.de/apis/fake/contact/agenda/crgarcia',
  updateUser: 'http://assets.breatheco.de/apis/fake/contact',
};

// Acciones sincronas
const addSync = (payload) => ({
  type: 'add',
  payload,
});

const deleteSync = (payload) => ({
  type: 'delete',
  payload,
});

const updateSync = (payload) => ({
  type: 'update',
  payload,
});

// Opciones
const options = (payload) => ({
  method: 'POST',
  // mode: 'no-cors', // desactiva CORS

  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    // Accept: '*/*',
  },
  body: JSON.stringify(payload),
});

// Acciones asincronas
export const addUser = (payload = {}, dispatch) => {
  // dispatcha asincrono thunk
  return fetch(endpointsBase.postUser, options(payload))
    .then((response) => {
      console.log(response);
      return dispatch(addSync(payload));
    })
    .catch((error) => console.error(error))
    .finally(() => console.debug('promesa addUser terminada'));
};

export const deleteUser = (payload = {}) => {
  return (dispatch) => {
    fetch(`${endpointsBase.deleteUser}${payload.id}`, {
      method: 'DELETE',
      mode: 'no-cors',
    })
      .then((res) =>
        res.ok ? dispatch(deleteSync(payload)) : new Error('Respuesta fallida deleteUser')
      )
      .catch((error) => console.error(error))
      .finally(() => console.debug('promesa deleteUser terminada'));
  };
};

export const updateUser = (payload) => {
  return (dispatch) => {
    fetch(endpointsBase.updateUser, {
      method: 'PUT',
      mode: 'no-cors',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) =>
        res.ok ? dispatch(updateSync(payload)) : new Error('Respuesta fallida updateUser')
      )
      .catch((error) => console.error(error))
      .finally(() => console.debug('promesa updateUser terminada'));
  };
};
