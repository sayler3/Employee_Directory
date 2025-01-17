import React, { useState } from "react";
import "ka-table/style.css";

import { kaReducer, Table } from "ka-table";
import { DataType, SortDirection, SortingMode } from "ka-table/enums";
import { search } from "ka-table/actionCreators";

const Tables = (props) => {
	const employees = props.employees;
	console.log(employees);

	const ProfilePic = (props) => {
		return (
			<div className="thumb">
				<img
					src={props.rowData.picture.thumbnail}
					alt="picture"
					title="picture"
					className="rounded-circle"
				/>
			</div>
		);
	};

	const tablePropsInit = {
		columns: [
			{
				key: "profilePic",
				title: "",
				dataType: DataType.String,
				style: { width: "8%" },
			},
			{
				key: "name.first",
				title: "First Name",
				dataType: DataType.String,
				style: { width: "10%" },
				sortDirection: SortDirection.Ascend,
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
			<input
				placeholder="Search..."
				type="search"
				onChange={(e) => {
					dispatch(search(e.currentTarget.value));
				}}
				className="search"
				style={{ marginBottom: 20 }}
			/>
			<Table
				{...tableProps}
				childComponents={{
					cellText: {
						content: (props) => {
							if (props.column.key === "profilePic") {
								return <ProfilePic {...props} />;
							}
						},
					},
					table: {
						elementAttributes: () => ({
							className: "table table-striped table-hover table-bordered",
						}),
					},
					tableHead: {
						elementAttributes: () => ({
							className: "thead-dark",
						}),
					},
					noDataRow: {
						content: () => "No Data Found",
					},
				}}
				dispatch={dispatch}
			/>
		</div>
	);
};

export default Tables;
