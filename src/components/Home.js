import React from 'react';
import { Link } from "react-router-dom";

const Home = (props) => {
	return(
		<div className="quote">
        	<p>Ever wondered what Kanye West is thinking?</p> 
        	<p>Click the button below to see random quotes by Yeezy from a free <a href="https://kanye.rest/">REST API</a></p>
	        <Link to="/quotes"><button className="button">Enter</button></Link>
        </div>
	);
}

export default Home;