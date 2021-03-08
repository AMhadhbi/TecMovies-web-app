import './App.css';
import React from 'react';
import Movies from './components/movies';
import Navbar from './components/navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className='container'>
        <Movies/>
        </main>
    </React.Fragment>

   );
}

export default App;
