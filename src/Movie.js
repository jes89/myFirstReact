import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './movies.css';

Movie.prototype = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,   
    synopsis : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
    

}

MoviePoster.prototype = {
    poster : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
}

MovieGenres.prototype = {
    genres : PropTypes.string.isRequired
}

function Movie({title, poster, genres, synopsis}) {
    return <div className="movie">
                <div className="movie_column">
                    <MoviePoster poster={poster} title={title}/>
                </div>
                <div className="movie_column">
                    <h1>{title}</h1>
                    <div className="movie_genres">
                    {
                        genres.map(
                            (genre, index) => <MovieGenres genre={genre} key={index}  />)
                    }
                    </div>
                    <p className="movie_synopsis">
                        <LinesEllipsis
                            text={synopsis}
                            maxLine='3'
                            ellipsis=' ...'
                            trimright
                            basedOn='letters'
                        />
                        
                    </p>
                </div>
            </div>;
}

function MovieGenres({genre}){
    return (<span className="movie_genre">{genre}</span>);
}


function MoviePoster({poster, title}) {
    return  (<img src={poster} title={title} alt={title} className="movie_poster" />);
}



export default Movie;
