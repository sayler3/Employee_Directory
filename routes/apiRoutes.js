const express = require("express");
const router = express.Router();

//employee model
const Employee = require("../models/employee");

module.exports = (router) => {
	//get all employees
	router.get("/api/employees", (req, res) => {
		Employee.find({})
			.sort({ date: -1 })
			.then((employees) => res.json(employees));
	});
};
