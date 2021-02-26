const express = require("express");
const employee = require("../models/employee");
const router = express.Router();

//employee model
const Employee = require("../models/employee");

module.exports = (router) => {
	//get all employees
	router.put("/api/employees", (req, res) => {
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

	//delete an employee
	router.delete("/api/employees/:id", (req, res) => {
		Employee.findById(req.params.id)
			.then((employee) =>
				employee.remove().then(() => res.json({ success: true }))
			)
			.catch((err) => res.status(404).json({ success: false }));
	});
};
