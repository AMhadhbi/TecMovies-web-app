import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './like';

class Movies extends Component {
    state = { 
        movies : getMovies()
     }
    handleLike = (movie) => {
      const movies = [...this.state.movies];
      const index = movies.indexOf(movie);
      movies[index] = { ...movies[index]};
      movies[index].liked = !movies[index].liked;
      this.setState({movies})
    }
    handelDelete = (movie) => {
      const movies = [...this.state.movies];
      let movieInDb = movies.find((m) => m._id === movie._id);
      movies.splice(movies.indexOf(movieInDb), 1);
      this.setState({movies});
    
    }
    render() { 
        const {movies} = this.state;
        return ( 
            <table className="table table-striped table-dark">
            <thead className="bg-warning">
              <tr>
                <th>Titel</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th/>
                <th/>
              </tr>
            </thead>
            <tbody>
            {movies.map((movie) => (
                <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td >
                      <Like 
                      movie={movie}
                      OnLike={this.handleLike}/>
                    </td>
                    <td>
                    <button className="btn btn-danger btn-sm badge-pill" 
                    onClick={ () => this.handelDelete(movie)} >Delete <i className="fa fa-trash"/>
                    </button>
                    </td>
            </tr>
            ))}

            </tbody>
          </table>
         );
    }
}
 
export default Movies;