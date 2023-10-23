import React, { useState } from 'react'
import { Container, Header, Grid, Card, Button } from "semantic-ui-react";
import RecipeListItem from '../components/RecipeListItem';
import { Link } from 'react-router-dom';
const FaviouriteLists = () => {
  const [favList, setFavLists] = useState(JSON.parse(localStorage.getItem("favLists")) || []);

  const handleRemove = (recipe) => {
       const filterFav = favList.filter((item,index)=> recipe.title !== item.title)
       setFavLists(filterFav);
       localStorage.setItem("favLists", JSON.stringify(filterFav))
  }

  return (
    <>
      <h1 style={{marginTop : "12vw", marginBottom : "3vw"}}></h1>
      <Container>
        <Header
          size="huge"
          content="YOUR FAVIOURITE LISTS"
          textAlign='center'
          
        />
        <Grid columns={4} doubling>
          {
            favList?.map((recipe, index) => (
              <Grid.Column key={index}>
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

                      onClick={()=>handleRemove(recipe)}
                      content="Remove"
                      color="red"
                      size="tiny"
                    />
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default FaviouriteLists