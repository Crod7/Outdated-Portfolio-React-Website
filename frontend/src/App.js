import {BrowserRouter} from 'react-router-dom'


//pages and componenets
import Home from './components/Home'
import Footer from './components/Footer'



function App() {

  return (
    <div className="App">
        <BrowserRouter basename='/Portfolio-React-Website'>
          <div className='pages'>
            <Home />
          </div>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
