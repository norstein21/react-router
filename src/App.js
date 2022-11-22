import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/coba' element={<About />} />
          <Route path='/barang' element={<Products />} />
          <Route path='/barang/:idbarang' element={<SingleProduct />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
    </>
  )
  
}

export default App;
