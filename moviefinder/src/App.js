import { useState } from 'react';
import './App.css';
import { SearchField } from './components/SearchField/SearchField';
import { Navbar } from './components/navbar/Navbar';
import { Results } from './components/Results/Results';

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <SearchField setMovies={setMovies} />
      <Results movies={movies} />
    </div>
  );
}

export default App;
