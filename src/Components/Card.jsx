import React from 'react';
import KZ from '../Images/katie-zaferes.png';
import Star from '../Images/star.png';

export default function Card (props) {
	return (
		<div className='card-cont'>
			<img className='profile-photo' src={props.img} />
			<div className='review-info'>
				<img className='star-image' src={Star} />
				<span className='rating'>{props.rating}</span>
				<span className='gray'>({props.reviewCount}) • </span>
				<span className='gray'>{props.country}</span>
			</div>
			<p className='title'>{props.title}</p>
			<h4 className='cost'>
				<p>
					<span>From ${props.price} </span>/person
				</p>
			</h4>
		</div>
	);
}
