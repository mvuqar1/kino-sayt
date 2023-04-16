import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

class MainPage extends Component {
    state = {
        movies: [],
        favoriteMovies: []
    }
    addToFavorites = (movie) => {
        if (!this.state.favoriteMovies.some(item => item.imdbID === movie.imdbID)) {
            this.setState({
                favoriteMovies: [...this.state.favoriteMovies, movie]
            })
        }
    }

    removeFromFavorites = (id) => {
        this.setState({
            favoriteMovies: this.state.favoriteMovies.filter(item => item.imdbID !== id)
        })
    }

    setMovies = (movies) => {
        this.setState({
            movies,
        })
    }
    render() { 
        console.log('fsdfsd: ', this.state.favoriteMovies)
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox setMovies={this.setMovies} />
                        </div>
                        <div className="main-page__movies">
                            <Movies addToFavorites={this.addToFavorites} movies={this.state.movies} />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites removeFromFavorites={this.removeFromFavorites} data={this.state.favoriteMovies} />
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;