import {BrowserRouter, Routes, Route} from 'react-router-dom'


//pages and componenets
import Home from './components/Home'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import About from './components/About'
import Contact from './components/Contact'



function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
          <div className='pages'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/resume" element={<Resume />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
