import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Halaman Index</div>} />
        <Route path='/coba' element={<h1>Ini adalah halaman Coba</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
