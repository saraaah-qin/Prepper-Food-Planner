import React, { useState, useEffect } from "react";
import "./MyRecipes.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Recipe from "../components/Recipe.js";
import RecipeViewing from "../components/RecipeViewing.js";
import { MdBookmark, MdDehaze } from "react-icons/md";

function MyRecipes() {
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [uploadedRecipes, setUploadedRecipes] = useState([]);
    const [viewingUploadedRecipes, setViewingUploadedRecipes] = useState(true);
    const [activeRecipe, setActiveRecipe] = useState("");
    
    useEffect(() => {    
        setSavedRecipes([{
        "recipeID": 1,
        "image" : "https://res.cloudinary.com/dgabkajhe/image/upload/v1709337647/Screenshot_425_asbwjt.png",
        "title" : "Buttermilk Pancakes",
        "measuremnents" : "1 cup, 1 tsp, 1 tsp, 1, 1 1/8 cup, 2 tbsp, null",
        "ingredients" : "flour, salt, baking soda, large egg, buttermilk, butter(melted), Syrup(Optional)",
        "description" : "Yummy Buttermilk pancakes",
        "steps" : "1. Preheat and grease skillet 2. Mix flour, salt, baking soda. Then add egg, buttermilk, and butter. Batter should look thick, spongy, and puffy.  3. Drop 1/3 cup of batter, spread lightly, cook until lightly browned on each side, 1-2 minutes per side.",
        "duration" : "30",  
        "calories" : "210",
        "author" : "Harry Potter"
    },
    {
        "recipeID": 2,
        "image" : "https://res.cloudinary.com/dgabkajhe/image/upload/v1709337647/Screenshot_425_asbwjt.png",
        "title" : "Buttermilk Pancakes",
        "measuremnents" : "2 cup, 1 tsp, 1 tsp, 1, 1 1/8 cup, 2 tbsp, null",
        "ingredients" : "flour, salt, baking soda, large egg, buttermilk, butter(melted), Syrup(Optional)",
        "description" : "Yummy Buttermilk pancakes",
        "steps" : "1. Preheat and grease skillet 2. Mix flour, salt, baking soda. Then add egg, buttermilk, and butter. Batter should look thick, spongy, and puffy.  3. Drop 1/3 cup of batter, spread lightly, cook until lightly browned on each side, 1-2 minutes per side.",
        "duration" : "30",  
        "calories" : "210",
        "author" : "Harry Potter"
    } ,
    {
        "recipeID": 3,
        "image" : "https://res.cloudinary.com/dgabkajhe/image/upload/v1709337647/Screenshot_425_asbwjt.png",
        "title" : "Buttermilk Pancakes",
        "measuremnents" : "3 cup, 1 tsp, 1 tsp, 1, 1 1/8 cup, 2 tbsp, null",
        "ingredients" : "flour, salt, baking soda, large egg, buttermilk, butter(melted), Syrup(Optional)",
        "description" : "Yummy Buttermilk pancakes",
        "steps" : "1. Preheat and grease skillet 2. Mix flour, salt, baking soda. Then add egg, buttermilk, and butter. Batter should look thick, spongy, and puffy.  3. Drop 1/3 cup of batter, spread lightly, cook until lightly browned on each side, 1-2 minutes per side.",
        "duration" : "30",  
        "calories" : "210",
        "author" : "Harry Potter"
    } ,
    {
        "recipeID": 4,
        "image" : "https://res.cloudinary.com/dgabkajhe/image/upload/v1709337647/Screenshot_425_asbwjt.png",
        "title" : "Buttermilk Pancakes",
        "measuremnents" : "4 cup, 1 tsp, 1 tsp, 1, 1 1/8 cup, 2 tbsp, null",
        "ingredients" : "flour, salt, baking soda, large egg, buttermilk, butter(melted), Syrup(Optional)",
        "description" : "Yummy Buttermilk pancakes",
        "steps" : "1. Preheat and grease skillet 2. Mix flour, salt, baking soda. Then add egg, buttermilk, and butter. Batter should look thick, spongy, and puffy.  3. Drop 1/3 cup of batter, spread lightly, cook until lightly browned on each side, 1-2 minutes per side.",
        "duration" : "30",  
        "calories" : "210",
        "author" : "Chris Tanev"
    } 
    ])}, []);


    useEffect(() => {    
        setUploadedRecipes([{
            "recipeID": 1,
            "image" : "https://res.cloudinary.com/dgabkajhe/image/upload/v1709337647/Screenshot_425_asbwjt.png",
            "title" : "Buttermilk Pancake",
            "measuremnents" : "1 cup, 1 tsp, 1 tsp, 1, 1 1/8 cup, 2 tbsp, sup",
            "ingredients" : "flour, salt, baking soda, large egg, buttermilk, butter(melted), Syrup(Optional)",
            "description" : "Yummy Buttermilk pancakes",
            "steps" : "1. Preheat and grease skillet 2. Mix flour, salt, baking soda. Then add egg, buttermilk, and butter. Batter should look thick, spongy, and puffy.  3. Drop 1/3 cup of batter, spread lightly, cook until lightly browned on each side, 1-2 minutes per side.",
            "duration" : "30",  
            "calories" : "210",
            "author" : "Harry Potter"
    }
    ])}, []);


    const chanegRecipeView = () => {
        setViewingUploadedRecipes(!viewingUploadedRecipes);
    }


    const chanegRecipe = (recipeLookingAt) => {
        setActiveRecipe(<RecipeViewing aRecipe={recipeLookingAt} />);
    }


    return (
        <div className="meal-planner-container">
                <div className="recipes-container">
                    <div className="menu">
                        <button className="recipe-list-show-hide menu-buttons"><MdDehaze className="icon-size menu-buttons"/></button>
                        <div className="saved-uploaded-selection menu-buttons"><MdBookmark className="icon-size menu-buttons"/>{(viewingUploadedRecipes) ? "Saved Recipes" : "Uploaded Recipes"}<button className="swap-recipe-view menu-buttons" onClick={chanegRecipeView}><ArrowDropDownIcon className="menu-buttons menu-buttons" /></button></div>
                    </div>
                    {(viewingUploadedRecipes) ? savedRecipes.map(theRecipes => (<Recipe aRecipe={theRecipes} viewNewRecipe={chanegRecipe} key={theRecipes.recipeID}/>)) : uploadedRecipes.map(theRecipes => (<Recipe aRecipe={theRecipes} viewNewRecipe={chanegRecipe} key={theRecipes.recipeID}/>))}
                </div>
                <div className="recipe-viewing-container">
                    {activeRecipe}
                </div>
        </div>
    );
}

export default MyRecipes;
