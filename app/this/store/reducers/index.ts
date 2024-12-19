import { combineReducers } from 'redux';
import languageReducer from './language';
import authReducer from './auth';
import sidebarReducer from './sidebar';

const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer,
  sidebar: sidebarReducer,
  
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
