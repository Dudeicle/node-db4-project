const db = require("../data/db-config.js");

//// data bases ---> all_ingredients / recipe_ing / recipes / steps ////

// getRecipes
// list of recipes

// getRecipes/:id
// single recipe by id

// getRecipes/:id/shoppinglist (recipe_ing)
// the ingredients required for a specific recipe

// getRecipes/:id/instructions
// instructions for a specific recipe

module.exports = {
	getRecipes,
	getRecipesByID,
	getShoppingList,
	getIngrediants,
	getInstructions,
};

function getRecipes() {
	return db("recipes");
} // WORKING

function getRecipesByID(id) {
	return db("recipes").where({ id }).first();
} // WORKING

function getShoppingList(recipe_id) {
	return db("recipe_ing").where({ recipe_id });
} // WORKING

function getIngrediants() {
	return db("ingredients");
} // WORKING

function getInstructions(recipe_id) {
	return db("steps").where({ recipe_id });
} // WORKING
