//bring in dependencies
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// setting port for deployment and running localhost
const PORT = process.env.PORT || 3000;

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

// setting up middleware
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// bringing in routes
require("./routes/apiRoutes")(app);

app.listen(PORT, function () {
	console.log(`Listening on http://localhost:${PORT}`);
});
