import React from 'react'
import photo from '../images/person.jpeg';

const Card = ({	name, 
				height, 
				hair_color, 
				eye_color,
				title	
			}) => {
	return (
		<div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
			<div className="tl">
				<img src={photo} alt="yoda"/>
				<h2 className="tc yellow">{name}</h2>
				<p>Height: {height}</p>
				<p>Hair: {hair_color}</p>
				<p>Eye: {eye_color}</p>
			</div>
		</div>
	);
}
export default Card;