import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
// import Test from './Components/Test';
import data from './data';

export default function App () {
	const cardData = data.map((info) => <Card key={info.id} {...info} />);

	return (
		<div>
			<Navbar />
			<Hero />
			<section className='cards-list'>{cardData}</section>
		</div>
	);
}
