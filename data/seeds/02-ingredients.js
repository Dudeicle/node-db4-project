exports.seed = function (knex, Promise) {
	return knex("all_ingredients").insert([
		{
			id: "1",
			name: "milk",
		},
		{
			id: "2",
			name: "chocolate powder",
		},
		{
			id: "3",
			name: "bread",
		},
		{
			id: "4",
			name: "butter",
		},
	]);
};
