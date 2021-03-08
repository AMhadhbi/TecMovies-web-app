import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import 
class Movies extends Component {
    state = { 
        movies : getMovies()
     }
    render() { 
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
            

            </tbody>
          </table>
         );
    }
}
 
export default Movies;