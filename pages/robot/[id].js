import Card from "../../components/card";

const Robot = props => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>{props.robot[0].name}</h1>
			<img
				alt="robots"
				src={`https://robohash.org/${props.robot[0].id}?500x500`}
			/>
			<h2 style={{ color: "white", marginTop: "50px" }}>
				Email: {props.robot[0].email}
			</h2>
		</div>
	);
};

Robot.getInitialProps = async ({ query }) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users?id=${query.id}`
	);
	const robot = await response.json();
	return { robot };
};

export default Robot;
