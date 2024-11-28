import { combineReducers } from 'redux';
import languageReducer from './language';

const rootReducer = combineReducers({
  language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
