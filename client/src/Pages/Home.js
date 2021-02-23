import React from "react";
import Cards from "../Components/Cards";

const Home = () => {
	return (
		<div className="container">
			<h1>Hello from home</h1>
			<Cards src="https://randomuser.me/api/portraits/women/84.jpg" />
		</div>
	);
};

export default Home;
