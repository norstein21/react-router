import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProtectedRoute from './pages/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductLayout from "./pages/ProductLayout"

function App() {
  const [user,setUser] = useState(null);

  return ( 
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='coba' element={<About />} />
          {/* route produk */}
          <Route path='barang' element={<ProductLayout />}  >
            <Route index element={<Products />} />
            <Route path=':idbarang' element={<SingleProduct />} />
          </Route>

          <Route path='signin' element={<Login setUser={setUser} />} />
          <Route path='dashboard' 
          element={<ProtectedRoute user={user}>
            <Dashboard user={user} />
          </ProtectedRoute>} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
     
    </BrowserRouter>
    </>
  )
  
}

export default App;
