import React from 'react'

const Movie = (props) => {
  const wiki="https://www.allmovie.com/search/all/"+props.movie.Title;
  return (
    <div className='movie'>
       <div className="movie">
          <div className='year'>
            <p>{props.movie.Year}</p>
          </div>
          <div>
            <img src={props.movie.Poster!== 'N/A' ? props.movie.Poster : "https://via.placeholder.com/300"} alt={props.movie.Title} />
          </div>

          <div className='detail'>
            <span className='type'>{props.movie.Type}</span>
            <h3><a href={wiki} target='_blank' style={{color:'white'}} className='red'>{props.movie.Title}</a></h3>
          </div>
        </div>
    </div>
  )
}

export default Movie;