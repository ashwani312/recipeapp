import { useEffect, useState } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState('pasta');
    const [recipes, setRecipes] = useState([]);
    const [favLists, setFavLists] = useState(JSON.parse(localStorage.getItem("favLists")) || [])

    useEffect(() => {
        localStorage.setItem("favLists", JSON.stringify(favLists))
        getSearchedResult();
    }, [searchedQuery, favLists]);

 

    const getSearchedResult = async () => {
        let result = await getRecipes(searchedQuery);
        setRecipes(result.results);
    }

    const allfavLists = (recipe) => {
        const index = favLists.findIndex((item) => recipe.title === item.title);
        if (index === -1) {
            setFavLists([recipe, ...favLists]);
            localStorage.setItem("favLists", JSON.stringify(favLists))
        } else {
            return;
        }

    }
    return (
        <>
            <Search setSearchedQuery={setSearchedQuery} />
            <RecipeList recipes={recipes} searchedQuery={searchedQuery} favLists={favLists} allfavLists={allfavLists} />
        </>
    )
}

export default Recipes;