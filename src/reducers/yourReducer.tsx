import { CHANGE_NAME } from '../constants';

const initialState = {
  name: ''
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.data
      };
    default:
      return state;
  }
}
