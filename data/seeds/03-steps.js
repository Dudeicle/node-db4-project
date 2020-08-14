exports.seed = function (knex) {
	return knex("steps").insert([
		{
			id: 1,
			step: 1,
			recipe_id: 1,
			instructions: "pour a glass of milk",
		},
		{
			id: 2,
			step: 2,
			recipe_id: 1,
			instructions: "add scoop of chocolate powder",
		},
		{
			id: 3,
			step: 3,
			recipe_id: 1,
			instructions: "mix with spoon",
		},
		{
			id: 4,
			step: 1,
			recipe_id: 2,
			instructions: "aquire a knife and plate",
		},
		{
			id: 5,
			step: 2,
			recipe_id: 2,
			instructions: "remove slices of bread from bag, toast, wait....",
		},
		{
			id: 6,
			step: 3,
			recipe_id: 2,
			instructions: "spread butter onto hot toast",
		},
	]);
};
