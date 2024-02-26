import { useState } from 'react';
import { SearchField } from './components/SearchField/SearchField';
import { Results } from './components/Results/Results';
import { Header } from './components/Header/Header';

// @TODO add ErrorBoundry wrapper to catch errors and display a message to the user
function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <Header />
      <SearchField setMovies={setMovies} />
      <Results movies={movies} />
    </div>
  );
}

export default App;
