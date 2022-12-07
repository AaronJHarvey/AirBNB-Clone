import React from 'react';
import KZ from '../Images/katie-zaferes.png';
import Star from '../Images/star.png';

export default function Card () {
	return (
		<div className='card-cont'>
			<img className='profile-photo' src={KZ} />
			<div className='review-info'>
				<img className='star-image' src={Star} />
				<span className='rating'>5.0</span>
				<span className='gray'>(6) • </span>
				<span className='gray'>USA</span>
			</div>
			<p className='title'>Life Lessons with Katie Zaferes</p>
			<h4 className='cost'>
				<p>
					<span>From $136 </span> /person
				</p>
			</h4>
		</div>
	);
}
