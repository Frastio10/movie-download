import React, {Component, useState, useEffect} from 'react';
import Movie from './Movie';
import MovieDetail from './MovieDetail';
import Pagination from './Pagination';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch]= useState([""]);

  useEffect(()=>{
    fetchData();
  },[query])
  
  const proxy = "https://cors-anywhere.herokuapp.com";
  const key = "jch8N08yQk9h2fXBsioQDghJerAgYe9rNh9nPG63zPkObFn4qp6pD9RJAwKslaai";

  const fetchData = async () =>{
      const res = await fetch(`${proxy}/https://ducky-database-movies-api.herokuapp.com/api/movies?key_token=${key}&search=${query}&page=${page}&limit=12`);
      const data = await res.json();
      console.log(data.data);
      setItem(data.data);
  }

   const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
     <Router>
       <div className="my-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                 <div className="w-100">
                   <h3>Welcome Bois</h3>    
                  </div>
                  <div className="w-100">
                    <form onSubmit={getSearch} className="search-form">
                      <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
                      <button type="submit" className="search-button">
                        Search
                      </button>
                    </form> 
                  </div>
             </div>
            </div>
            <Switch>
              <Route path="/movie/:id/" component={MovieDetail}/>
                <div className="row">
                   { 
                  item.map(
                    item=>(
                        <Movie
                          key={item._id}
                          id={item._id}
                          title={item.title}
                          download={item.linkDownload}
                          poster={item.movieInformation.poster}
                        />
                     )
                  )
                }
                </div>
              </Switch>
            <Pagination/>
              
          </div>
       </div>
      </Router>
    </div>
    
  )
}

export default App;
