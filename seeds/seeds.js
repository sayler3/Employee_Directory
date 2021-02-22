// Setting up to seed database with randomuser api
const axios = require("axios");

axios
	.get("https://randomuser.me/api/?results=2")
	.then(function (response) {
		// handle success
		console.log(response.data);
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	});
