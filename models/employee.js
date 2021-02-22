const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const employeeSchema = new Schema({
	fullName: [
		{
			first: {
				type: String,
				trim: true,
				required: true,
			},
			last: {
				type: String,
				trim: true,
				required: true,
			},
		},
	],
	location: [
		{
			street: {
				type: String,
				trim: true,
			},
			city: {
				type: String,
				trim: true,
			},
			state: {
				type: String,
				trim: true,
			},
			postcode: {
				type: String,
				trim: true,
			},
		},
	],
	email: {
		type: String,
		trim: true,
	},
	cell: {
		type: Number,
		trim: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Employee", employeeSchema);
