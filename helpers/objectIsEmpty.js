export const objectIsEmpty = (obj) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
