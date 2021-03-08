import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import 
class Movies extends Component {
    state = { 
        movies : getMovies()
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
              </tr>
            </thead>
            <tbody>
            {movies.map((movie) => (
                <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
            </tr>
            ))}

            </tbody>
          </table>
         );
    }
}
 
export default Movies;