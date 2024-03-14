import React, { useEffect, useState } from "react";
import "./RecipeViewing.css";
import "./RecipeEditing.css";
import AddIngredient from "../components/AddIngredient.js";
import { MdAccountBox, MdHourglassTop, MdModeEdit } from "react-icons/md";
import { FaBicycle } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";

function RecipeEditing({ aRecipe, updateRecipe }) {    
    const [amounts, setAmounts] = useState([]);
    const [recipeIngredients, setIngredients] = useState([]);
    const [recipeTitle, setRecipeTitle] = useState(aRecipe?.title);
    const [cookTime, setCookTime] = useState(aRecipe?.duration);
    const [recipeCalories, setRecipeCalories] = useState(aRecipe?.calories);
    const [recipeSteps, setRecipeSteps] = useState(aRecipe?.steps);
    const [showIngredientPopup, setShowIngredientPopup] = useState(false);

    useEffect(() => {
        const recipeIngredients = aRecipe.ingredients.split(",");
        const recipeMeasuremnents = aRecipe.measuremnents.split(",");
        setAmounts(recipeMeasuremnents)
        setIngredients(recipeIngredients)
    }, [aRecipe])

    
    const handleTitleChange = (e) => {
        setRecipeTitle(e.target.value);
    }


    const handleCookTimeChange = (e) => {
        setCookTime(e.target.value);
    }


    const handleCaloriesChange = (e) => {
        setRecipeCalories(e.target.value);
    }


    const handleInstructionsChange = (e) => {
        setRecipeSteps(e.target.value);
    }


    const showHidePopup = () => {
        setShowIngredientPopup(!showIngredientPopup);
    }


    const saveIngredientsAdded = (newAmounts, addedIngredients) => {
        var removalIndex = addedIngredients.indexOf("");
        for (let i = 0; i < addedIngredients.length && removalIndex !== -1; i++) { 
            if((newAmounts[removalIndex] === "" || newAmounts[removalIndex] === "null") && addedIngredients[removalIndex] === ""){
                newAmounts.splice(removalIndex, 1);
                addedIngredients.splice(removalIndex, 1);
            }
            removalIndex = newAmounts.indexOf("", removalIndex);
        }
        
        if(!(addedIngredients.includes(""))){
            setAmounts(newAmounts);
            setIngredients(addedIngredients);
            var replaceIndex = newAmounts.indexOf("");
            for (let i = 0; i < newAmounts.length && replaceIndex !== -1; i++) {
                newAmounts[replaceIndex] = "null";
                replaceIndex = newAmounts.indexOf("", replaceIndex);
            }
            var stepsAsString = newAmounts.join(",");
            var instructionsAsString = addedIngredients.join(",");
        }
        else{
            window.alert("You have entered an amount for a blank ingredient. Please either remove the amount or enter an ingredient.");
        }
    }


    return (
        <div className="recipe-grid">
            <div>
                {showIngredientPopup && <AddIngredient hidePopup={showHidePopup} ingredients={recipeIngredients} amounts={amounts} saveIngredients={saveIngredientsAdded}/>}
                <div className="align-icons-text"><input className="recipe-title-styling" value={recipeTitle} onChange={handleTitleChange}></input><button className="checkmark-button" onClick={() => updateRecipe(amounts, recipeIngredients, recipeTitle, cookTime, recipeCalories, recipeSteps, aRecipe.recipeID)}><ImCheckmark className="checkmark-icon-style"/></button></div>
                <div className="align-icons-text"><MdAccountBox /> Author: {aRecipe?.author}</div>
                <div className="cooktime-calories-container">
                    <div className="align-icons-text"><MdHourglassTop className="icon-background"/><input className="duration-cooktime-input" value={cookTime} onChange={handleCookTimeChange}></input>Minutes</div>
                    <div className="align-icons-text"><FaBicycle className="icon-background"/><input className="duration-cooktime-input" value={recipeCalories} onChange={handleCaloriesChange}></input> Calories</div>
                </div>
            </div>
            <label>
                <img className="recipe-image" src={aRecipe?.image} />
                <input className="hide-element" type="file" name="myfile" />
            </label>
            <textarea placeholder="Write your recipe here" className="recipe-instructions-container recipe-instructions-styling" value={recipeSteps} onChange={handleInstructionsChange}></textarea>
            <div className="ingredients-container" >
                <div className="ingredients-header">Ingredients<button className="edit-ingredients-button" onClick={showHidePopup}><MdModeEdit className="edit-ingredients-icon"/></button></div>
                <div className="ingredients-list">{recipeIngredients.map((ingredient, index) => (<div key={index}>{("null" !== amounts[index]) ? amounts[index] : ""} {ingredient}</div>))}</div>
            </div>
        </div>
    );
}

export default RecipeEditing;