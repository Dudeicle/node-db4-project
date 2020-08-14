exports.seed = function (knex, Promise) {
	return knex("recipes").insert([
		{
			id: 1,
			name: "Chocolate Milk",
		},
		{
			id: 2,
			name: "Buttered Toast",
		},
	]);
};
