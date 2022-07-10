import './App.css';
import Header from './components/Header';
import MainPage from './main/index';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
