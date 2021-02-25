import React from "react";

const Cards = (props) => {
	console.log(props);
	return (
		<>
			{props.employees.map((employee, index) => (
				<div
					key={index}
					className="card rounded"
					style={{
						width: "18rem",
						backgroundColor: "whitesmoke",
						boxShadow: "rgb(153 153 153) 0px 10px 10px",
					}}
				>
					<div
						className="container"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							paddingTop: "20px",
						}}
					>
						<img
							style={{
								objectFit: "cover",
								border: "2px solid rgb(208, 208, 208)",
							}}
							className="profilePic rounded-circle"
							src={employee.picture.large}
							alt="profile pic"
						/>
					</div>
					<div style={{ paddingTop: "10px" }} className="card-flex container">
						<h3 style={{ textAlign: "center" }}>
							{employee.name.first} {employee.name.last}
						</h3>
					</div>
					<div style={{ paddingTop: "10px" }} className="container">
						<p>Cell: {employee.cell}</p>
						<p>Email: {employee.email}</p>
						<p>
							Address: <br /> {employee.location.street.number}{" "}
							{employee.location.street.name} <br /> {employee.location.city},{" "}
							{employee.location.state} {employee.location.postcode}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default Cards;
