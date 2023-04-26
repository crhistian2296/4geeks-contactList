const endpointsBase = {
  postUser: 'https://assets.breatheco.de/apis/fake/contact',
  deleteUser: 'https://assets.breatheco.de/apis/fake/contact',
  getUsers: 'https://assets.breatheco.de/apis/fake/contact/agenda/crgarcia',
  updateUser: 'https://assets.breatheco.de/apis/fake/contact',
};

// Acciones sincronas
const send = (payload) => ({
  type: 'send',
  payload,
});

// Acciones asincronas

export const addUser = (payload = {}) => {
  // dispatcha asincrono thunk
  return (dispatch) => {
    fetch(endpointsBase.postUser, {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => (res.ok ? dispatch(send(payload)) : new Error('Respuesta fallida')))
      .catch((error) => console.error(error))
      .finally(() => console.debug('promesa addUser terminada'));
  };
};
