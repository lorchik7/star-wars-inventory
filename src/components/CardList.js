import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
	return (
		<div className="tc ma2">
		{
			data.map((user, i) => {
				return (
					<Card 
						key={i} 
						name={data[i].name} 
						height={data[i].height} 
						hair_color={data[i].hair_color} 
						eye_color={data[i].eye_color} 
						homeworld={data[i].homeworld} 
						films={data[i].films} 
						species={data[i].species} 
						vehicles={data[i].vehicles} 	
						starships={data[i].starships}					
					/>
				);
			})
		}
		</div>
	);
};
export default CardList;