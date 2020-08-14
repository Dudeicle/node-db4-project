exports.seed = function (knex) {
	return knex("recipe_ing").insert([
		{
			id: 1,
			recipe_id: 1,
			ingredient_id: 1,
			quantity: 1,
			measurement: "glass",
		},
		{
			id: 2,
			recipe_id: 1,
			ingredient_id: 2,
			quantity: 2,
			measurement: "scoop",
		},
		{
			id: 3,
			recipe_id: 2,
			ingredient_id: 3,
			quantity: 2,
			measurement: "slice",
		},
		{
			id: 4,
			recipe_id: 2,
			ingredient_id: 4,
			quantity: 2,
			measurement: "tablespoon",
		},
	]);
};
