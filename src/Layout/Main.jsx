import React from "react"
import { Movies } from '../Components/Movies'
import Search from "../Components/Search"

export default class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.searchMovies('hobbit')
    }

    searchMovies = (search) => {
        this.setState({movies: []})
        const url = `https://www.omdbapi.com/?apikey=7fb73ed3&s=${search}`
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return (
            <>
                <main className="content container">
                    <Search onSearch={this.searchMovies} />
                    {
                        movies.length 
                        ? <Movies movies={this.state.movies} />
                        : <h3>Loading...</h3>
                    }
                    
                </main>
            </>
        )
    }
}
