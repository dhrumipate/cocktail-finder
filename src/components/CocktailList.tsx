import React from 'react';
import CocktailItem from './CocktailItem';
import { Cocktail } from '../types/types';
import { Card } from 'semantic-ui-react'

interface CocktailListProps {
  cocktails: Cocktail[];
}

const CocktailList: React.FC<CocktailListProps> = ({ cocktails }) => {
  return (
    <Card.Group className="cocktail-list row  six stackable" itemsPerRow={6}>
      {cocktails.map((cocktaill) => (
        <CocktailItem key={cocktaill.id} cocktail={cocktaill} />
      ))}
    </Card.Group>
  );
};

export default CocktailList;
