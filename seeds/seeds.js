// Setting up to seed database with randomuser api
const axios = require("axios");
// const mongoose = require("mongoose");
// const Employee = require("../models/employee");

//employee model
// const Employee = require("../models/employee");

// let employeeSeeds = [];

// // setting up database connection for deployment and localhost
// mongoose
// 	.connect("mongodb://localhost/directory", {
// 		useNewUrlParser: true,
// 		useFindAndModify: false,
// 		useCreateIndex: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log("MongoDB connected..."))
// 	.catch((err) => console.log(err));

// const seedDB = async () => {
// 	axios
// 		.get(
// 			"https://randomuser.me/api/?results=20&nat=us&exc=gender,registered,nat,id,phone,login"
// 		)
// 		.then(function (response) {
// 			// handle success
// 			employeeSeeds = response.data.results;
// 			// newData.map((items) =>
// 			// 	items.filter((employee) => employee === employee.name)
// 			// );
// 			// newData.filter((employee) => employee === employee.name);
// 			// console.log(newData[0].name.first);
// 			// console.log(employeeSeeds);
// 			// console.log(Object.keys(newData));
// 		})
// 		.then(() => Employee.deleteMany({}))
// 		.then(() => Employee.collection.insertMany(employeeSeeds))
// 		.then((data) => {
// 			console.log(data.result.n + " records inserted!");
// 			process.exit(0);
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 			process.exit(1);
// 		});
// };
// seedDB();

// const MongoClient = require("mongodb").MongoClient;
// const uri =
// 	"mongodb+srv://sam-admin:AhPbHcDtN25KzQcb@cluster0.fdhzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });
// client.connect((err) => {
// 	client.db("directory").collection("employees");
// 	// perform actions on the collection object
// 	let employeeSeeds = [];

// 	axios
// 		.get(
// 			"https://randomuser.me/api/?results=50&nat=us&exc=gender,registered,nat,id,phone,login"
// 		)
// 		.then(function (response) {
// 			// handle success
// 			employeeSeeds = response.data.results;
// 		})
// 		.then(() => collection.drop())
// 		.then(() => collection.insertMany(employeeSeeds))
// 		.then((data) => {
// 			console.log(data.result.n + " records inserted!");
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		});
// 	client.close();
// });

/* mySeedScript.js */

// require the necessary libraries
const MongoClient = require("mongodb").MongoClient;

async function seedDB() {
	// Connection URL
	const uri =
		"mongodb+srv://sam-admin:AhPbHcDtN25KzQcb@cluster0.fdhzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	try {
		await client.connect();
		console.log("Connected correctly to server");

		const collection = client.db("directory").collection("employees");

		collection.drop();

		let employeeSeeds = [];

		await axios
			.get(
				"https://randomuser.me/api/?results=50&nat=us&exc=gender,registered,nat,id,phone,login"
			)
			.then(function (response) {
				// handle success
				employeeSeeds = response.data.results;
			})
			.then(() => collection.insertMany(employeeSeeds));

		console.log("Database seeded! :)");
		client.close();
	} catch (err) {
		console.log(err.stack);
	}
}

seedDB();
