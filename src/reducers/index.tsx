import { combineReducers } from 'redux';
import yourReducer from './yourReducer';
import { connectRouter } from 'connected-react-router';

export default (history: any) =>
  combineReducers({
    yourReducer,
    router: connectRouter(history)
  });
