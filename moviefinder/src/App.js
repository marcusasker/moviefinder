import './App.css';
import { Searchbar } from './components/Searchbar/Searchbar';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
    </div>
  );
}

export default App;
