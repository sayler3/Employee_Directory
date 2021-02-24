import React, { useState, useEffect } from "react";
import Cards from "../Components/Cards";
import axios from "axios";

const Home = () => {
	let response;

	const [employees, setEmployees] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/employees")
			.then((res) => {
				response = res.data;
				return response;
			})
			.then((res) => {
				setEmployees(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<h1>All Employees</h1>
			<div
				style={{
					display: "inline-flex",
					flexWrap: "wrap",
					gap: "12px",
				}}
			>
				{employees && <Cards employees={employees} />}
			</div>
		</div>
	);
};

export default Home;
