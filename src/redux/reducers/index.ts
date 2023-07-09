import { combineReducers } from 'redux';
import cocktailReducer from './cocktailReducer';

const rootReducer = combineReducers({
  cocktail: cocktailReducer,
});

export default rootReducer;
