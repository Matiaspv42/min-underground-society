import Navbar from './components/Navbar/Navbar';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Roadmap from './components/Roadmap/Roadmap'
import { Canvas } from "@react-three/fiber";
import './experience.css'
import Box from './components/Box';
import Nft from './components/Nft/Nft';
function App() {
  return (
    <div className="App flex flex-col relative">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/roadmap' element={<Roadmap/>} />
        <Route path='/nft' element={<Nft/>} />
      </Routes>
      {/* <Canvas className='canvas absolute'>
        <ambientLight intensity={0.1} />
        <directionalLight color="black" position={[0, 0, 5]} />
        <Box/>
      </Canvas> */}
    </div>
  );
}

export default App;
