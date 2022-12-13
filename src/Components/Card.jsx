import React from 'react';
import KZ from '../Images/katie-zaferes.png';
import Star from '../Images/star.png';

export default function Card (props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE';
	}

	return (
		<div className='card'>
			{badgeText && <div className='card--badge'>{badgeText}</div>}
			<img className='profile-photo' src={`src/Images/${props.coverImg}`} />
			<div className='review-info'>
				<img className='star-image' src={Star} />
				<span className='rating'>{props.rating}</span>
				<span className='gray'>({props.reviewCount}) • </span>
				<span className='gray'>{props.location}</span>
			</div>
			<p className='title'>{props.title}</p>
			<h4 className='cost'>
				<p>
					<span>From ${props.price} </span> /person
				</p>
			</h4>
		</div>
	);
}
