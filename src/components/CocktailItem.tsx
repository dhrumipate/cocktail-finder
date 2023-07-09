import React from 'react';
import { Cocktail } from '../types/types';
import  { Card, Image } from 'semantic-ui-react';


interface CocktailItemProps {
  cocktail: Cocktail;
}

const CocktailItem: React.FC<CocktailItemProps> = ({ cocktail }) => {
  return (
    <Card>
      <Image src={cocktail.image ? cocktail.image : ''} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{cocktail.name ? cocktail.name : ''}</Card.Header>
        <Card.Meta>
        <span className='glass-type'>{cocktail.glasstype ? cocktail.glasstype : ''}</span>
      </Card.Meta>
        <Card.Description>{cocktail.description ? cocktail.description : ''}</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a href="#" className='video-link'>
      {cocktail.video ? cocktail.video : "Watch video instructions"}
      </a>
    </Card.Content>
  
    </Card>
  );
};

export default CocktailItem;
