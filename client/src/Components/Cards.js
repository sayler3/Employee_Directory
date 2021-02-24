import React from "react";

const Cards = (props) => {
	return (
		<div
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
					style={{ objectFit: "cover", border: "2px solid rgb(208, 208, 208)" }}
					className="profilePic rounded-circle"
					src={props.src}
					alt="profile pic"
				/>
			</div>
			<div style={{ paddingTop: "10px" }} className="card-flex container">
				<h3 style={{ textAlign: "center" }}>Pepper Pots</h3>
			</div>
			<div style={{ paddingTop: "10px" }} className="container">
				<p>Cell: (123) 555-1234</p>
				<p>Email: something@example.com</p>
				<p>
					Address: <br /> 5116 Fairview St <br /> Austin, Utah 79246
				</p>
			</div>
		</div>
	);
};

export default Cards;
