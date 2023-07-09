import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {

  return (
      <BrowserRouter>
            <Navbar/>
              <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contact' element={<Contact/>}/>
              </Routes>
            <Footer/>
      </BrowserRouter>
  )
}

export default App
