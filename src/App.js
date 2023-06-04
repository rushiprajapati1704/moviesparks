import {useEffect,useState} from 'react'
import './App.css';
import Movie from './components/Movie.jsx';

const USE_API='http://www.omdbapi.com/?i=tt3896198&apikey=5f1dfa01';

const App=()=>{
  
  const [movies,setMovie]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  
  
  const serachmovie=async(title)=>{
    const response=await fetch(`${USE_API}&s=${title}`);
    const data= await response.json();
      setMovie(data.Search);
      console.log(data);
  }
  
  
  useEffect(()=>{
    serachmovie('Marvel');
  },[]);
  

  return(
    <>
    <h1>MovieParks</h1>
    <div className="search" title='You Can Search Any Hollywood , Bollywood , Tollywood Movie...'>
      <input
        placeholder='Search For Movie'
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        onKeyUp={()=>serachmovie(searchTerm)}
      />
    </div>

    {
        movies?.length>0
        ?(
            <div className="container">
              {movies.map((movie)=>(
                <Movie movie={movie}/>
              ))}
          </div>
        )
        :(
          <div className="empty">
            Movies Not Found.
          </div>
        )
    }

          
    </>
  );
}
export default App;