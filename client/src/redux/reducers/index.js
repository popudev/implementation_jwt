import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
});

export default rootReducer;
