const express = require("express");

const Recipe = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
	Recipe.getRecipes()
		.then((recipes) => {
			res.json(recipes);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get recipes" });
		});
}); // WORKING

router.get("/:id", (req, res) => {
	const { id } = req.params;

	Recipe.getRecipesByID(id)
		.then((recipe) => {
			if (recipe) {
				res.json(recipe);
			} else {
				res
					.status(404)
					.json({ message: "Could not find recipe with given id." });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get schemes" });
		});
}); // WORKING

router.get("/:id/shoppinglist", (req, res) => {
	const { id } = req.params;

	Recipe.getShoppingList(id)
		.then((shoppinglist) => {
			if (shoppinglist) {
				res.json(shoppinglist);
			} else {
				res
					.status(404)
					.json({ message: "Could not find steps for given stuff" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get steps" });
		});
}); // WORKING

router.get("/ingrediants", (req, res) => {
	Recipe.getIngrediants()
		.then((ingrediants) => {
			res.json(ingrediants);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get steps" });
		});
});

router.get("/:id/instructions", (req, res) => {
	const { id } = req.params;

	Recipe.getInstructions(id)
		.then((instructions) => {
			if (instructions) {
				res.json(instructions);
			} else {
				res
					.status(404)
					.json({ message: "Could not find steps for given stuff" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get steps" });
		});
}); // WORKING

module.exports = router;
