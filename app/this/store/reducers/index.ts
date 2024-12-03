import { combineReducers } from 'redux';
import languageReducer from './language';
import authReducer from './auth';

const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
