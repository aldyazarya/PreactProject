/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable object-curly-spacing */
import { h, Component } from 'preact'
import axios from 'axios'
import MovieCard from './movieCard'


// const API = 'd838b4d8'

export default class MovieList extends Component {
    state = {
        moviesList: ['tt2294629'],
        searchTerm: ''
    }

    search = event => {
        event.preventDefault()
        axios.get(
            `https://www.omdbapi.com/?apikey=756abb2f&s=${this.state.searchTerm}&plot=full`
        )
        .then(res => res.data)
        .then(res => {
            if (!res.Search) {
                this.setState({ moviesList: [] })
                return;
            }

            const moviesList = res.Search.map(movie => movie.imdbID)
            this.setState({
                moviesList
            })
        })

    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        const {moviesList} = this.state
        console.log(this.state.moviesList);
        

        return (
            <div>
                <form onSubmit={this.search}>
                    <input placeholder=" Search for a movie" onChange = { this.handleChange} />
                    <button type="submit"> Search
                    </button>
                </form>
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        <MovieCard movieID={movie} key={movie} />
                    ))
                ) : (
                    <p>
                        Couldn't find any movie. Please search again using another search criteria.
                    </p>
                )}
            </div>
        )
    }
}