import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
    
    state = {}
    
    componentDidMount() {
        this._makeMovies();   
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie) => {
            return <Movie   key={movie.id} 
                            title={movie.title_english} 
                            poster={movie.large_cover_image}  
                            genres={movie.genres}
                            synopsis={movie.synopsis} />
        })
        return movies;
    }
                                             
    _makeMovies = async () => {
        const movies = await this._callApi(); 
        this.setState({
            movies
        })
    }
        
    _callApi = () => {
        return fetch("https://yts.am/api/v2/list_movies.json")
        .then((resultData) => resultData.json())
        .then(json => json.data)
        .then(data => data.movies)
        .catch((err) => console.log(err))
    }
    
    render() {
        
        const { movies } = this.state;
        
        return (
            <div className={ movies ? "App" : "App--loading"}>
                {this.state.movies ? this._renderMovies() : "loading"}
            </div>
        );
    }
}

export default App;
