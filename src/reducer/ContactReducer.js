export const contactReducer = (state = [], action = {}) => {
  switch (action?.type) {
    case 'sync':
      return action?.payload;
    case 'add':
      return [...state, action?.payload];
    case 'delete':
      return state.filter((user) => user.id != action?.payload?.id);
    case 'update':
      return state.map((user) => (user.id == action?.payload?.id ? action?.payload : user));
    default:
      return state;
  }
};
