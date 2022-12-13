import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
// import Test from './Components/Test';
import data from './data';

export default function App () {
	const cardData = data.map((info) => (
		<Card
			img={info.coverImg}
			rating={info.stats.rating}
			reviewCount={info.stats.reviewCount}
			location={info.location}
			title={info.title}
			price={info.price}
		/>
	));

	console.log(cardData);

	return (
		<div>
			<Navbar />
			<Hero />
			{cardData}
		</div>
	);
}
