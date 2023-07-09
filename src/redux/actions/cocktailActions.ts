import { Dispatch } from 'redux';
import {
  SEARCH_COCKTAIL,
  FILTER_COCKTAIL,
  SET_LOADING,
  SET_ERROR,
} from './types';
import { Cocktail } from '../../types/types';

// Action creators
export const searchCocktails = (searchTerm: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: SET_LOADING });
    //Here is the API to search cocktails
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    if (data.drinks) {
      const cocktails: Cocktail[] = data.drinks.map((drink: any) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        description: drink.strInstructions,
        alchoholic: drink.strAlcoholic,
        glasstype: drink.strGlass,
        video: drink.strVideo,
        // We can add more properties if needed
      }));

      dispatch({ type: SEARCH_COCKTAIL, payload: cocktails });
    } else {
      dispatch({ type: SEARCH_COCKTAIL, payload: [] });
    }
  } catch (error) {
    dispatch({ type: SET_ERROR });
  }
};

export const filterCocktailsByLetter = (letter: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: SET_LOADING });
    // Here is the API for filter cocktails by letter
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await response.json();

    if (data.drinks) {
      const cocktails: Cocktail[] = data.drinks.map((drink: any) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        description: drink.strInstructions,
        alchoholic: drink.strAlcoholic,
        glasstype: drink.strGlass,
        video: drink.strVideo,
        // We can add more properties if needed
      }));

      dispatch({ type: FILTER_COCKTAIL, payload: cocktails });
    } else {
      dispatch({ type: FILTER_COCKTAIL, payload: [] });
    }
  } catch (error) {
    dispatch({ type: SET_ERROR});
  }
};
