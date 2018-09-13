import React from 'react'

const FilmCard = ({	title }) => {
	return (
		<div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
			<div>
				<img src="http://l.yimg.com/os/mit/media/m/entity/images/movie_placeholder-103642.png" alt=""/>
				<h2 className="tc yellow">{title}</h2>
			</div>
		</div>
	);
}
export default FilmCard;