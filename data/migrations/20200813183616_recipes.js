exports.up = function (knex) {
	return (
		knex.schema
			// THIS IS THE RECIPES TABLE
			.createTable("recipes", (tbl) => {
				tbl.increments("id");

				tbl.string("name").notNullable().unique().index();
			})
			// THIS IS THE ALL_INGREDIENTS TABLE
			.createTable("all_ingredients", (tbl) => {
				tbl.increments("id");

				tbl.string("name").notNullable().unique();
			})
			// THIS IS THE STEPS TABLE
			.createTable("steps", (tbl) => {
				tbl.increments("id");

				tbl.integer("step").notNullable();

				tbl
					.integer("recipe_id")
					.unsigned()
					.notNullable()
					.references("id")
					.inTable("recipes");

				tbl.string("instructions").notNullable();
			})
			// THIS IS THE RECIPE_INGREDIENTS TABLE
			.createTable("recipe_ing", (tbl) => {
				tbl.increments("id");

				tbl
					.integer("recipe_id")
					.unsigned()
					.notNullable()
					.references("id")
					.inTable("recipes")
					.onDelete("RESTRICT")
					.onUpdate("CASCADE");
				tbl
					.integer("ingredient_id")
					.unsigned()
					.notNullable()
					.references("id")
					.inTable("all_ingredients")
					.onDelete("RESTRICT")
					.onUpdate("CASCADE");

				tbl.integer("quantity").notNullable().unsigned();
				tbl.string("measurement").notNullable().unsigned();
			})
	);
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("recipe_ing")
		.dropTableIfExists("steps")
		.dropTableIfExists("all_ingredients")
		.dropTableIfExists("recipes");
};
