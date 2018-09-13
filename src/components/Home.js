import React from 'react';
import yoda from '../images/yoda.jpg';

const Home = () => {
	return (
        <div className="tc white">
			<h1>Welcome to the Star Wars Inventory!</h1>
			<p>Here you can find all information about the Star Wars characters and movies.</p>
			<p>Enjoy browsing!</p>
			<img src={yoda} alt="yoda"/>
        </div>
	);
}
export default Home;