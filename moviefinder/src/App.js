import { useState } from 'react';
import { SearchField } from './components/SearchField/SearchField';
import { Navbar } from './components/Navbar/Navbar';
import { Results } from './components/Results/Results';

// @TODO add ErrorBoundry wrapper to catch errors and display a message to the user
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
