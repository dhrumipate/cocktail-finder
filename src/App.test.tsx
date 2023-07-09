// import React from 'react';

import { render, fireEvent, waitFor, getByTestId, getAllByTestId } from '@testing-library/react';
import { RenderResult } from '@testing-library/react';
import App from './App';

describe('App', () => {
  let renderResult: RenderResult;

  // beforeEach(() => {
  //   renderResult = render(<App />);
  // });

  test('renders the initial page with default values', () => {
    const letterSelection = getByTestId(renderResult.container, 'letter-selection') as HTMLInputElement;
    expect(letterSelection.value).toBe('A');

    const searchField = getByTestId(renderResult.container, 'search-field') as HTMLInputElement;
    expect(searchField.value).toBe('');
  });

  test('fetches cocktails starting with letter A', async () => {
    await waitFor(() => getByTestId(renderResult.container, 'cocktail-list'));

    const cocktails = getAllByTestId(renderResult.container, 'cocktail-item');
    expect(cocktails.length).toBeGreaterThan(0);
    cocktails.forEach((cocktail) => {
      expect(cocktail.textContent).toMatch(/^A/i);
    });
  });

  test('updates cocktails when changing letter selection', async () => {
    const letterSelection = getByTestId(renderResult.container, 'letter-selection') as HTMLSelectElement;

    fireEvent.change(letterSelection, { target: { value: 'B' } });

    await waitFor(() => getByTestId(renderResult.container, 'cocktail-list'));

    const cocktails = getAllByTestId(renderResult.container, 'cocktail-item');
    expect(cocktails.length).toBeGreaterThan(0);
    cocktails.forEach((cocktail) => {
      expect(cocktail.textContent).toMatch(/^B/i);
    });
  });

  // test('performs search when typing at least 3 characters', async () => {
  //   const searchField = getByTestId(renderResult.container, 'search-field') as HTMLInputElement;

  //   fireEvent.change(searchField, { target: { value: 'margarita' } });

  //   await waitFor(() => getByTestId(renderResult.container, 'cocktail-list'));

  //   const cocktails = getAllByTestId(renderResult.container, 'cocktail-item');
  //   expect(cocktails.length).toBeGreaterThan(0);
  //   cocktails.forEach((cocktail) => {
  //     expect(cocktail.textContent.toLowerCase()).toContain('margarita');
  //   });
  // });
});
