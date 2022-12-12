import React from 'react';

export default function Test () {
	const hours = new Date().getHours();
	let timeOfDay;

	if (hours < 12) {
		timeOfDay = 'morning';
	} else if (hours >= 12 && hours < 17) {
		timeOfDay = 'afternoon';
	} else {
		timeOfDay = 'night';
	}

	return <h1>Good {timeOfDay}</h1>;
}
