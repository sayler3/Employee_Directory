import React, { useState } from "react";
import "ka-table/style.css";

import { kaReducer, Table } from "ka-table";
import { DataType, SortDirection, SortingMode } from "ka-table/enums";
import { getSortedColumns } from "ka-table/Utils/PropsUtils";

const Tables = (props) => {
	const employees = props.employees;
	console.log(employees);

	const tablePropsInit = {
		columns: [
			{
				key: "name.first",
				title: "First Name",
				dataType: DataType.String,
				style: { width: "10%" },
			},
			{
				key: "name.last",
				title: "Last Name",
				dataType: DataType.String,
				style: { width: "15%" },
			},
			{
				key: "location.state",
				title: "State",
				dataType: DataType.String,
				style: { width: "20%" },
			},
			{
				key: "email",
				title: "Email Address",
				dataType: DataType.String,
				style: { width: "20%" },
			},
			{
				key: "cell",
				title: "Cell",
				dataType: DataType.String,
				style: { width: "20%" },
			},
		],
		data: employees,
		rowKeyField: "_id",
		sortingMode: SortingMode.Single,
	};

	const [tableProps, changeTableProps] = useState(tablePropsInit);
	const dispatch = (action) => {
		changeTableProps((prevState) => kaReducer(prevState, action));
	};

	return (
		<div className="contianer">
			<input type="search" />
			<Table {...tableProps} dispatch={dispatch} />
		</div>
	);
};

export default Tables;
