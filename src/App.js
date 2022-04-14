import React from "react";

function Fruit({ name, picture }) {
	return (
		<div>
			<h2> 내가 좋아하는 {name}</h2>
			<img src={picture} />
		</div>
	);
}
const fruitILike = [
	{
		id: 1,
		name: "바나나",
		image: "http://qwerew.cafe24.com/images/banana.png",
	},
	{
		id: 2,
		name: "오렌지",
		image: "http://qwerew.cafe24.com/images/orange.png",
	},
	{
		id: 3,
		name: "사과",
		image: "http://qwerew.cafe24.com/images/apple.png",
	},
	{
		id: 4,
		name: "메론",
		image: "http://qwerew.cafe24.com/images/melon.jpg",
	},
];

const renderFruit = dish => <Fruit key={dish.id} name={dish.name} picture={dish.image} />;

function App() {
  console.log(fruitILike.map(renderFruit));
	return <div>{fruitILike.map(renderFruit)}</div>;
}

export default App;
