import Navbar from './components/Navbar';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Roadmap from './components/Roadmap'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/roadmap' element={<Roadmap/>} />
      </Routes>
    </div>
  );
}

export default App;
