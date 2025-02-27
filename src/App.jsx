import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import "./css/App.css"
import HomePage from './components/HomePage'
import SearchProductPage from './components/SearchProductsPage'
import AddProductPage from './components/AddProductPage'
import UpdateProductPage from "./components/UpdateProductPage"
import DeleteProductPage from "./components/DeleteProductPage"
import CatagorySearchPage from './components/CatagorySearchPage'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/search-products' element={<SearchProductPage />}></Route>
          <Route path='/add-products' element={<AddProductPage />}></Route>
          <Route path='/update-products' element={<UpdateProductPage />}></Route>
          <Route path='/search-category' element={<CatagorySearchPage />}></Route>
          <Route path='/delete-products' element={<DeleteProductPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App