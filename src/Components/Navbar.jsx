import React from 'react';
import Logo from '../Images/airbnb-logo.png';

export default function Navbar () {
	return (
		<nav className='navbar'>
			<img id='logo' src={Logo} />
		</nav>
	);
}
