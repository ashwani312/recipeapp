import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Grid, Button, Image, Header, Segment } from 'semantic-ui-react';
import { getRecipe } from "../services/api";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        const getData = async () => {
            let result = await getRecipe(recipeId)

            setRecipe(result)

        }
        getData();
    }, [])

    return (
 
            <Grid container stackable columns={2} className="detailsPageContent">
                <Grid.Column>
                    <Button
                        as={Link}
                        to={'/recipes'}
                        content="Back to recipe List"
                        color="yellow"
                        style={{ marginBottom: 40 }}
                    />
                    <Image src={recipe.image} />
                    <Header size="large" content="summary
" />
                    <h4>{recipe.summary

                    }</h4>
                </Grid.Column>
                <Grid.Column>
                    <Header size="medium">{recipe?.title}</Header>
                    <p>author : {recipe?.author}</p>
                    <Button
                        as={"a"}
                        href={"https://" + recipe?.sourceName}
                        target="_blank"
                        content="Publisher Webpage"
                        color="blue"
                    />
                    <Button
                        as={"a"}
                        href={recipe?.sourceUrl}
                        target="_blank"
                        content="Recipe URL"
                        color="green"
                    />
                    <Header size="large" content="Ingredients" />
                    <Segment.Group>
                        {
                            recipe.extendedIngredients && recipe?.extendedIngredients?.map(data => (
                                <Segment>
                                    <h5>{data?.name}</h5>
                                </Segment>
                            ))
                        }
                    </Segment.Group>
                    <Header size="large" content="Steps By step Guidence" />
                    <Segment.Group>
                        {
                            recipe.analyzedInstructions && recipe?.analyzedInstructions[0]?.steps?.map((data, index) => (
                                <Segment style={{ display: "flex" }}>
                                    <span>{index + 1}.</span> <h5>{data.step}</h5>
                                </Segment>
                            ))
                        }
                    </Segment.Group>
                </Grid.Column>
            </Grid>
    )
}

export default RecipeDetails;