import React from 'react';
import {Link} from 'react-router-dom';

const Movie = ({title, poster,id, download})=>{
	return (
		<div className="col-md-3 movie-wrapper">
			<a href={download}>
				<div className="movie">
					<h6 className="title">{title}</h6>
					<img src={poster} alt=""/>
				</div>
			</a>
		</div>
	)
}

export default Movie; 