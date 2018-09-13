import React from 'react';
import Card from './Card';
import FilmCard from './FilmCard';

const CardList = ({ data, type }) => {
	return (
		<div className="tc ma2">
		{
			data.map((user, i) => {
				console.log(type);
				switch(type) {
					case 'characters':
						return (
							<Card 
								key={i} 
								name={data[i].name} 
								height={data[i].height} 
								hair_color={data[i].hair_color} 
								eye_color={data[i].eye_color} 
								title={data[i].title}				
							/>
						);
					case 'films':
						return (
							<FilmCard title={data[i].title} />
						);
					default:
						return (
							<Card 
								key={i} 
								name={data[i].name} 
								height={data[i].height} 
								hair_color={data[i].hair_color} 
								eye_color={data[i].eye_color} 
								title={data[i].title}				
							/>
						);						
				}
			})
		}
		</div>
	);
};
export default CardList;