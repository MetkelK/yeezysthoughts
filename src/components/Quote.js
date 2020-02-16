import React from 'react';

const Quote = (props) => {
	return(
		<blockquote><p>{props.quote}</p> 
			<footer><cite>- Yeezy</cite></footer>
		</blockquote>
	)
}

export default Quote;