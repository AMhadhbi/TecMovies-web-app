import React from 'react';
import Movies from './components/movies';
import Navbar from './components/navbar';

function App() {
  return (
    <React.Fragment>
      //<Navbar/>
      <div className='container'>
      <Movies/>
      </div>
    </React.Fragment>

   );
}

export default App;
