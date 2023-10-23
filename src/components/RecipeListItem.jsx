

import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RecipeListItem = ({ recipe , allfavLists}) => {
    return (
        <Card>
            <img src={recipe.image} alt="thumbnail" style={{ height: 170 }} />
            <Card.Content>
                <Card.Header content={recipe.title} />
                <Card.Description>
                    <h4>{recipe.publisher}</h4>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button 
                    as={Link}
                    to={`/recipes/${recipe.id}`}
                    content="Details"
                    color="blue"
                    size="tiny"
                />
                <Button 
                    onClick={()=>  allfavLists(recipe)}
                    target="_blank"
                    content="Add to Fav"
                    color="red"
                    size="tiny"
                />
            </Card.Content>
        </Card>
    )
}

export default RecipeListItem;