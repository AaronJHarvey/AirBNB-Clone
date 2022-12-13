import React from 'react';
import KZ from '../Images/katie-zaferes.png';
import Star from '../Images/star.png';

export default function Card (props) {
	let badgeText;
	if (props.info.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.info.location === 'Online') {
		badgeText = 'ONLINE';
	}

	return (
		<div className='card'>
			{badgeText && <div className='card--badge'>{badgeText}</div>}
			<img className='profile-photo' src={`src/Images/${props.info.coverImg}`} />
			<div className='review-info'>
				<img className='star-image' src={Star} />
				<span className='rating'>{props.info.stats.rating}</span>
				<span className='gray'>({props.info.stats.reviewCount}) • </span>
				<span className='gray'>{props.info.location}</span>
			</div>
			<p className='title'>{props.info.title}</p>
			<h4 className='cost'>
				<p>
					<span>From ${props.info.price} </span> /person
				</p>
			</h4>
		</div>
	);
}
