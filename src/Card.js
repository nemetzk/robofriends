import React from 'react';
import './Card.css';
const Card = (props) => {
	const {name, email, id} = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<div className='idc'>
					<p>{id}</p>
				</div>
				<p>{email}</p>

			</div>
		</div>
	);
}

export default Card;