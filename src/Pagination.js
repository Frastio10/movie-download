import React, {useState, useEffect} from 'react';

const Pagination = ({page, max})=>{
	return (
		<nav aria-label="..." className="float-right mt-3 bg">
		  <ul className="pagination">
		    <li className="page-item bg-dark">
		      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
		    </li>
		    <li className="page-item"><a className="page-link" href="#">1</a></li>
		    <li className="page-item active" aria-current="page">
		      <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
		    </li>
		    <li className="page-item"><a className="page-link" href="#">3</a></li>
		    <li className="page-item">
		      <a className="page-link" href="#">Next</a>
		    </li>
		  </ul>
		</nav>
	)
}

export default Pagination;