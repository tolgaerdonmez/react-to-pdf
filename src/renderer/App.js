import React from "react";

const data = [
	{ name: "Luke Skywalker", img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png" },
	{ name: "Obi-Wan (Ben) Kenobi", img: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" },
	{ name: "Darth Vader", img: "https://upload.wikimedia.org/wikipedia/tr/8/83/DarthVader.JPG" },
];

function Character({ name, img }) {
	return (
		<div>
			<img src={img} alt={name} height={250} />
			<h3>{name}</h3>
		</div>
	);
}

function App() {
	return (
		<html>
			<h1>Some Star Wars Characters</h1>
			{data.map((char, i) => (
				<Character {...char} key={i} />
			))}
		</html>
	);
}

export default App;
