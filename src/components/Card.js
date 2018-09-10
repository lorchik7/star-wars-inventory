import React from 'react'

const Card = ({	name, 
				height, 
				hair_color, 
				eye_color,
				homeworld, 
				films, 
				species, 
				vehicles, 	
				starships	
			}) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<div>
				<h2>{name}</h2>
				<p>Height: {height}</p>
				<p>Hair: {hair_color}</p>
				<p>Eye: {eye_color}</p>
			</div>
		</div>
	);
}
export default Card;