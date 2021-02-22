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

	//post new employee
	router.post("/api/employees", (req, res) => {
		Employee.create(req.body)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
};
