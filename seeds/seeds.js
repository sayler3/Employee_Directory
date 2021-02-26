// Setting up to seed database with randomuser api
const axios = require("axios");
const mongoose = require("mongoose");
// const Employee = require("../models/employee");

//employee model
const Employee = require("../models/employee");

let employeeSeeds = [];

// setting up database connection for deployment and localhost
mongoose
	.connect("mongodb://localhost/directory", {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.log(err));

const seedDB = async () => {
	axios
		.get(
			"https://randomuser.me/api/?results=20&nat=us&exc=gender,registered,nat,id,phone,login"
		)
		.then(function (response) {
			// handle success
			employeeSeeds = response.data.results;
		})
		.then(() => Employee.deleteMany({}))
		.then(() => Employee.collection.insertMany(employeeSeeds))
		.then((data) => {
			console.log(data.result.n + " records inserted!");
			process.exit(0);
		})
		.catch((err) => {
			console.error(err);
			process.exit(1);
		});
};
seedDB();

//------------------------------------------------------------------------------
// To seed mongo Atlas run code commented code below

// const MongoClient = require("mongodb").MongoClient;

// async function seedDB() {
// 	// Connection URL
// 	const uri = "";

// 	const client = new MongoClient(uri, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	});

// 	try {
// 		await client.connect();
// 		console.log("Connected correctly to server");

// 		const collection = client.db("directory").collection("employees");

// 		collection.drop();

// 		let employeeSeeds = [];

// 		await axios
// 			.get(
// 				"https://randomuser.me/api/?results=50&nat=us&exc=gender,registered,nat,id,phone,login"
// 			)
// 			.then(function (response) {
// 				// handle success
// 				employeeSeeds = response.data.results;
// 			})
// 			.then(() => collection.insertMany(employeeSeeds));

// 		console.log("Database seeded! :)");
// 		client.close();
// 	} catch (err) {
// 		console.log(err.stack);
// 	}
// }

// seedDB();
