import {ADD_SERVER} from '../../actions/server-actions/add-server';

const initialState = [
  {
    name: "State 1 "
  },
  {
    name: "State 2 "
  }
];
export const serversReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_SERVER':
      return [...state, action.peyload.server];

    default: {
      return state
    }
  }
}