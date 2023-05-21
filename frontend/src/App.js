import {BrowserRouter, Routes, Route} from 'react-router-dom'


//pages and componenets
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Resume from './components/Resume';



function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
          <div className='pages'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/resume" element={<Resume />}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;