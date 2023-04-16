import React, { Component } from 'react';
import './SearchBox.css';
import { getMovies } from '../../api/getMovies';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });

    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        getMovies(this.state.searchLine).then(data => {
            console.log('data: ', data)
            this.props.setMovies(data?.Search)
        })
        // this.props.setMovies([
        //     {
        //         imdbID: 'tt3896198',
        //         title: "Guardians of the Galaxy Vol. 2",
        //         year: 2017,
        //         poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

        //     },
        //     {
        //         imdbID: 'tt0068646',
        //         title: "The Godfather",
        //         year: 1972,
        //         poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

        //     }
        // ])
    }
    render() {
        const { searchLine } = this.state;
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;