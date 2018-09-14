export const ADD_SERVER = 'ADD_SERVER';

export const addServer = (server) => {
  console.log(3333,server);
  return {
    type: ADD_SERVER,
    peyload: {
      server
    }
  }
}