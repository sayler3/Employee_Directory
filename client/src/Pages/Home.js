import React, { useState, useEffect } from "react";
import Cards from "../Components/Cards";
import axios from "axios";

const Home = () => {
	let response;
	const [employeeData, setemployeeData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/employees")
			.then((res) => {
				setemployeeData(res);
				console.log(res);
				console.log(employeeData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<h1>All Employees</h1>
			<Cards src="https://randomuser.me/api/portraits/women/84.jpg" />
		</div>
	);
};

export default Home;
