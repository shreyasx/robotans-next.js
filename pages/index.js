import { useState } from "react";
import Card from "../components/card";
import SearchBox from "../components/searchBox";
import "tachyons";

const Index = props => {
	const [input, setInput] = useState("");

	const onSearchChange = event => {
		setInput(event.target.value);
	};

	const filteredRobots = props.robots.filter(robot => {
		return robot.name.toLowerCase().includes(input.toLowerCase());
	});

	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h1>ROBOFRIENDS</h1>
				<SearchBox searchChange={onSearchChange} />
			</div>
			{!filteredRobots.length && <h2>No results!</h2>}
			<div style={{ textAlign: "center" }}>
				{filteredRobots.map((robot, i) => {
					return (
						<a
							style={{ cursor: "default", color: "black" }}
							key={i}
							href={`/robot/${robot.id}`}
						>
							<Card
								key={i}
								id={robot.id}
								name={robot.name}
								email={robot.email}
							/>
						</a>
					);
				})}
			</div>
		</>
	);
};

Index.getInitialProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const robots = await response.json();
	return { robots };
};

export default Index;
