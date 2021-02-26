import React, { useState, useEffect } from "react";
import Cards from "../Components/Cards/Cards";
import axios from "axios";

const Home = () => {
	let response;

	const styles = {
		display: "inline-flex",
		flexWrap: "wrap",
		gap: "12px",
	};

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
			<h1 className="d-flex justify-content-center mt-3">All Employees</h1>
			<hr className="mb-4" />
			<div className="d-flex justify-content-center" style={styles}>
				{employees && <Cards employees={employees} />}
			</div>
		</div>
	);
};

export default Home;
