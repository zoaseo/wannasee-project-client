import './App.css';
import Header from './components/Header';
import MainPage from './main/index';
import { Route, Routes } from 'react-router-dom'
import GenrePage from './genre';
import RegionPage from './region';
import PeriodPage from './period';
import Detailconcert from './components/Detailconcert';
import ConcertGenre from './genre/index_g';
import Footer from './components/Footer';

function App() {
 
  return (
    <div className="App">
      {/* <div class="cursor"></div> */}
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/genre" element={<GenrePage/>}/>
        <Route path="/genre/:genre" element={<ConcertGenre/>}/>
        <Route path="/region" element={<RegionPage/>}/>
        <Route path="/period" element={<PeriodPage/>}/>
        <Route path="/detailview/:id" element={<Detailconcert/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
