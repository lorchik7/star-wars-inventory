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
		<div className="tc bg-near-black dib br3 pa3 ma2 grow bw2 shadow-5">
			<div className="tl">
				<img src="http://www.topvending.co.za/wp-content/uploads/2015/09/placeholder-man-grid-240x268.png" alt=""/>
				<h2 className="tc">{name}</h2>
				<p>Height: {height}</p>
				<p>Hair: {hair_color}</p>
				<p>Eye: {eye_color}</p>
			</div>
		</div>
	);
}
export default Card;