const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const employeeSchema = new Schema({
	date: {
		type: Date,
		default: Date.now,
	},
	employee: {
		type: Array,
	},
});

module.exports = mongoose.model("Employee", employeeSchema);
