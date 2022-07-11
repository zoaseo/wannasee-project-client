import './App.css';
import Header from './components/Header';
import MainPage from './main/index';
import { Route, Routes } from 'react-router-dom'
import GenrePage from './genre';
import RegionPage from './region';
import PeriodPage from './period';

function App() {
  
  return (
    <div className="App">
      {/* <div class="cursor"></div> */}
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/genre" element={<GenrePage/>}/>
        <Route path="/region" element={<RegionPage/>}/>
        <Route path="/period" element={<PeriodPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
