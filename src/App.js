import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'

function App() {
  return ( 
    <>
    <BrowserRouter>
    <nav>Navigation Bar</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/coba' element={<About />} />
        <Route path='/barang' element={<Products />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    <footer>
      <h2>Footer</h2>
    </footer>
    </>
  )
  
}

export default App;
