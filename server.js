//bring in dependencies
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// setting port for deployment and running localhost
const PORT = process.env.PORT || 3000;

// setting up database connection for deployment and localhost

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
