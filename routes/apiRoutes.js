const express = require("express");
const router = express.Router();

module.exports = (router) => {
	router.get("/backend", (req, res) => {
		res.send("Hello from the backend");
	});
};
