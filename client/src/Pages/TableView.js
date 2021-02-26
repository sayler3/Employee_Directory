import React, { useState, useEffect } from "react";
import axios from "axios";
import Tables from "../Components/Tables/Tables";

const TableView = () => {
	let response;

	const [employees, setEmployees] = useState();

	useEffect(() => {
		axios
			.put("/api/employees", null)
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
			<h1 className="d-flex justify-content-center mt-3">Table View</h1>
			<hr className="mb-4" />
			{employees && <Tables employees={employees} />}
		</div>
	);
};

export default TableView;
