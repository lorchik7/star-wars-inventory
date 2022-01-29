import React from 'react'
import photoPlaceholder from '../images/movie_placeholder.png';

const FilmCard = ({	title }) => {
	return (
		<div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
			<div>
				<img src={photoPlaceholder} alt=""/>
				<h2 className="tc yellow">{title}</h2>
			</div>
		</div>
	);
}
export default FilmCard;