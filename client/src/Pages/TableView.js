import React, { useState, useEffect } from "react";
import axios from "axios";
import Tables from "../Components/Tables";

const TableView = () => {
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
			<h1>Table View</h1>
			{employees && <Tables employees={employees} />}
		</div>
	);
};

export default TableView;
