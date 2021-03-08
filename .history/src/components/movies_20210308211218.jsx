import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

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
                <th>Like</th>
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
                    <td ><i className="fa fa-heart"></i>
                    </td>
                    <td>
                    <button className="btn btn-danger btn-sm">
                    <i className="fa fa-trash"/>
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