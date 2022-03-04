import './App.css';
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage';
import { Routes, Route } from 'react-router-dom';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/new-beer' element={<NewBeerPage />} />
        <Route exact path='/random-beer' element={<RandomBeerPage />} />
        <Route exact path='/beers/:id' element={<BeerDetailsPage />} />
        <Route exact path='/beers' element={<BeersPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
