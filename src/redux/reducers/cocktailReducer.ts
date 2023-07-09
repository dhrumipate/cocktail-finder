import {
  SEARCH_COCKTAIL,
  FILTER_COCKTAIL,
  SET_LOADING,
  SET_ERROR,
} from '../actions/types';
import { Cocktail } from '../../types/types';

interface CocktailState {
  cocktails: Cocktail[];
  loading: boolean;
  error: string | null;
}

const initialState: CocktailState = {
  cocktails: [],
  loading: false,
  error: null,
};

const cocktailReducer = (
  state = initialState,
  action: { type: string; payload?: any }
): CocktailState => {
  switch (action.type) {
    case SEARCH_COCKTAIL:
    case FILTER_COCKTAIL:
      return {
        ...state,
        cocktails: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cocktailReducer;
